import React, { useId } from 'react';
import './faq-drawer.css';

export const BRAND_BUZZERS_FAQS = [
  {
    id: 'strategy',
    tab: 'Strategy',
    q: 'How does Brand Buzzers approach viral brand growth?',
    a: 'We do not rely on random luck. We engineer structural buzz by dissecting cultural momentum, audience psychology, and short-form retention curves. Every campaign pairs bold creative hooks with algorithmic distribution systems to turn casual viewers into obsessive buyers.',
  },
  {
    id: 'timeline',
    tab: 'Timeline',
    q: 'How fast do we see tangible results after kickoff?',
    a: 'Most partner brands see their first organic viral lift and traction within 14 to 21 days of deployment. Our rapid-iteration sprint delivers initial high-production creative assets in Week 1, and our growth loops continuously optimize based on live retention analytics.',
  },
  {
    id: 'pricing',
    tab: 'Pricing',
    q: 'What are your engagement models and retainers?',
    a: 'We offer three core structures: High-Velocity Growth Retainers (monthly full-service execution), Bespoke Campaign Drops (high-impact product launches), and Performance Scale Partnerships. Book a discovery call to get a tailored proposal mapped to your revenue goals.',
  },
  {
    id: 'deliverables',
    tab: 'Deliverables',
    q: 'What exactly is included in our monthly deliverables?',
    a: 'Depending on your tier: 20 to 60+ bespoke high-retention short-form videos, full creative direction and scripting, dedicated editing sprints, custom sound design, thumb-stopping graphic assets, and weekly algorithmic performance reports.',
  },
  {
    id: 'industries',
    tab: 'Industries',
    q: 'Which industries and company stages do you work with?',
    a: 'We partner with venture-backed startups, fast-scaling D2C brands, luxury streetwear, fintech disruptors, and consumer tech giants who refuse to be boring. If your product has ambitious growth targets and wants to own the conversation, we are built for you.',
  },
  {
    id: 'workflow',
    tab: 'Workflow',
    q: 'How much time is required from our internal team?',
    a: 'We operate like an internal Navy SEAL unit embedded in your company. After a 60-minute strategic kickoff and onboarding audit, we handle 95% of the heavy lifting — scripting, ideation, editing, and distribution. You only spend 15 minutes a week approving deliverables.',
  },
  {
    id: 'guarantee',
    tab: 'Guarantee',
    q: 'What happens if a campaign does not hit our reach targets?',
    a: 'We stand behind our craft with a quantitative performance guarantee. If our first 30-day sprint does not surpass your agreed benchmark KPIs, we continue optimizing, revising, and deploying creative variants at zero extra cost until we crush the goal.',
  },
];

const TAB_STATIONS = [0.04, 0.37, 0.7];
const tabStation = (i) => TAB_STATIONS[i % TAB_STATIONS.length];
const depthOf = (i, n) => (n <= 1 ? 0 : (n - 1 - i) / (n - 1));
const cardNumber = (i) => `Q.${String(i + 1).padStart(2, '0')}`;

export function FaqDrawer({
  label = 'FREQUENTLY ASKED',
  title = 'EVERYTHING YOU NEED TO KNOW.',
  lead = 'The questions ambitious founders and marketing leaders ask before partnering with us. Pull a card from the drawer to inspect our answers.',
  drawer = 'BRAND BUZZERS · Q–Z',
  cards = BRAND_BUZZERS_FAQS,
  finish = 'graphite',
  openIndex = 0,
  single = true,
  askNote = 'Have a question not in the drawer? Our strategists respond within a few hours.',
  askLabel = 'BOOK A CALL',
  askHref = '#contact',
  onAsk,
  className = '',
  style = {},
}) {
  const uid = useId().replace(/:/g, '');
  const totalCards = cards.length;

  return (
    <section
      id="faq"
      className={`fq relative w-full ${className}`.trim()}
      data-finish={finish}
      data-block="faq-drawer"
      aria-labelledby={`${uid}-title`}
      style={{
        background: 'transparent',
        ...style,
      }}
    >
      <div className="fq-wrap">
        {/* Left: Sticky Header */}
        <header className="fq-head">
          {label && (
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-3.5">
              <span className="w-6 sm:w-7 h-[2px] bg-[#CCFF00] inline-block" />
              <span>{label}</span>
            </div>
          )}
          <h2 className="fq-title" id={`${uid}-title`}>
            {title}
          </h2>
          {lead && <p className="fq-lead">{lead}</p>}
        </header>

        {/* Right: The Tactile Metal Cabinet Drawer */}
        <div className="fq-cabinet">
          <div className="fq-drawer">
            {/* Tray holding paper index cards */}
            <div className="fq-tray">
              {cards.map((c, i) => (
                <details
                  key={c.id || i}
                  className="fq-card"
                  name={single ? `fq-group-${uid}` : undefined}
                  defaultOpen={openIndex === i}
                  style={{
                    '--k': i,
                    '--depth': depthOf(i, totalCards).toFixed(3),
                    '--tab-at': tabStation(i),
                  }}
                >
                  <summary className="fq-edge">
                    <span className="fq-tab" aria-hidden="true">
                      {c.tab}
                    </span>
                    <span className="fq-no" aria-hidden="true">
                      {cardNumber(i)}
                    </span>
                    <span className="fq-q">{c.q}</span>
                    <span className="fq-mark" aria-hidden="true" />
                  </summary>

                  <div className="fq-face">
                    <p className="fq-a">{c.a}</p>
                    <p className="fq-filed" aria-hidden="true">
                      Filed under {c.tab} · {cardNumber(i)}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* Front Plate of Drawer: Metal Label Holder & Cup Pull */}
            <div className="fq-front" aria-hidden="true">
              <span className="fq-holder">
                <span className="fq-holder-card">{drawer}</span>
              </span>
              <span className="fq-pull" />
            </div>
          </div>

          {/* Ask Footer Row */}
          {(askNote || askLabel) && (
            <div className="fq-ask">
              {askNote && <p className="fq-note">{askNote}</p>}
              {askLabel && (onAsk ? (
                <button
                  type="button"
                  onClick={onAsk}
                  className="fq-key cursor-pointer"
                  style={{
                    border: '1px solid rgba(204, 255, 0, 0.4)',
                    boxShadow: '0 0 15px rgba(204, 255, 0, 0.2)',
                  }}
                >
                  {askLabel}
                </button>
              ) : (
                <a
                  href={askHref}
                  className="fq-key cursor-pointer"
                  style={{
                    border: '1px solid rgba(204, 255, 0, 0.4)',
                    boxShadow: '0 0 15px rgba(204, 255, 0, 0.2)',
                  }}
                >
                  {askLabel}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FaqDrawer;

