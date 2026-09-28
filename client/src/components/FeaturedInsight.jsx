import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function FeaturedInsight({ insight }) {
  if (!insight) return null;

  return (
    <div style={{
      backgroundColor: 'var(--brand-primary)',
      color: 'var(--bg-primary)',
      borderRadius: '4px',
      padding: 'clamp(1.5rem, 5vw, 3.5rem)',
      marginBottom: '3rem',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      <div style={{ maxWidth: '820px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <span className="editorial-badge dark" style={{ margin: 0 }}>FEATURED STRATEGY PAPER</span>
          <span style={{ fontSize: '0.8125rem', color: 'var(--secondary-sage)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={15} />
            {insight.readTime}
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.75rem, 5vw, 3rem)',
          color: 'var(--bg-primary)',
          lineHeight: 1.15,
          marginBottom: '1rem'
        }}>
          {insight.title}
        </h2>

        <p style={{
          color: 'var(--secondary-sage)',
          fontSize: 'clamp(0.9625rem, 2.5vw, 1.1rem)',
          lineHeight: 1.7,
          marginBottom: '1.75rem',
          maxWidth: '740px'
        }}>
          {insight.summary}
        </p>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', flexDirection: 'column', width: '100%' }} className="featured-insight-cta">
          <Link to={`/insights/${insight.slug}`} className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
            <span>Read Complete Paper</span>
            <ArrowUpRight size={18} />
          </Link>
          <span style={{ fontSize: '0.8125rem', color: 'var(--secondary-sage)' }}>
            Published {insight.publishedDate} by {insight.author}
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .featured-insight-cta {
            flex-direction: row !important;
            align-items: center !important;
          }
          .featured-insight-cta .btn {
            width: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
