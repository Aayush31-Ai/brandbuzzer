'use client';

import React from 'react';
import BeamWordmarkFooter from './ui/beam-wordmark-footer';

/**
 * Brand Buzzers Footer Component
 * 
 * Configured so that the entire footer fits completely in one screen view
 * below the fixed navbar (100dvh minus 80px), requiring zero extra scrolling.
 * Retains all exact colors and design as specified.
 */
export default function Footer({ onBookCall }) {
  const customSocials = [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'X', href: 'https://twitter.com', icon: 'x' },
  ];

  const customColumns = [
    {
      title: 'EXPLORE',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'The Equation', href: '#equation' },
        { label: 'Services', href: '#services' },
        { label: 'Client Reviews', href: '#testimonials' },
        { label: 'FAQs', href: '#faq' },
      ],
    },
    {
      title: 'CAPABILITIES',
      links: [
        { label: 'Social Media Marketing', href: '#services' },
        { label: 'Viral 9:16 Short-Form', href: '#services' },
        { label: 'Content Creation & Films', href: '#services' },
        { label: 'Performance Marketing', href: '#services' },
        { label: 'Influencer Strategy', href: '#services' },
        { label: 'Website & App Dev', href: '#services' },
      ],
    },
  ];

  const customCredits = [
    {
      lead: 'High-Velocity Growth by ',
      label: 'Brand Buzzers Studio',
      href: '#works',
    },
    {
      lead: 'Culture · Media · Capital · ',
      label: 'Remote-First Engine',
      tail: ' · 2026',
    },
  ];

  return (
    <div
      id="footer"
      className="relative w-full h-[calc(100dvh-5rem)] min-h-[480px] max-h-[720px] flex flex-col justify-between overflow-hidden bg-[#050505] border-t border-neutral-900"
    >
      <BeamWordmarkFooter
        brand="Brand Buzzers"
        wordmark="BUZZERS"
        company="Brand Buzzers Inc."
        year={2026}
        socials={customSocials}
        credits={customCredits}
        columns={customColumns}
        cut={0.16}
        /* Black & Gray Color Palette */
        background="#050505"
        ink="#f4f4f5"
        muted="#71717a"
        accent="#a1a1aa"
        wordTop="#d4d4d8"
        wordFoot="#18181b"
        wordWeight={800}
        fontSans='"Plus Jakarta Sans", "Inter", -apple-system, sans-serif'
        animate={true}
        className="w-full h-full"
      />
    </div>
  );
}
