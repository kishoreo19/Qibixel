import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function InsightCard({ insight }) {
  if (!insight) return null;

  return (
    <article className="card-editorial" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-copper)' }}>
            {insight.category}
          </span>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={14} />
            {insight.readTime}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          lineHeight: 1.25,
          color: 'var(--brand-primary)',
          marginBottom: '1rem'
        }}>
          <Link to={`/insights/${insight.slug}`} style={{ color: 'inherit' }}>
            {insight.title}
          </Link>
        </h3>

        <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
          {insight.summary}
        </p>
      </div>

      <div style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          {insight.publishedDate}
        </span>

        <Link to={`/insights/${insight.slug}`} style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--brand-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}>
          <span>Read Analysis</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
