import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll background listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active & handle Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(244, 240, 232, 0.96)' : 'var(--bg-primary)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background-color var(--transition-normal), border-color var(--transition-normal)',
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'var(--safe-top)',
      paddingLeft: 'var(--safe-left)',
      paddingRight: 'var(--safe-right)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        {/* Brand Logo */}
        <Link
          to="/"
          aria-label="QIBIXEL Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            minHeight: '44px',
            touchAction: 'manipulation'
          }}
        >
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 5vw, 1.85rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--brand-primary)'
          }}>
            QIBIXEL
          </span>
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-copper)',
            marginBottom: '4px'
          }}></span>
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.filter(l => l.label !== 'Contact').map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--brand-primary)' : 'var(--text-muted)',
                  borderBottom: isActive ? '2px solid var(--accent-copper)' : '2px solid transparent',
                  paddingBottom: '0.2rem'
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="desktop-only">
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}>
            <span>Start a Conversation</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Touch-Friendly Hamburger Button (Min 44px x 44px) */}
        <button
          className="mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--brand-primary)',
            cursor: 'pointer',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            touchAction: 'manipulation'
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dedicated Mobile Full-Screen Navigation Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 'calc(var(--header-height) + var(--safe-top))',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 999,
            padding: '1.5rem 1.25rem calc(2rem + var(--safe-bottom))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-subtle)',
            overflowY: 'auto',
            animation: 'fadeIn 250ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.75rem, 6vw, 2.25rem)',
                    fontWeight: 600,
                    color: isActive ? 'var(--accent-copper)' : 'var(--brand-primary)',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingTop: '0.85rem',
                    paddingBottom: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && <ArrowUpRight size={22} style={{ color: 'var(--accent-copper)' }} />}
                </Link>
              );
            })}
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-accent"
              style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', minHeight: '52px' }}
            >
              <span>Start a Conversation</span>
              <ArrowUpRight size={18} />
            </Link>

            <div style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-muted)', paddingTop: '0.5rem' }}>
              QIBIXEL Organic Search & Web Growth
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
        @media (min-width: 992px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>
    </header>
  );
}
