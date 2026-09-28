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
    title: "Search Higher. Grow Smarter",
    description: "QIBIXEL helps ambitious businesses turn search visibility into sustainable organic growth through strategy, technical SEO, content, and data.",
    canonicalUrl: "https://qibixel.com/"
  });

  const { data: services } = useFetch('/services');
  const { data: caseStudies } = useFetch('/case-studies');
  const { data: industries } = useFetch('/industries');
  const { data: faqs } = useFetch('/faqs');

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '4rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="editorial-badge">{HERO_DATA.label}</span>
              
              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 600,
                color: 'var(--brand-primary)',
                lineHeight: 1.08,
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em'
              }}>
                {HERO_DATA.headline}
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}>
                {HERO_DATA.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Start a Conversation</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  <span>Explore Our Approach</span>
                </Link>
              </div>
            </div>

            {/* Custom Abstract Search Data Matrix Visual */}
            <div>
              <HeroVisual />
            </div>
          </div>
        </div>
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
            gap: '2rem',
            marginBottom: '3.5rem'
          }}>
            <div>
              <span className="editorial-badge">PROOF & BENCHMARKS</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
