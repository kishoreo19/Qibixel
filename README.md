# QIBIXEL — Premium SEO & Organic Growth Agency Platform

QIBIXEL is a production-ready, full-stack web application for an elite SEO & organic growth consultancy. It features an editorial, high-precision aesthetic custom-crafted to communicate authority, technical sophistication, and evidence-based search growth.

---

## 🏗️ Project Architecture

This application uses a unified single-root monorepo structure containing both client (React + Vite) and server (Node.js + Express):

```
qibixel/
├── package.json         # Root scripts & concurrency orchestrator
├── README.md            # Documentation & setup guide
├── .env.example         # Reference environment schema
├── .gitignore           # Global git ignore definitions
│
├── client/              # React.js Frontend (Vite)
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   ├── src/
│   │   ├── components/  # Reusable UI & editorial elements
│   │   ├── pages/       # Page views (Home, About, Services, Case Studies, Insights, Contact, etc.)
│   │   ├── sections/    # Modular section compositions
│   │   ├── layouts/     # Main layout wrappers (Header, Footer)
│   │   ├── data/        # Client static metadata
│   │   ├── hooks/       # Custom React hooks (useFetch, useSEO)
│   │   ├── services/    # Frontend API client
│   │   ├── utils/       # Formatters & helper utilities
│   │   ├── assets/      # Media & graphics
│   │   ├── styles/      # Design system tokens, typography, grid & variables
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/          # Sitemap, robots.txt, dynamic assets
│
└── server/              # Node.js + Express REST API Backend
    ├── package.json
    ├── .env             # Active backend runtime configuration
    ├── .env.example
    └── src/
        ├── config/      # Server configuration & security constants
        ├── controllers/ # REST Endpoint controllers
        ├── routes/      # Express API routers (/api/...)
        ├── services/    # Data layer services (DB-ready abstraction)
        ├── models/      # Data schemas & validation contracts
        ├── middleware/  # Error handlers, rate limiters, validation middleware
        ├── data/        # Static content collections (Services, Case Studies, FAQs, Insights)
        └── server.js    # Express application entrypoint
```

---

## 🎨 QIBIXEL Color System & Typography

- **Primary Background (Warm Ivory)**: `#F4F0E8`
- **Primary Brand (Deep Forest)**: `#183C32`
- **Accent (Muted Copper)**: `#B56A45`
- **Text (Deep Charcoal)**: `#202522`
- **Secondary (Soft Sage)**: `#DCE4DA`
- **Card Background (Warm White)**: `#FBFAF6`

**Typography**:
- **Display Headlines**: *Cormorant Garamond* (Sophisticated Editorial Serif)
- **UI & Body Copy**: *Plus Jakarta Sans* / *Manrope* (Clean Modern Sans-Serif)

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation & Launch

1. **Navigate to the project root**:
   ```bash
   cd qibixel
   ```

2. **Install all dependencies (root, client, server)**:
   ```bash
   npm run setup
   ```
   *(Or individually: `npm install`, `cd client && npm install`, `cd server && npm install`)*

3. **Start Development Servers (Concurrently)**:
   ```bash
   npm run dev
   ```

   This launches:
   - 🌐 **Frontend**: `http://localhost:5173`
   - ⚙️ **Backend REST API**: `http://localhost:5000`

---

## 📡 Backend API Endpoints

- `GET  /api/health` — Health check & system uptime
- `POST /api/contact` — Secure, validated contact form submission
- `GET  /api/services` — Service catalog overview
- `GET  /api/services/:slug` — Individual service deep dive
- `GET  /api/case-studies` — Editorial case studies list
- `GET  /api/case-studies/:slug` — Single case study detail
- `GET  /api/industries` — Vertical industry coverage
- `GET  /api/insights` — Editorial search insights & articles
- `GET  /api/insights/:slug` — Insight article view
- `GET  /api/faqs` — Interactive FAQ collection

---

## 🛡️ Security & Quality Features

- **Rate Limiting**: Protection against spam & DDoS using `express-rate-limit`.
- **Security Headers**: Production-grade HTTP headers powered by `helmet`.
- **CORS Protection**: Restricted origin configuration.
- **Input Validation & Sanitization**: Comprehensive server-side field checks for email format, string sanitization, and required parameters.
- **DB-Ready Architecture**: Decoupled service layer ready for MongoDB/PostgreSQL integration without rewriting controller logic.
