import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';
import api from '../utils/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    website: '',
    industry: 'SaaS',
    budgetRange: '$5k - $10k / mo',
    seoChallenge: 'Technical SEO & Architecture',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setFieldErrors({});
    setServerMessage('');

    try {
      const response = await api.post('/contact', formData);
      if (response.success) {
        setStatus('success');
        setServerMessage(response.message || "Thanks for reaching out. Your enquiry has been received.");
        setFormData({
          name: '',
          workEmail: '',
          company: '',
          website: '',
          industry: 'SaaS',
          budgetRange: '$5k - $10k / mo',
          seoChallenge: 'Technical SEO & Architecture',
          message: ''
        });
      }
    } catch (err) {
      if (err.errors) {
        setStatus('validation_error');
        setFieldErrors(err.errors);
      } else {
        setStatus('error');
        setServerMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--card-warm-white)',
      border: '1px solid var(--border-subtle)',
      padding: 'clamp(1.5rem, 5vw, 3rem)',
      borderRadius: '4px',
      boxShadow: 'var(--shadow-card)',
      maxWidth: '100%'
    }}>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
        Initiate Strategic Discussion
      </h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9375rem' }}>
        Complete the search briefing below to schedule a technical evaluation.
      </p>

      {/* Success Notification Banner */}
      {status === 'success' && (
        <div style={{
          backgroundColor: 'var(--secondary-sage)',
          border: '1px solid var(--brand-primary)',
          color: 'var(--brand-primary)',
          padding: '1.25rem',
          borderRadius: '4px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.85rem'
        }}>
          <CheckCircle size={22} style={{ shrink: 0, marginTop: '2px', color: 'var(--brand-primary)' }} />
          <div>
            <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--brand-primary)' }}>Submission Confirmed</h4>
            <p style={{ margin: '0.25rem 0 0', fontSize: '0.875rem', color: 'var(--brand-primary)' }}>
              {serverMessage}
            </p>
          </div>
        </div>
      )}

      {/* General Error Banner */}
      {status === 'error' && (
        <div style={{
          backgroundColor: '#FDF2F2',
          border: '1px solid #F87171',
          color: '#991B1B',
          padding: '1.1rem',
          borderRadius: '4px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <AlertTriangle size={20} />
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            {serverMessage || "Something went wrong. Please try again."}
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.25rem' }}>
        {/* Full Name */}
        <div style={{ gridColumn: 'span 12' }} className="form-col-6">
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '16px', // Prevents iOS Safari auto-zoom
              minHeight: '48px',
              borderRadius: '2px',
              border: fieldErrors.name ? '1px solid #DC2626' : '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          />
          {fieldErrors.name && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{fieldErrors.name}</span>}
        </div>

        {/* Work Email */}
        <div style={{ gridColumn: 'span 12' }} className="form-col-6">
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
            Work Email *
          </label>
          <input
            type="email"
            name="workEmail"
            required
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="jane@company.com"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '16px',
              minHeight: '48px',
              borderRadius: '2px',
              border: fieldErrors.workEmail ? '1px solid #DC2626' : '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          />
          {fieldErrors.workEmail && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{fieldErrors.workEmail}</span>}
        </div>

        {/* Company */}
        <div style={{ gridColumn: 'span 12' }} className="form-col-6">
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
            Company Name *
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '16px',
              minHeight: '48px',
              borderRadius: '2px',
              border: fieldErrors.company ? '1px solid #DC2626' : '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          />
          {fieldErrors.company && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{fieldErrors.company}</span>}
        </div>

        {/* Website URL */}
        <div style={{ gridColumn: 'span 12' }} className="form-col-6">
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
            Website URL
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://company.com"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '16px',
              minHeight: '48px',
              borderRadius: '2px',
              border: fieldErrors.website ? '1px solid #DC2626' : '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          />
          {fieldErrors.website && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{fieldErrors.website}</span>}
        </div>

        {/* Industry */}
        <div style={{ gridColumn: 'span 12' }} className="form-col-4">
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
            Industry Vertical
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '16px',
              minHeight: '48px',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          >
            <option value="SaaS">SaaS & B2B Software</option>
            <option value="Technology">Technology & Cloud</option>
            <option value="E-commerce">E-commerce & Retail</option>
            <option value="Healthcare">Healthcare & Biotech</option>
            <option value="Finance">Finance & Fintech</option>
            <option value="Legal">Legal Services</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Education">Education & EdTech</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Startups">Early-Stage Startup</option>
          </select>
        </div>

        {/* Budget Range */}
        <div style={{ gridColumn: 'span 12' }} className="form-col-4">
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
            Monthly Budget Target
          </label>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '16px',
              minHeight: '48px',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          >
            <option value="$3k - $5k / mo">$3,000 - $5,000 / mo</option>
            <option value="$5k - $10k / mo">$5,000 - $10,000 / mo</option>
            <option value="$10k - $25k / mo">$10,000 - $25,000 / mo</option>
            <option value="$25k+ / mo">$25,000+ Enterprise / mo</option>
          </select>
        </div>

        {/* SEO Challenge */}
        <div style={{ gridColumn: 'span 12' }} className="form-col-4">
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
            Primary Priority
          </label>
          <select
            name="seoChallenge"
            value={formData.seoChallenge}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '16px',
              minHeight: '48px',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          >
            <option value="Technical SEO & Architecture">Technical SEO & Architecture</option>
            <option value="Search Content Strategy">Search Content Strategy</option>
            <option value="Web Engineering & React Apps">Web Engineering & React Apps</option>
            <option value="Performance Marketing & PPC">Performance Marketing & PPC</option>
            <option value="Conversion Optimization (CRO)">Conversion Optimization (CRO)</option>
            <option value="Full Digital Turnaround">Full Digital Turnaround</option>
          </select>
        </div>

        {/* Message */}
        <div style={{ gridColumn: 'span 12' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
            Project Requirements *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please outline your current organic or digital growth goals..."
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '16px',
              borderRadius: '2px',
              border: fieldErrors.message ? '1px solid #DC2626' : '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none',
              resize: 'vertical'
            }}
          />
          {fieldErrors.message && <span style={{ color: '#DC2626', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{fieldErrors.message}</span>}
        </div>

        {/* Submit CTA */}
        <div style={{ gridColumn: 'span 12', marginTop: '0.5rem' }}>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', minHeight: '52px', fontSize: '1rem' }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={20} className="animated-dash" />
                <span>Transmitting Brief...</span>
              </>
            ) : (
              <>
                <span>Submit Strategic Enquiry</span>
                <Send size={18} />
              </>
            )}
          </button>
        </div>
      </form>

      <style>{`
        @media (min-width: 768px) {
          .form-col-6 { grid-column: span 6 !important; }
          .form-col-4 { grid-column: span 4 !important; }
        }
      `}</style>
    </div>
  );
}
