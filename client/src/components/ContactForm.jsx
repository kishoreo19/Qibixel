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
    seoChallenge: 'Technical SEO & Indexation',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error' | 'validation_error'
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
        // Reset form
        setFormData({
          name: '',
          workEmail: '',
          company: '',
          website: '',
          industry: 'SaaS',
          budgetRange: '$5k - $10k / mo',
          seoChallenge: 'Technical SEO & Indexation',
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
      padding: '3rem',
      borderRadius: '4px',
      boxShadow: 'var(--shadow-card)'
    }}>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
        Initiate Strategic Discussion
      </h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.9625rem' }}>
        Complete the search briefing below to schedule a technical SEO evaluation.
      </p>

      {/* Success Notification Banner */}
      {status === 'success' && (
        <div style={{
          backgroundColor: 'var(--secondary-sage)',
          border: '1px solid var(--brand-primary)',
          color: 'var(--brand-primary)',
          padding: '1.5rem',
          borderRadius: '4px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem'
        }}>
          <CheckCircle size={24} style={{ shrink: 0, marginTop: '2px', color: 'var(--brand-primary)' }} />
          <div>
            <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--brand-primary)' }}>Submission Confirmed</h4>
            <p style={{ margin: '0.25rem 0 0', fontSize: '0.9375rem', color: 'var(--brand-primary)' }}>
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
          padding: '1.25rem',
          borderRadius: '4px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <AlertTriangle size={20} />
          <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>
            {serverMessage || "Something went wrong. Please try again."}
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
        {/* Full Name */}
        <div style={{ gridColumn: 'span 12', '@media (min-width: 768px)': { gridColumn: 'span 6' } }} className="form-col-6">
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
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
              fontSize: '0.9375rem',
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
        <div style={{ gridColumn: 'span 12', '@media (min-width: 768px)': { gridColumn: 'span 6' } }} className="form-col-6">
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
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
              fontSize: '0.9375rem',
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
        <div style={{ gridColumn: 'span 12', '@media (min-width: 768px)': { gridColumn: 'span 6' } }} className="form-col-6">
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
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
              fontSize: '0.9375rem',
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
        <div style={{ gridColumn: 'span 12', '@media (min-width: 768px)': { gridColumn: 'span 6' } }} className="form-col-6">
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
            Website URL
          </label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://company.com"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '0.9375rem',
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
        <div style={{ gridColumn: 'span 12', '@media (min-width: 768px)': { gridColumn: 'span 4' } }} className="form-col-4">
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
            Industry Vertical
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '0.9375rem',
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
        <div style={{ gridColumn: 'span 12', '@media (min-width: 768px)': { gridColumn: 'span 4' } }} className="form-col-4">
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
            Monthly Budget Target
          </label>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '0.9375rem',
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
        <div style={{ gridColumn: 'span 12', '@media (min-width: 768px)': { gridColumn: 'span 4' } }} className="form-col-4">
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
            Primary SEO Priority
          </label>
          <select
            name="seoChallenge"
            value={formData.seoChallenge}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '0.9375rem',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          >
            <option value="Technical SEO & Indexation">Technical SEO & Indexation</option>
            <option value="Search Content Strategy">Search Content Strategy</option>
            <option value="E-commerce Facet Control">E-commerce Facet Control</option>
            <option value="Site Migration Preservation">Site Migration Preservation</option>
            <option value="Authority Link Building & PR">Authority Link Building & PR</option>
            <option value="Full Organic Turnaround">Full Organic Turnaround</option>
          </select>
        </div>

        {/* Message */}
        <div style={{ gridColumn: 'span 12' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
            Project & Strategic Requirements *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please outline your current organic search challenges, targets, or platform setup..."
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              fontSize: '0.9375rem',
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
            style={{ width: '100%', justifyContent: 'center', padding: '1.1rem' }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={20} className="animated-dash" />
                <span>Validating & Transmitting Brief...</span>
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
