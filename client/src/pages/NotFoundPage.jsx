import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function NotFoundPage({ message }) {
  useSEO({
    title: "404 Page Not Found | QIBIXEL",
    description: "The requested search URL was not found on QIBIXEL.",
    canonicalUrl: "https://qibixel.com/404"
  });

  return (
    <section className="section-padding" style={{
      backgroundColor: 'var(--bg-primary)',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'var(--secondary-sage)',
          color: 'var(--brand-primary)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}>
          <Search size={32} />
        </div>

        <span className="editorial-badge">404 INDEXATION EXCEPTION</span>

        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
          URL Not Found
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          {message || "The page or resource you requested does not exist or has been relocated within our search index."}
        </p>

        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={18} />
          <span>Return to QIBIXEL Homepage</span>
        </Link>
      </div>
    </section>
  );
}
