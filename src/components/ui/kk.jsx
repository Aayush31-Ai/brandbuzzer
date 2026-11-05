import React, { useEffect, useRef } from 'react';

/**
 * Converts a hex color string to normalized [r, g, b] (0.0 to 1.0)
 */
function hexToRgb(hex, fallback = [0.85, 0.85, 0.88]) {
  if (!hex || typeof hex !== 'string') return fallback;
  let c = hex.replace('#', '').trim();
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  if (c.length !== 6) return fallback;
  const num = parseInt(c, 16);
  if (isNaN(num)) return fallback;
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

const VERTEX_SHADER_SOURCE = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SOURCE = `
precision mediump float;
varying vec2 v_uv;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec3 u_color_bg;
uniform vec3 u_color_accent;
uniform vec3 u_color_secondary;
uniform float u_intensity;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

  // Smooth mouse wave displacement
  vec2 m = (u_mouse * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  float mouseDist = length(p - m);
  float mouseWave = sin(mouseDist * 8.0 - u_time * 2.0) * exp(-mouseDist * 2.2) * 0.04;

  float t = u_time * 0.26;

  // Smooth domain warping with coupled trigonometric functions (ambient fluid drift)
  vec2 q = vec2(
    sin(p.x * 1.2 + t * 0.45 + mouseWave),
    cos(p.y * 1.1 - t * 0.35 + mouseWave)
  );

  vec2 r = vec2(
    sin(p.x * 1.5 + q.x * 1.1 + t * 0.28),
    cos(p.y * 1.4 + q.y * 1.0 - t * 0.35)
  );

  // Soft harmonic flow
  float wave1 = sin(p.x * 0.9 + r.x * 1.2 + t * 0.3);
  float wave2 = cos(p.y * 0.9 + q.y * 1.1 - t * 0.26);
  float flow = 0.5 + 0.5 * (wave1 * 0.5 + wave2 * 0.5);

  // Velvety liquid silk folds (diffuse, non-harsh with visible presence)
  float ridge = 1.0 - abs(sin((p.x * 0.85 + p.y * 0.95 + r.x * 1.0 + r.y * 0.9) * 0.95));
  ridge = pow(ridge, 2.2);

  // Base Obsidian Tone (#050505)
  vec3 col = u_color_bg;

  // Charcoal/graphite fluid undercurrent for rich body and depth
  float smoke = smoothstep(0.30, 0.86, flow);
  col = mix(col, u_color_secondary, smoke * 0.65 * u_intensity);

  // Silvery-gray liquid silk highlights (balanced visibility, clean & elegant)
  float highlights = pow(ridge, 2.2) * 0.52 + pow(flow, 2.8) * 0.28;
  col = mix(col, u_color_accent, clamp(highlights * u_intensity, 0.0, 0.62));

  // Interactive cursor wave aura
  float mouseGlow = exp(-mouseDist * 3.0) * 0.18 * u_intensity;
  col += u_color_accent * mouseGlow;

  gl_FragColor = vec4(col, 1.0);
}
`;

/**
 * ShaderBackground Component
 * 
 * GPU-accelerated interactive WebGL fluid shader.
 * Tuned for a subtle, silky light-gray fluid wave effect on obsidian black.
 */
export function ShaderBackground({
  className = '',
  bgColor = '#050505',
  accentColor = '#d4d4d8',
  secondaryColor = '#18181b',
  intensity = 0.38,
  speed = 0.28,
  interactive = true,
  children,
  ...props
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mousePosRef = useRef({ current: [0, 0], target: [0, 0] });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'high-performance' }) ||
      canvas.getContext('experimental-webgl');

    if (!gl) {
      console.warn('ShaderBackground: WebGL is not supported on this device/browser.');
      return;
    }

    // Helper: Compile Shader
    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(VERTEX_SHADER_SOURCE, gl.VERTEX_SHADER);
    const fragShader = compileShader(FRAGMENT_SHADER_SOURCE, gl.FRAGMENT_SHADER);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen Quad Buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // Uniform Locations
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uColorBg = gl.getUniformLocation(program, 'u_color_bg');
    const uColorAccent = gl.getUniformLocation(program, 'u_color_accent');
    const uColorSecondary = gl.getUniformLocation(program, 'u_color_secondary');
    const uIntensity = gl.getUniformLocation(program, 'u_intensity');

    // Convert colors
    const bgRgb = hexToRgb(bgColor, [0.02, 0.02, 0.02]);
    const accentRgb = hexToRgb(accentColor, [0.85, 0.85, 0.88]);
    const secondaryRgb = hexToRgb(secondaryColor, [0.09, 0.09, 0.11]);

    gl.uniform3f(uColorBg, bgRgb[0], bgRgb[1], bgRgb[2]);
    gl.uniform3f(uColorAccent, accentRgb[0], accentRgb[1], accentRgb[2]);
    gl.uniform3f(uColorSecondary, secondaryRgb[0], secondaryRgb[1], secondaryRgb[2]);
    gl.uniform1f(uIntensity, intensity);

    // Resize handling
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width * dpr));
      height = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    resize();

    // Mouse Tracking
    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const x = (e.clientX - rect.left) * dpr;
      const y = (rect.height - (e.clientY - rect.top)) * dpr;
      mousePosRef.current.target = [x, y];
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId;
    const startTime = performance.now();

    const render = (time) => {
      const elapsed = (time - startTime) * 0.001 * speed;

      // Smooth mouse lerp
      const cur = mousePosRef.current.current;
      const tgt = mousePosRef.current.target;
      cur[0] += (tgt[0] - cur[0]) * 0.06;
      cur[1] += (tgt[1] - cur[1]) * 0.06;

      gl.useProgram(program);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, cur[0], cur[1]);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const resizeObserver = new ResizeObserver(() => resize());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, [bgColor, accentColor, secondaryColor, intensity, speed, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none block"
      />
      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  );
}

export default ShaderBackground;
