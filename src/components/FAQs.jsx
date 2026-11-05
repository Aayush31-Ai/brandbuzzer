import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQ_CATEGORIES = [
  'Viral Strategy',
  'Content & Video',
  'Pricing & Plans',
  'Workflow & Guarantee',
];

const FAQS_DATA = [
  // 1. Viral Strategy (Exactly 4)
  {
    category: 'Viral Strategy',
    question: 'How does Brand Buzzers approach viral brand growth?',
    answer:
      'We do not rely on random luck. We engineer structural buzz by dissecting cultural momentum, audience psychology, and short-form retention curves. Every campaign pairs bold creative hooks with algorithmic distribution systems to turn viewers into buyers.',
  },
  {
    category: 'Viral Strategy',
    question: 'Which industries and company stages do you work with?',
    answer:
      'We partner with venture-backed startups, fast-scaling D2C brands, luxury streetwear, fintech disruptors, and consumer tech giants who refuse to be boring and want to own the digital conversation.',
  },
  {
    category: 'Viral Strategy',
    question: 'How do you ensure campaigns match our exact brand identity?',
    answer:
      'During onboarding, we codify your brand voice, visual aesthetics, taboos, and core differentiators. Every script and creative angle passes rigorous internal editorial reviews before filming.',
  },
  {
    category: 'Viral Strategy',
    question: 'What is your core formula for 9:16 short-form retention?',
    answer:
      'We optimize the first 1.5-second visual hook, use dynamic pacing, pattern interrupts, and psychological open loops that maximize completion rates and trigger algorithmic recommendation feeds.',
  },

  // 2. Content & Video (Exactly 4)
  {
    category: 'Content & Video',
    question: 'What is included in our monthly content deliverables?',
    answer:
      'Depending on your tier: 20 to 60+ bespoke high-retention short-form videos (TikTok, Reels, Shorts), creative direction, scriptwriting, editing sprints, custom motion graphics, sound design, and analytics reporting.',
  },
  {
    category: 'Content & Video',
    question: 'Do you handle the entire production process end-to-end?',
    answer:
      'Yes. From ideation, scriptwriting, and hook testing to high-velocity post-production, VFX, caption styling, and cross-platform scheduling — our team manages the entire creative pipeline.',
  },
  {
    category: 'Content & Video',
    question: 'Can you work with our existing footage and creator assets?',
    answer:
      'Absolutely. We regularly transform raw brand archives, podcast clips, UGC submissions, and founders’ interviews into high-performing short-form narrative reels.',
  },
  {
    category: 'Content & Video',
    question: 'How many revisions do we get on video deliverables?',
    answer:
      'All deliverables include rapid-turnaround revision rounds via Frame.io or dedicated review channels so your feedback is incorporated within 24 hours.',
  },

  // 3. Pricing & Plans (Exactly 4)
  {
    category: 'Pricing & Plans',
    question: 'What are your engagement models and retainers?',
    answer:
      'We offer three core structures: High-Velocity Growth Retainers (monthly execution), Bespoke Campaign Drops (product launches), and Performance Scale Partnerships tailored to your revenue goals.',
  },
  {
    category: 'Pricing & Plans',
    question: 'What happens if a campaign does not hit agreed benchmarks?',
    answer:
      'We stand behind our craft with a quantitative guarantee. If our first 30-day sprint does not hit agreed KPI benchmarks, we continue optimizing and deploying creative variants at zero extra cost until we crush the goal.',
  },
  {
    category: 'Pricing & Plans',
    question: 'Are we locked into long-term contracts?',
    answer:
      'No. We earn your partnership month over month. After the initial 90-day growth sprint, our standard retainer operates with flexible 30-day rolling commitments.',
  },
  {
    category: 'Pricing & Plans',
    question: 'Do you offer ad-spend management or organic-only services?',
    answer:
      'We provide organic algorithmic distribution as well as high-performing paid TikTok & Meta ad creative variants designed specifically to lower customer acquisition costs (CAC).',
  },

  // 4. Workflow & Guarantee (Exactly 4)
  {
    category: 'Workflow & Guarantee',
    question: 'How fast do we see tangible results after kickoff?',
    answer:
      'Most partner brands see their first organic viral lift and reach surge within 14 to 21 days of deployment. Our rapid-iteration sprint delivers initial creative assets in Week 1.',
  },
  {
    category: 'Workflow & Guarantee',
    question: 'How much time is required from our internal team?',
    answer:
      'We operate like an embedded unit. After a 60-minute strategic kickoff and onboarding audit, we handle 95% of the heavy lifting. You only spend 15 minutes a week approving deliverables.',
  },
  {
    category: 'Workflow & Guarantee',
    question: 'How do we track analytics and campaign performance?',
    answer:
      'You get a dedicated live performance dashboard and a direct Slack channel with our strategists, along with weekly performance syncs covering hook rates, watch times, and conversion lift.',
  },
  {
    category: 'Workflow & Guarantee',
    question: 'How do we get started with Brand Buzzers?',
    answer:
      'Book a 20-minute discovery call where we review your current brand reach, identify viral growth opportunities, and propose a tailored roadmap for your team.',
  },
];

export default function FAQs({ className = '', onBookCall }) {
  const [activeCategory, setActiveCategory] = useState('Viral Strategy');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const currentFaqs = FAQS_DATA.filter(
    (faq) => faq.category === activeCategory
  ).slice(0, 4); // Exactly 4 questions

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className={`relative w-full py-12 sm:py-16 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden ${className}`.trim()}
    >
      {/* Subtle top spotlight glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.08) 0%, rgba(204, 255, 0, 0.02) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Compact container matching screenshot proportions */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-neutral-400 text-xs font-normal tracking-wide mb-2">
            Let's answer some questions
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 4 Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-7 sm:mb-8">
          {FAQ_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(0); // Open first item on category switch
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
                    ? 'bg-[#121215] border-white/20 shadow-md'
                    : 'bg-[#0d0d0f] border-white/[0.07] hover:border-white/[0.14] hover:bg-[#101013]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm md:text-[15px] font-medium text-neutral-200 hover:text-white transition-colors leading-snug">
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
