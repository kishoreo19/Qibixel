import React from 'react';

/**
 * Custom Abstract Search & Data Vector Visual
 * Pure SVG + CSS animations representing search indexing node matrix,
 * organic trajectory vectors, and structural entity graphs.
 */
export default function HeroVisual() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '540px',
      margin: '0 auto',
      background: 'linear-gradient(145deg, #183C32 0%, #102922 100%)',
      borderRadius: '4px',
      padding: '2.5rem 2rem',
      border: '1px solid #295347',
      boxShadow: '0 24px 60px rgba(24, 60, 50, 0.25)',
      overflow: 'hidden'
    }}>
      {/* Background Subtle Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.12,
        backgroundImage: 'radial-gradient(#F4F0E8 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>

      {/* SVG Data Matrix */}
      <svg viewBox="0 0 480 340" width="100%" height="100%" style={{ display: 'block', overflow: 'visible' }}>
        <defs>
          <linearGradient id="vectorGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B56A45" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#B56A45" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DCE4DA" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="glowArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B56A45" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#183C32" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Matrix Grid Lines */}
        <g stroke="#295347" strokeWidth="1" strokeDasharray="3 3" opacity="0.6">
          <line x1="40" y1="40" x2="440" y2="40" />
          <line x1="40" y1="110" x2="440" y2="110" />
          <line x1="40" y1="180" x2="440" y2="180" />
          <line x1="40" y1="250" x2="440" y2="250" />
          
          <line x1="40" y1="40" x2="40" y2="280" />
          <line x1="140" y1="40" x2="140" y2="280" />
          <line x1="240" y1="40" x2="240" y2="280" />
          <line x1="340" y1="40" x2="340" y2="280" />
          <line x1="440" y1="40" x2="440" y2="280" />
        </g>

        {/* Area Glow under Organic Trajectory Vector */}
        <path
          d="M 40 240 Q 140 220 220 160 T 440 60 L 440 280 L 40 280 Z"
          fill="url(#glowArea)"
        />

        {/* Animated Data Flow Lines */}
        <path
          d="M 40 240 Q 140 220 220 160 T 440 60"
          fill="none"
          stroke="url(#vectorGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <path
          d="M 40 240 Q 140 220 220 160 T 440 60"
          fill="none"
          stroke="#F4F0E8"
          strokeWidth="2"
          className="animated-dash"
          opacity="0.9"
        />

        {/* Secondary Cluster Trajectories */}
        <path
          d="M 40 260 Q 180 250 280 190 T 440 120"
          fill="none"
          stroke="#DCE4DA"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />

        {/* Entity Node Circles */}
        {/* Node 1: Entry Crawl */}
        <circle cx="40" cy="240" r="6" fill="#183C32" stroke="#DCE4DA" strokeWidth="2.5" />
        <text x="40" y="270" fill="#DCE4DA" fontSize="11" fontFamily="Plus Jakarta Sans" textAnchor="middle" opacity="0.85">Discover</text>

        {/* Node 2: Technical Indexing */}
        <circle cx="140" cy="225" r="5" fill="#183C32" stroke="#B56A45" strokeWidth="2" />
        <text x="140" y="252" fill="#DCE4DA" fontSize="11" fontFamily="Plus Jakarta Sans" textAnchor="middle" opacity="0.85">Index Matrix</text>

        {/* Node 3: Entity Relevancy */}
        <circle cx="220" cy="160" r="7" fill="#B56A45" stroke="#F4F0E8" strokeWidth="2.5" />
        <text x="220" y="140" fill="#F4F0E8" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans" textAnchor="middle">Topical Node</text>

        {/* Node 4: Commercial Intent Cluster */}
        <circle cx="340" cy="105" r="5.5" fill="#183C32" stroke="#DCE4DA" strokeWidth="2" />
        <text x="340" y="90" fill="#DCE4DA" fontSize="11" fontFamily="Plus Jakarta Sans" textAnchor="middle" opacity="0.85">Intent Match</text>

        {/* Node 5: Organic Growth Peak */}
        <circle cx="440" cy="60" r="8" fill="#F4F0E8" stroke="#B56A45" strokeWidth="3" />
        <text x="420" y="45" fill="#B56A45" fontSize="12" fontWeight="700" fontFamily="Plus Jakarta Sans" textAnchor="end">Dominance</text>

        {/* Metric Overlay Overlay Tags */}
        <g transform="translate(240, 210)">
          <rect x="0" y="0" width="160" height="38" rx="2" fill="#102922" stroke="#295347" strokeWidth="1" />
          <text x="12" y="16" fill="#DCE4DA" fontSize="10" fontFamily="Plus Jakarta Sans" uppercase="true" letterSpacing="0.05em">ORGANIC REVENUE INDEX</text>
          <text x="12" y="30" fill="#F4F0E8" fontSize="13" fontWeight="700" fontFamily="Cormorant Garamond">+186% Compound Lift</text>
        </g>

        <g transform="translate(50, 70)">
          <rect x="0" y="0" width="145" height="36" rx="2" fill="#102922" stroke="#295347" strokeWidth="1" />
          <text x="10" y="15" fill="#B56A45" fontSize="9" fontWeight="700" fontFamily="Plus Jakarta Sans">SEARCH INTENT SCORE</text>
          <text x="10" y="28" fill="#DCE4DA" fontSize="11" fontFamily="Plus Jakarta Sans">98.4 / 100 Relevancy</text>
        </g>
      </svg>
    </div>
  );
}
