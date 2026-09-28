import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useFetch } from '../hooks/useFetch';
import NotFoundPage from './NotFoundPage';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { data: service, loading, error } = useFetch(`/services/${slug}`);

  useSEO({
    title: service ? `${service.title} Strategy & Implementation` : 'Service Detail',
    description: service ? service.summary : 'QIBIXEL Search Service Detail',
    canonicalUrl: `https://qibixel.com/services/${slug}`
  });

  if (loading) {
    return (
      <div className="section-padding" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading service specification...</p>
      </div>
    );
  }

  if (error || !service) {
    return <NotFoundPage message={`The requested service '${slug}' was not found.`} />;
  }

  return (
    <div>
      {/* Editorial Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <Link to="/services" style={{ color: 'var(--secondary-sage)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9375rem' }}>
            <ArrowLeft size={16} />
            <span>Back to All Capabilities</span>
          </Link>

          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-badge dark">SERVICE SPECIFICATION {service.id}</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: 'var(--bg-primary)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              {service.title}
            </h1>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '1.25rem', lineHeight: 1.75 }}>
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Breakdown */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
            {/* Left Column: Summary & Deliverables */}
            <div style={{ gridColumn: 'span 12' }} className="service-main-col">
              <div className="card-editorial" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--brand-primary)', marginBottom: '1.25rem' }}>
                  Strategic Overview
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-charcoal)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {service.summary}
                </p>

                <div style={{
                  backgroundColor: 'var(--secondary-sage)',
                  padding: '1.5rem',
                  borderRadius: '4px',
                  borderLeft: '4px solid var(--brand-primary)'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-primary)', display: 'block', marginBottom: '0.35rem' }}>
                    PRIMARY BUSINESS IMPACT
                  </span>
                  <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--brand-primary)', margin: 0 }}>
                    {service.outcomes}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="card-editorial">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--brand-primary)', marginBottom: '1.5rem' }}>
                  Key Deliverables & Action Items
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {service.deliverables && service.deliverables.map((del, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', paddingBottom: '1rem', borderBottom: idx < service.deliverables.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      <CheckCircle2 size={22} style={{ color: 'var(--accent-copper)', shrink: 0, marginTop: '2px' }} />
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--brand-primary)' }}>
                          {del}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Execution Methodology & CTA */}
            <div style={{ gridColumn: 'span 12' }} className="service-side-col">
              <div style={{
                backgroundColor: 'var(--card-warm-white)',
                border: '1px solid var(--border-subtle)',
                padding: '2.5rem',
                borderRadius: '4px',
                position: 'sticky',
                top: '100px'
              }}>
                <ShieldCheck size={36} style={{ color: 'var(--brand-primary)', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
                  Our Execution Standard
                </h3>
                <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {service.methodology}
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.75rem' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>Ready to implement {service.title}?</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Speak directly with a senior strategist to review your domain requirements.
                  </p>

                  <Link to="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Book Strategic Briefing</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .service-main-col { grid-column: span 8 !important; }
            .service-side-col { grid-column: span 4 !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
