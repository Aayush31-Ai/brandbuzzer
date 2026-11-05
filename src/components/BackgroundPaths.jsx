import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ButtonWithIcon } from "@/components/ui/button-witn-icon";

function FloatingPaths({ position }) {
  const paths = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 8 * position} -${189 + i * 9}C-${
        380 - i * 8 * position
      } -${189 + i * 9} -${312 - i * 8 * position} ${216 - i * 9} ${
        152 - i * 8 * position
      } ${343 - i * 9}C${616 - i * 8 * position} ${470 - i * 9} ${
        684 - i * 8 * position
      } ${875 - i * 9} ${684 - i * 8 * position} ${875 - i * 9}`,
      width: 0.6 + i * 0.03,
      opacity: 0.08 + i * 0.02,
      duration: 22 + (i % 6) * 3,
    }));
  }, [position]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full text-white pointer-events-none"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.4, pathOffset: 0 }}
            animate={{
              pathLength: [0.4, 0.7, 0.4],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  line1 = "Make Some Noise.",
  line2 = "Make Brands Move.",
  highlightWord = "Brands",
  buttonText = "Our Work",
  onButtonClick = () => {},
}) {
  const wordsLine1 = useMemo(() => line1.split(" "), [line1]);
  const wordsLine2 = useMemo(() => line2.split(" "), [line2]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Animated Flowing SVG Background Paths */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 text-center pt-16 sm:pt-20 pb-10 sm:pb-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Main Title Container */}
          <h1 className="mb-6 sm:mb-8 tracking-tight text-white flex flex-col items-center gap-2 sm:gap-3">
            
            {/* Upper Line: Larger, dominant text */}
            <span className="block text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.08]">
              {wordsLine1.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block mr-3 sm:mr-5 last:mr-0"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`l1-${wordIndex}-${letterIndex}`}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.06 + letterIndex * 0.015,
                        duration: 0.5,
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                      className="inline-block text-white"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>

            {/* Lower Line: A little smaller than upper text, with "Brands" highlighted */}
            <span className="block text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15]">
              {wordsLine2.map((word, wordIndex) => {
                const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
                const cleanHighlight = highlightWord.toLowerCase().replace(/[^a-z]/g, '');
                const isHighlighted = cleanWord === cleanHighlight;

                return (
                  <span
                    key={wordIndex}
                    className={`inline-block mr-2.5 sm:mr-4 last:mr-0 ${
                      isHighlighted ? 'text-[#CCFF00]' : 'text-neutral-200'
                    }`}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`l2-${wordIndex}-${letterIndex}`}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2 + wordIndex * 0.06 + letterIndex * 0.015,
                          duration: 0.5,
                          ease: [0.2, 0.8, 0.2, 1],
                        }}
                        className={`inline-block ${
                          isHighlighted
                            ? 'text-[#CCFF00] drop-shadow-[0_0_25px_rgba(204,255,0,0.5)]'
                            : 'text-neutral-200'
                        }`}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
            </span>

          </h1>

          {/* Interactive Button with Glide & 45° Rotate Icon Animation */}
          <div className="relative justify-center inline-block">
            <ButtonWithIcon
              text={buttonText}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundPaths;
