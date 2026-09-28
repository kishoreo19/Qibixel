import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, ArrowUpRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useFetch } from '../hooks/useFetch';
import NotFoundPage from './NotFoundPage';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const { data: insight, loading, error } = useFetch(`/insights/${slug}`);

  useSEO({
    title: insight ? insight.title : 'Insight Analysis',
    description: insight ? insight.summary : 'QIBIXEL Search Research Article',
    canonicalUrl: `https://qibixel.com/insights/${slug}`,
    ogType: 'article'
  });

  if (loading) {
    return (
      <div className="section-padding" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading strategy paper...</p>
      </div>
    );
  }

  if (error || !insight) {
    return <NotFoundPage message={`Insight article '${slug}' was not found.`} />;
  }

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <Link to="/insights" style={{ color: 'var(--secondary-sage)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9375rem' }}>
            <ArrowLeft size={16} />
            <span>Back to Research & Insights</span>
          </Link>

          <div style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <span className="editorial-badge dark" style={{ margin: 0 }}>{insight.category}</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--secondary-sage)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={16} />
                {insight.readTime}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', color: 'var(--bg-primary)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              {insight.title}
            </h1>

            <div style={{ fontSize: '0.9375rem', color: 'var(--secondary-sage)' }}>
              Published {insight.publishedDate} • Written by {insight.author}
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
            <article style={{ gridColumn: 'span 12' }} className="article-main-col">
              <div className="card-editorial" style={{ padding: '3.5rem' }}>
                <div
                  dangerouslySetInnerHTML={{ __html: insight.content }}
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.85,
                    color: 'var(--text-charcoal)'
                  }}
                />
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ gridColumn: 'span 12' }} className="article-side-col">
              <div style={{
                backgroundColor: 'var(--card-warm-white)',
                border: '1px solid var(--border-subtle)',
                padding: '2rem',
                borderRadius: '4px',
                position: 'sticky',
                top: '100px'
              }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
                  About QIBIXEL Research
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Our research papers are authored by active search engineers and organic strategists managing enterprise client domains.
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                  <Link to="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Discuss Strategy</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .article-main-col { grid-column: span 8 !important; }
            .article-side-col { grid-column: span 4 !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
