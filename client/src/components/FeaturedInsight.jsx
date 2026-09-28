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
      padding: '3.5rem',
      marginBottom: '4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '820px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <span className="editorial-badge dark" style={{ margin: 0 }}>FEATURED STRATEGY PAPER</span>
          <span style={{ fontSize: '0.875rem', color: 'var(--secondary-sage)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={16} />
            {insight.readTime}
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          color: 'var(--bg-primary)',
          lineHeight: 1.15,
          marginBottom: '1.25rem'
        }}>
          {insight.title}
        </h2>

        <p style={{
          color: 'var(--secondary-sage)',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          marginBottom: '2rem',
          maxWidth: '740px'
        }}>
          {insight.summary}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <Link to={`/insights/${insight.slug}`} className="btn btn-accent">
            <span>Read Complete Paper</span>
            <ArrowUpRight size={18} />
          </Link>
          <span style={{ fontSize: '0.875rem', color: 'var(--secondary-sage)' }}>
            Published {insight.publishedDate} by {insight.author}
          </span>
        </div>
      </div>
    </div>
  );
}
