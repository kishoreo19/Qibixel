import { useEffect } from 'react';

/**
 * Custom SEO hook to dynamically update document title, meta tags, and JSON-LD schemas
 */
export function useSEO({ title, description, canonicalUrl, ogType = 'website', schema }) {
  useEffect(() => {
    // Title
    const formattedTitle = title ? `${title} | QIBIXEL SEO Agency` : 'QIBIXEL — Organic Growth & Technical SEO Agency';
    document.title = formattedTitle;

    // Meta Description
    const metaDescription = description || 'QIBIXEL helps ambitious businesses turn search visibility into sustainable organic growth through strategy, technical SEO, content, and data.';
    let elementMetaDesc = document.querySelector('meta[name="description"]');
    if (!elementMetaDesc) {
      elementMetaDesc = document.createElement('meta');
      elementMetaDesc.setAttribute('name', 'description');
      document.head.appendChild(elementMetaDesc);
    }
    elementMetaDesc.setAttribute('content', metaDescription);

    // Open Graph Tags
    const updateOG = (property, content) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    updateOG('og:title', formattedTitle);
    updateOG('og:description', metaDescription);
    updateOG('og:type', ogType);
    updateOG('og:site_name', 'QIBIXEL');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    } else if (canonical) {
      canonical.remove();
    }

    // JSON-LD Schema Script
    let schemaScript = document.getElementById('qibixel-json-ld');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'qibixel-json-ld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Clean up dynamic schema script on unmount
      const existingSchema = document.getElementById('qibixel-json-ld');
      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, JSON.stringify(schema)]);
}
