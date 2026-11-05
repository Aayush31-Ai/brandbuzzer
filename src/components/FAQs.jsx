import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQ_CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Copywriting',
];

const FAQS_DATA = [
  // 1. Web Development (Exactly 4 from reference image)
  {
    category: 'Web Development',
    question: 'What is web development?',
    answer:
      'Web development involves building, creating, and maintaining websites and web applications. It encompasses everything from frontend user interface design, styling, and interactivity to backend logic, database management, server configuration, and high-performance hosting infrastructure.',
  },
  {
    category: 'Web Development',
    question: 'What programming languages are essential for web development?',
    answer:
      'The foundational languages of the modern web are HTML5, CSS3, and JavaScript/TypeScript. For backend architectures, popular languages and runtimes include Node.js, Python, Go, and PHP, paired with modern frameworks such as React, Next.js, and Vue.',
  },
  {
    category: 'Web Development',
    question: "What's the difference between front-end and back-end development?",
    answer:
      'Front-end development focuses on the user-facing side of a website — the visual layout, interactive elements, typography, and responsive design. Back-end development powers the server-side logic, handling user authentication, databases, business operations, and API integrations behind the scenes.',
  },
  {
    category: 'Web Development',
    question: 'How long does it typically take to develop a website?',
    answer:
      'A high-performance landing page or marketing website typically takes 2 to 4 weeks from concept to deployment. Complex custom web applications with database architectures, authentication, and custom CMS integrations usually take between 6 to 12 weeks depending on scope and feature complexity.',
  },

  // 2. Mobile Development (Exactly 4)
  {
    category: 'Mobile Development',
    question: 'What platforms do you build mobile applications for?',
    answer:
      'We engineer mobile applications for both iOS and Android. Depending on client requirements and performance targets, we build high-performance cross-platform apps using React Native and Flutter, or native apps using Swift and Kotlin.',
  },
  {
    category: 'Mobile Development',
    question: 'What is the process of getting an app published on App Store & Google Play?',
    answer:
      'We handle the entire deployment pipeline — from configuring developer accounts, generating security certificates, and fulfilling compliance checklists to optimizing App Store Optimization (ASO) assets and passing Apple and Google app store review guidelines.',
  },
  {
    category: 'Mobile Development',
    question: 'What is the difference between native and cross-platform mobile apps?',
    answer:
      'Native apps are built specifically for one operating system (iOS or Android), offering the highest device-level performance and hardware access. Cross-platform apps share a single unified codebase for both platforms, significantly lowering development time and maintenance costs without sacrificing visual fluidity.',
  },
  {
    category: 'Mobile Development',
    question: 'How long does it typically take to develop a custom mobile app?',
    answer:
      'A streamlined MVP (Minimum Viable Product) mobile application typically takes 6 to 8 weeks. Comprehensive feature-rich enterprise apps with custom APIs, offline sync, real-time messaging, and payment gateways usually take 12 to 16 weeks.',
  },

  // 3. UI/UX Design (Exactly 4)
  {
    category: 'UI/UX Design',
    question: 'What is the difference between UI and UX design?',
    answer:
      'UX (User Experience) design focuses on the user journey, information architecture, wireframing, and problem-solving to make the interface intuitive and frictionless. UI (User Interface) design crafts the visual look and feel, including typography, color palettes, micro-interactions, components, and brand aesthetics.',
  },
  {
    category: 'UI/UX Design',
    question: 'What design tools and prototyping software do you use?',
    answer:
      'Our primary design system workflow is built on Figma for collaborative design, component libraries, and interactive prototyping. We also utilize Spline for 3D web assets, Adobe After Effects for motion choreography, and Principle for high-fidelity micro-interactions.',
  },
  {
    category: 'UI/UX Design',
    question: 'How do you approach responsive design for mobile and web?',
    answer:
      'We design mobile-first with adaptive fluid typography and responsive grid systems. Every screen is rigorously tested across mobile viewports (320px–430px), tablets (768px–1024px), laptops, and ultra-wide desktop monitors to ensure visual balance.',
  },
  {
    category: 'UI/UX Design',
    question: 'What is included in your design system deliverables?',
    answer:
      'Deliverables include atomic design tokens (colors, typography, spacing, shadows), responsive layout grids, dark/light theme definitions, interactive component variants with hover/active states, and comprehensive handoff documentation for developers.',
  },

  // 4. Copywriting (Exactly 4)
  {
    category: 'Copywriting',
    question: 'What types of copywriting services do you provide?',
    answer:
      'We deliver full-spectrum digital copywriting: high-converting landing page copy, brand messaging frameworks, short-form video hooks & scripts, social media captions, email sequences, and paid ad creative variants.',
  },
  {
    category: 'Copywriting',
    question: 'How do you tailor copy to match our specific brand voice?',
    answer:
      'During kickoff, we codify your brand voice guide — defining tone spectrums (e.g., bold, witty, authoritative, minimalist), audience pain points, banned jargon, and psychological triggers to make every sentence authentically resonate.',
  },
  {
    category: 'Copywriting',
    question: 'What is the difference between brand copywriting and direct response copy?',
    answer:
      'Brand copywriting builds emotional connection, identity, and long-term brand recall. Direct response copywriting is laser-focused on immediate measurable action — convincing readers to click, subscribe, book a call, or purchase right away.',
  },
  {
    category: 'Copywriting',
    question: 'How does compelling copywriting improve website conversion rates?',
    answer:
      'Compelling, benefit-driven headlines and clear value propositions eliminate cognitive friction. Clear calls-to-action and empathetic pain-point positioning regularly double or triple visitor conversion rates without changing incoming traffic.',
  },
];

export default function FAQs({ className = '', onBookCall }) {
  const [activeCategory, setActiveCategory] = useState('Web Development');
  const [openIndex, setOpenIndex] = useState(null); // Collapsed by default matching reference image

  const currentFaqs = FAQS_DATA.filter(
    (faq) => faq.category === activeCategory
  ).slice(0, 4); // Exactly 4 questions per user request

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className={`relative w-full py-8 sm:py-12 px-4 sm:px-6 bg-[#000000] text-white overflow-hidden ${className}`.trim()}
    >
      {/* Subtle top spotlight glow matching reference screenshot */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[240px] pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 45%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />

      {/* Compact container matching screenshot proportions */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-neutral-400 text-xs sm:text-sm font-normal tracking-wide mb-1.5">
            Let's answer some questions
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 4 Category Filter Pills matching reference screenshot */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
          {FAQ_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null); // Reset open state on tab switch
                }}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-md font-semibold'
                    : 'bg-[#121214] text-neutral-400 border border-white/[0.08] hover:text-white hover:border-white/20 hover:bg-[#18181b]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 4 Compact Dropdown Cards */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {currentFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={`${faq.question}-${index}`}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#131317] border-white/20 shadow-md'
                    : 'bg-[#0e0e11] border-white/[0.07] hover:border-white/[0.14] hover:bg-[#111115]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm md:text-[14.5px] font-medium text-neutral-200 hover:text-white transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-all duration-250 ${
                      isOpen
                        ? 'bg-white/10 text-white rotate-45'
                        : 'text-neutral-400'
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5 transition-transform duration-250" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-[13px] text-neutral-400 font-normal leading-relaxed border-t border-white/[0.05]">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer contact prompt */}
        {onBookCall && (
          <div className="mt-8 text-center text-xs text-neutral-500">
            Have more questions?{' '}
            <button
              onClick={onBookCall}
              className="text-white hover:text-[#CCFF00] underline underline-offset-4 font-medium transition-colors cursor-pointer"
            >
              Talk with our team &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export { FAQs as FAQ };
