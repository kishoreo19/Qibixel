import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Cpu, BarChart3, Globe } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import PrinciplesSection from '../components/PrinciplesSection';

export default function AboutPage() {
  useSEO({
    title: "About QIBIXEL | Engineering Organic Growth",
    description: "QIBIXEL is a specialized SEO agency engineered for ambitious brands seeking evidence-based search visibility.",
    canonicalUrl: "https://qibixel.com/about"
  });

  return (
    <div>
      {/* Editorial Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-badge dark">ABOUT QIBIXEL</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: 'var(--bg-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              We Engineer Search Authority, Not Vanity Traffic.
            </h1>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '1.25rem', lineHeight: 1.75 }}>
              QIBIXEL was founded on a singular conviction: search engines are mathematical entity engines. Winning search requires engineering precision, information gain, and business intent alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}>
            <div className="card-editorial">
              <Cpu size={36} style={{ color: 'var(--accent-copper)', marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--brand-primary)' }}>Engineering Rigor</h3>
              <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)' }}>
                We treat technical SEO as software engineering, continuously monitoring crawl logs, render queues, and server response times.
              </p>
            </div>

            <div className="card-editorial">
              <ShieldCheck size={36} style={{ color: 'var(--accent-copper)', marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--brand-primary)' }}>Defensible Authority</h3>
              <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)' }}>
                Zero black-hat shortcuts. We craft expert-backed topical content and earn tier-1 editorial links that withstand algorithm updates.
              </p>
            </div>

            <div className="card-editorial">
              <BarChart3 size={36} style={{ color: 'var(--accent-copper)', marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--brand-primary)' }}>Revenue Attribution</h3>
              <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)' }}>
                We connect Search Console impression metrics directly to backend lead generation and organic e-commerce revenue growth.
              </p>
            </div>

            <div className="card-editorial">
              <Globe size={36} style={{ color: 'var(--accent-copper)', marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--brand-primary)' }}>Global Reach</h3>
              <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)' }}>
                From enterprise multi-region hreflang architecture to local multi-branch map pack optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <PrinciplesSection />

      {/* CTA section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
            Work With Senior Strategists
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            At QIBIXEL, your account is managed directly by seasoned search engineers and senior editorial strategists.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <span>Schedule Strategic Briefing</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
