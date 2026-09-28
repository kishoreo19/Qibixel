import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useFetch } from '../hooks/useFetch';
import CaseStudyCard from '../components/CaseStudyCard';

export default function CaseStudiesPage() {
  useSEO({
    title: "Case Studies & Sample Growth Benchmarks",
    description: "Review sample QIBIXEL performance benchmarks across SaaS, E-commerce, Healthcare, and Enterprise migrations.",
    canonicalUrl: "https://qibixel.com/case-studies"
  });

  const { data: caseStudies } = useFetch('/case-studies');

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-badge dark">EVIDENCE & RESULTS</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: 'var(--bg-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Strategic Growth Benchmarks
            </h1>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '1.25rem', lineHeight: 1.75 }}>
              Explore how our evidence-based search execution resolves complex technical roadblocks and compounds organic revenue.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(220, 228, 218, 0.12)',
              border: '1px solid rgba(220, 228, 218, 0.2)',
              padding: '0.6rem 1.1rem',
              borderRadius: '2px',
              fontSize: '0.875rem',
              color: 'var(--secondary-sage)',
              marginTop: '2rem'
            }}>
              <AlertCircle size={16} style={{ color: 'var(--accent-copper)', shrink: 0 }} />
              <span>All metrics below are clearly labeled as sample/benchmark placeholder data for methodology demonstration.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}>
            {caseStudies && caseStudies.map((study) => (
              <CaseStudyCard key={study.id} caseStudy={study} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
