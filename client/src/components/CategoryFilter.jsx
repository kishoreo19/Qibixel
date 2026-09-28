import React from 'react';

const CATEGORIES = [
  'All',
  'SEO Strategy',
  'Technical SEO',
  'Content',
  'Search',
  'Analytics',
  'Local SEO',
  'E-commerce'
];

export default function CategoryFilter({ activeCategory, onSelectCategory }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginBottom: '3rem'
    }}>
      {CATEGORIES.map((cat) => {
        const isSelected = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              fontWeight: isSelected ? 600 : 500,
              color: isSelected ? 'var(--bg-primary)' : 'var(--brand-primary)',
              backgroundColor: isSelected ? 'var(--brand-primary)' : 'var(--card-warm-white)',
              border: isSelected ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
              padding: '0.5rem 1.25rem',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
