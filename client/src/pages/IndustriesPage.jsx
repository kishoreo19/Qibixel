import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { useFetch } from '../hooks/useFetch';
import IndustryList from '../components/IndustryList';

export default function IndustriesPage() {
  useSEO({
    title: "Industry Verticals & Tailored Search Strategy",
    description: "Discover how QIBIXEL tailors technical SEO and intent content for SaaS, Tech, E-commerce, Healthcare, Finance, Legal, and Startups.",
    canonicalUrl: "https://qibixel.com/industries"
  });

  const { data: industries } = useFetch('/industries');

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="editorial-badge dark">VERTICAL SPECIALIZATION</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: 'var(--bg-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Built for Specialized Industries
            </h1>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '1.25rem', lineHeight: 1.75 }}>
              Generic SEO templates fail because search intent varies drastically between B2B software buyers, medical patients, and e-commerce shoppers.
            </p>
          </div>
        </div>
      </section>

      <IndustryList industries={industries || []} />
    </div>
  );
}
