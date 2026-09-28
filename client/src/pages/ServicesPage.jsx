import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { useFetch } from '../hooks/useFetch';
import VerticalServiceSystem from '../components/VerticalServiceSystem';
import ProcessTimeline from '../components/ProcessTimeline';

export default function ServicesPage() {
  useSEO({
    title: "SEO Services & Organic Growth Capabilities",
    description: "Explore QIBIXEL's comprehensive search services including Technical SEO, Search Content, E-commerce SEO, Enterprise SEO, Analytics, and Digital PR.",
    canonicalUrl: "https://qibixel.com/services"
  });

  const { data: services, loading } = useFetch('/services');

  return (
    <div>
      {/* Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="editorial-badge dark">OUR CAPABILITIES</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: 'var(--bg-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Precision Search Architecture
            </h1>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '1.25rem', lineHeight: 1.75 }}>
              Every service we deploy is custom-engineered to overcome technical bottlenecks, build topical authority, and capture commercial search volume.
            </p>
          </div>
        </div>
      </section>

      {/* Main Vertical Services List */}
      <VerticalServiceSystem services={services || []} />

      {/* Process Timeline */}
      <ProcessTimeline />
    </div>
  );
}
