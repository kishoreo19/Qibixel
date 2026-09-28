import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useFetch } from '../hooks/useFetch';
import { HERO_DATA } from '../data/clientData';
import HeroVisual from '../components/HeroVisual';
import BrandStatementSection from '../components/BrandStatementSection';
import VerticalServiceSystem from '../components/VerticalServiceSystem';
import PrinciplesSection from '../components/PrinciplesSection';
import ProcessTimeline from '../components/ProcessTimeline';
import CaseStudyCard from '../components/CaseStudyCard';
import IndustryList from '../components/IndustryList';
import FAQAccordion from '../components/FAQAccordion';

export default function HomePage() {
  useSEO({
    title: "Search Higher. Build Faster. Grow Smarter",
    description: "QIBIXEL helps ambitious businesses turn search visibility, web engineering, and performance marketing into compounding organic growth.",
    canonicalUrl: "https://qibixel.com/"
  });

  const { data: services } = useFetch('/services');
  const { data: caseStudies } = useFetch('/case-studies');
  const { data: industries } = useFetch('/industries');
  const { data: faqs } = useFetch('/faqs');

  return (
    <div>
      {/* Mobile-First Hero Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2.5rem, 6vw, 4rem)',
            alignItems: 'center'
          }}>
            {/* Mobile Composition Content */}
            <div>
              <span className="editorial-badge">{HERO_DATA.label}</span>
              
              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 9vw, 5rem)',
                fontWeight: 600,
                color: 'var(--brand-primary)',
                lineHeight: 1.08,
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em'
              }}>
                {HERO_DATA.headline}
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '560px'
              }}>
                {HERO_DATA.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%' }} className="hero-cta-group">
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Start a Conversation</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link to="/about" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Explore Our Approach</span>
                </Link>
              </div>
            </div>

            {/* Custom Abstract Search Data Matrix Visual */}
            <div style={{ width: '100%' }}>
              <HeroVisual />
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 640px) {
            .hero-cta-group {
              flex-direction: row !important;
              width: auto !important;
            }
            .hero-cta-group .btn {
              width: auto !important;
            }
          }
        `}</style>
      </section>

      {/* Brand Statement Section */}
      <BrandStatementSection />

      {/* Vertical Service System */}
      <VerticalServiceSystem services={services || []} />

      {/* Principles Section: Precision Over Noise */}
      <PrinciplesSection />

      {/* Case Studies Editorial Showcase */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <div>
              <span className="editorial-badge">PROOF & BENCHMARKS</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 6vw, 3.25rem)' }}>
                Sample Performance Studies
              </h2>
            </div>
            <Link to="/case-studies" className="btn btn-secondary" style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}>
              <span>View All Case Studies</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem'
          }}>
            {caseStudies && caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.id} caseStudy={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry List Section */}
      <IndustryList industries={industries || []} />

      {/* Operational Process Timeline */}
      <ProcessTimeline />

      {/* FAQ Accordion */}
      <FAQAccordion faqs={faqs || []} />
    </div>
  );
}
