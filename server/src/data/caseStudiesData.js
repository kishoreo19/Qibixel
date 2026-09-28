const caseStudies = [
  {
    id: "cs-01",
    slug: "fintech-scaleup-organic-growth",
    title: "Scaling Organic Revenue 3.4x for a Series B B2B Fintech",
    clientName: "ApexPay (Sample Client)",
    industry: "Fintech / SaaS",
    isSampleData: true,
    sampleDataLabel: "Sample Case Study & Benchmark Performance Metrics",
    summary: "How technical infrastructure overhaul and targeted intent-cluster content unlocked massive enterprise search visibility for a competitive B2B payment API provider.",
    challenge: "ApexPay was spending heavily on Google Ads while their organic channel lagged due to JS client-side rendering indexation failures, dynamic URL parameter bloat, and thin product pages.",
    strategy: "Implemented Server-Side Rendering (SSR) for core product pages, consolidated 4,000+ thin pages into high-intent topic hubs, and launched an expert-led regulatory compliance content center.",
    execution: [
      "Remediated SSR rendering issues so Googlebot indexed full page HTML content.",
      "Mapped 120 key transactional keywords to comparison landing pages.",
      "Earned 45+ tier-1 financial press editorial backlinks through quarterly market data reports."
    ],
    results: [
      { metric: "+186%", label: "Organic Traffic Increase (Sample Data)" },
      { metric: "+72%", label: "Top 10 Keyword Positions (Sample Data)" },
      { metric: "+94%", label: "Organic Demo Requests (Sample Data)" }
    ],
    timeframe: "12 Months",
    keyServices: ["Technical SEO", "Search Content", "Digital PR"]
  },
  {
    id: "cs-02",
    slug: "healthcare-telemed-search-dominance",
    title: "E-E-A-T Framework & Medical Authority Expansion for Telehealth Platform",
    clientName: "VeraCare Health (Sample Client)",
    industry: "Healthcare / Telemedicine",
    isSampleData: true,
    sampleDataLabel: "Sample Case Study & Benchmark Performance Metrics",
    summary: "Navigating Google's YMYL (Your Money Your Life) search quality updates to restore and double organic patient acquisition.",
    challenge: "VeraCare suffered a 40% organic traffic dip following a Google Core Update due to unverified medical author bios, unanchored health claims, and weak internal linking.",
    strategy: "Rebuilt VeraCare's medical review board protocol, embedded Medical Doctor reviewer schemas across 800+ articles, and optimized local telehealth service pages.",
    execution: [
      "Instituted rigorous MD-reviewed content workflows with explicit schema citations.",
      "Re-architected condition and treatment category trees for maximum semantic relevance.",
      "Optimized local practitioner pages for state-by-state licensing visibility."
    ],
    results: [
      { metric: "+210%", label: "YMYL Keyword Rankings (Sample Data)" },
      { metric: "+145%", label: "Organic Patient Registrations (Sample Data)" },
      { metric: "+88%", label: "Domain Trust & Authority Score (Sample Data)" }
    ],
    timeframe: "8 Months",
    keyServices: ["Search Content", "On-Page SEO", "SEO Analytics"]
  },
  {
    id: "cs-03",
    slug: "global-ecommerce-facet-optimization",
    title: "Unlocking $4.2M in Organic Revenue for Global Apparel Brand",
    clientName: "Lumina Apparel (Sample Client)",
    industry: "E-commerce & Retail",
    isSampleData: true,
    sampleDataLabel: "Sample Case Study & Benchmark Performance Metrics",
    summary: "Solving complex multi-faceted navigation indexing to capture high-volume long-tail shopping queries.",
    challenge: "Lumina's e-commerce platform generated millions of duplicate parameterized URLs via color, size, and price filters, causing severe crawl budget depletion and cannibalization.",
    strategy: "Implemented canonical control and AJAX-based dynamic filtering for non-indexable states while creating dedicated indexable landing pages for high-demand attribute combinations.",
    execution: [
      "Configured intelligent canonical and robots tags across 200,000+ product variant combinations.",
      "Created 350 curated dynamic attribute collections targeting specific seasonal search trends.",
      "Added Product and AggregateRating JSON-LD schema across all SKU templates."
    ],
    results: [
      { metric: "+240%", label: "Long-Tail Product Indexation (Sample Data)" },
      { metric: "+112%", label: "Organic E-commerce Revenue (Sample Data)" },
      { metric: "-65%", label: "Crawl Budget Waste (Sample Data)" }
    ],
    timeframe: "14 Months",
    keyServices: ["E-commerce SEO", "Technical SEO", "SEO Analytics"]
  },
  {
    id: "cs-04",
    slug: "enterprise-saas-platform-migration",
    title: "Zero-Downtime SEO Platform Migration for Enterprise Security SaaS",
    clientName: "Fortress Cyber (Sample Client)",
    industry: "Cybersecurity / Enterprise Software",
    isSampleData: true,
    sampleDataLabel: "Sample Case Study & Benchmark Performance Metrics",
    summary: "Migrating a 50,000-page legacy WordPress site to Next.js and headless CMS with zero loss in search visibility.",
    challenge: "Fortress Cyber needed a modern frontend web framework, but feared losing millions in annual organic pipeline during a complete URL and platform migration.",
    strategy: "Designed a 1-to-1 redirect mapping engine, pre-launch staging crawl validation, continuous post-migration crawl monitoring, and structured internal link restoration.",
    execution: [
      "Built rigorous automated regex redirect rules covering 50,000+ historical URL structures.",
      "Validated HTML payload parity between legacy PHP and new headless React build.",
      "Executed real-time bot tracking during DNS cutover to instantly rectify 404 anomalies."
    ],
    results: [
      { metric: "100%", label: "Rank Preservation Post-Launch (Sample Data)" },
      { metric: "+64%", label: "Core Web Vitals Speed Score (Sample Data)" },
      { metric: "+52%", label: "Post-Migration Organic Leads (Sample Data)" }
    ],
    timeframe: "6 Months",
    keyServices: ["Enterprise SEO", "Technical SEO"]
  }
];

module.exports = caseStudies;
