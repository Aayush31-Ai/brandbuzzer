'use client';

import React, { useRef, useMemo, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Gyroscopic Ring that rotates smoothly in 3D space
 */
function GyroRing({ radius = 2.4, thickness = 0.012, speed = 0.4, color = '#ffffff', tilt = [0, 0, 0] }) {
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * speed * 0.7;
      ringRef.current.rotation.y += delta * speed * 0.9;
    }
  });

  return (
    <group rotation={tilt}>
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, thickness, 16, 120]} />
        <meshStandardMaterial
          color={color}
          metalness={0.95}
          roughness={0.1}
          emissive={color === '#CCFF00' ? '#CCFF00' : '#000000'}
          emissiveIntensity={color === '#CCFF00' ? 0.4 : 0}
        />
      </mesh>
    </group>
  );
}

/**
 * Molten Liquid Obsidian Chrome Core
 */
function LiquidCore({ isHovered }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle self-rotation
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.12;

      // Mouse tracking influence
      const { mouse } = state;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.4, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.4, 0.05);
    }
  });

  return (
    <mesh ref={meshRef} scale={1.55}>
      <sphereGeometry args={[1, 128, 128]} />
      <MeshDistortMaterial
        color="#0d0d0f"
        metalness={0.98}
        roughness={0.06}
        clearcoat={1.0}
        clearcoatRoughness={0.08}
        reflectivity={1.0}
        distort={isHovered ? 0.52 : 0.42}
        speed={isHovered ? 2.8 : 2.0}
      />
    </mesh>
  );
}

/**
 * 3D Scene Composition
 */
function Scene({ isHovered }) {
  return (
    <>
      {/* Studio Lighting Rig */}
      <ambientLight intensity={0.4} />
      {/* White Key Highlight */}
      <directionalLight position={[10, 10, 8]} intensity={3.5} color="#ffffff" />
      {/* Brand Signature Neon Lime Specular Rim Light */}
      <directionalLight position={[-10, -8, -6]} intensity={3.2} color="#CCFF00" />
      {/* Cool Slate Fill Light */}
      <directionalLight position={[0, -10, 5]} intensity={1.8} color="#90a4ae" />
      {/* Cyan Specular Bounce */}
      <pointLight position={[5, -5, 2]} intensity={2.0} color="#00e5ff" />

      {/* Weightless Floating Physics */}
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.7} floatingRange={[-0.1, 0.1]}>
        {/* Central Molten Liquid Obsidian Core */}
        <LiquidCore isHovered={isHovered} />

        {/* Gyroscopic Orbital Rings */}
        <GyroRing radius={2.25} thickness={0.012} speed={0.45} color="#e5e5e5" tilt={[Math.PI / 4, 0, 0]} />
        <GyroRing radius={2.55} thickness={0.008} speed={-0.35} color="#CCFF00" tilt={[-Math.PI / 3, Math.PI / 6, 0]} />
        <GyroRing radius={2.75} thickness={0.006} speed={0.25} color="#ffffff" tilt={[0, Math.PI / 3, Math.PI / 5]} />
      </Float>

      {/* Environment for Crisp Chrome Reflections */}
      <Environment preset="city" />

      {/* Drag & Rotate Controls with Smooth Inertial Damping */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.8}
        dampingFactor={0.06}
        maxPolarAngle={Math.PI / 1.4}
        minPolarAngle={Math.PI / 3.2}
      />
    </>
  );
}

/**
 * InteractiveBlob Showcase Component
 * 
 * Ultra-luxury 3D interactive liquid obsidian chrome core with
 * gyroscopic orbital rings and studio specular rim lighting.
 * Pure, borderless, and seamless floating presentation.
 */
export default function InteractiveBlob({ className = '' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden select-none flex items-center justify-center ${className}`.trim()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Ambient Neon Lime & White Specular Glow Core */}
      <div
        className="absolute w-72 h-72 rounded-full pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(204,255,0,0.08) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <Scene isHovered={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  );
}
