import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import BackgroundPaths from './components/BackgroundPaths';
import AboutUs from './components/AboutUs';
import ConnectedScrollPaths from './components/ConnectedScrollPaths';
import TiltedCard from './components/TiltedCard';
import CountUp from './components/CountUp';
import BuzzerEquation from './components/BuzzerEquation';
import BrandMarquee from './components/BrandMarquee';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Component as BgGredient } from '@/components/ui/bg-gredient';
import brandLogo from './assets/brand-buzzers-logo.png';
import { ArrowUp } from 'lucide-react';

const WORK_PROJECTS = [
  {
    id: 'campaign-streetwear',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80&auto=format&fit=crop',
    alt: 'Streetwear Brand Campaign',
  },
  {
    id: 'campaign-fashion',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80&auto=format&fit=crop',
    alt: 'Fashion & Visual Direction',
  },
  {
    id: 'campaign-lifestyle',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80&auto=format&fit=crop',
    alt: 'Lifestyle & Brand Film',
  },
];

export default function App() {
  const heroAboutRef = useRef(null);

  const handleBookCall = () => {
    alert('Booking modal or calendar link opened!');
  };

  const handleOurWork = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Navbar Component */}
      <Navbar onBookCall={handleBookCall} />

      {/* Connected Hero & About Us with Seamless Flowing Scroll-Driven Curves */}
      <div ref={heroAboutRef} className="relative w-full overflow-hidden bg-[#050505]">
        {/* Continuous Flowing Curved Lines across Hero + About Us */}
        <ConnectedScrollPaths wrapperRef={heroAboutRef} />

        {/* Hero Section */}
        <section id="home">
          <BackgroundPaths
            line1="Make Some Noise."
            line2="Make Brands Move."
            highlightWord="Brands"
            buttonText="Our Work"
            onButtonClick={handleOurWork}
            hideInternalPaths={true}
          />
        </section>

        {/* About Us Component */}
        <AboutUs
          title="About us"
          subtitleLine1="We don't just build brands. We make them"
          subtitleLine2="impossible to ignore."
          buttonText="LEARN MORE"
          onLearnMore={handleBookCall}
          transparentBg={true}
        />

        {/* Works / Brands Section with Interactive Tilted Cards */}
        <section id="works" className="relative w-full pt-6 sm:pt-10 pb-8 sm:pb-12 overflow-hidden">
          {/* Luminous Gray Gradient Background (Full-Width Edge-to-Edge) */}
          <BgGredient className="absolute inset-0 pointer-events-none w-full h-full" />

          {/* Section Inner Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 xl:px-20">
            {/* Section Header matching exact reference design */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-6 sm:mb-10">
              {/* Left: Dash + WORK, and BRANDS THAT / TRUST OUR CRAFT. */}
              <div>
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
                  <span className="w-6 sm:w-9 h-[2px] bg-neutral-400 inline-block" />
                  <span>WORK</span>
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-3 sm:mt-4 leading-[1.08]">
                  BRANDS THAT <br />
                  <span className="italic font-black">TRUST OUR CRAFT.</span>
                </h2>
              </div>

              {/* Right: Description text */}
              <div className="max-w-md lg:pb-3">
                <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  A look at the brands we’ve partnered with,<br className="hidden sm:inline" /> the stories we’ve built, and the impact we’ve created.
                </p>
              </div>
            </div>

            {/* 3D Tilted Cards Grid - Pure Visual Showcase without text overlays */}
            <div className="max-w-6xl mx-auto px-1 sm:px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                {WORK_PROJECTS.map((project) => (
                  <div key={project.id} className="flex justify-center w-full max-w-[340px] sm:max-w-[360px]">
                    <TiltedCard
                      imageSrc={project.image}
                      altText={project.alt}
                      captionText=""
                      showTooltip={false}
                      containerWidth="100%"
                      containerHeight="380px"
                      imageWidth="100%"
                      imageHeight="380px"
                      radius={18}
                      rotateAmplitude={12}
                      scaleOnHover={1.04}
                      glare={0.45}
                      glareColor="#ffffff"
                      shadow={0.5}
                      parallax={1.1}
                      flipOnClick={false}
                      className="shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Plain Stats Showcase with Live Counter Animation */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 relative">
              {/* Subtle top divider line */}
              <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4 sm:mb-6" />

              {/* 4 Plain Stats Grid without box borders or hover box animations */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto px-2 sm:px-4 text-center">

                {/* 1. Brands Partnered (White) */}
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    <CountUp
                      from={0}
                      to={50}
                      suffix="+"
                      mode="count"
                      duration={2.4}
                      replayOnHover={true}
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-neutral-400 font-semibold mt-2">
                    Brands Partnered
                  </p>
                </div>

                {/* 2. Campaigns Delivered (Neon Lime) */}
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#CCFF00] tracking-tight">
                    <CountUp
                      from={0}
                      to={250}
                      suffix="+"
                      mode="count"
                      duration={2.6}
                      replayOnHover={true}
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-neutral-400 font-semibold mt-2">
                    Campaigns Delivered
                  </p>
                </div>

                {/* 3. Views Generated (White) */}
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    <CountUp
                      from={0}
                      to={5}
                      suffix="M+"
                      mode="count"
                      duration={2.4}
                      replayOnHover={true}
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-neutral-400 font-semibold mt-2">
                    Views Generated
                  </p>
                </div>

                {/* 4. Boring Brands (Neon Lime) */}
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#CCFF00] tracking-tight">
                    0
                  </div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-neutral-400 font-semibold mt-2">
                    Boring Brands
                  </p>
                </div>

              </div>

              {/* Infinite Marquee for Brand Logos */}
              <BrandMarquee />
            </div>
          </div>
        </section>

        {/* The Buzzers Equation Section (How We Win) */}
        <BuzzerEquation />
      </div>

      {/* Interactive Services Section with OrbitImages */}
      <Services onSelectService={handleBookCall} />

      {/* 3D Testimonials / Reviews Section */}
      <Testimonials />

      {/* Interactive Tactile FAQ Drawer Section */}
      <FAQs onBookCall={handleBookCall} />

      {/* High-Impact CTA with Vertical Marquee */}
      <CTA onBookCall={handleBookCall} />

      {/* Beam Wordmark Interactive Footer (Black & Gray) */}
      <Footer onBookCall={handleBookCall} />
    </div>
  );
}
