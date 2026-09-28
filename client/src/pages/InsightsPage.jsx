import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { useFetch } from '../hooks/useFetch';
import FeaturedInsight from '../components/FeaturedInsight';
import CategoryFilter from '../components/CategoryFilter';
import InsightCard from '../components/InsightCard';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useSEO({
    title: "Search Insights & Technical Strategy Papers",
    description: "Deep-dive analysis on technical SEO, semantic entity graphs, JavaScript rendering budgets, and organic growth architecture.",
    canonicalUrl: "https://qibixel.com/insights"
  });

  const { data: insights } = useFetch('/insights', selectedCategory !== 'All' ? { category: selectedCategory } : null);

  const featured = insights ? insights.find(i => i.featured) || insights[0] : null;
  const listInsights = insights ? insights.filter(i => i.id !== (featured ? featured.id : '')) : [];

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-badge dark">QIBIXEL SEARCH RESEARCH</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: 'var(--bg-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Editorial Search Intelligence
            </h1>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '1.25rem', lineHeight: 1.75 }}>
              Original strategy papers, technical benchmarks, and data-driven analysis for search engineers and organic leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Featured Strategy Paper */}
          {selectedCategory === 'All' && featured && (
            <FeaturedInsight insight={featured} />
          )}

          {/* Category Filter Pills */}
          <CategoryFilter activeCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

          {/* Insights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {listInsights.map((article) => (
              <InsightCard key={article.id} insight={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
