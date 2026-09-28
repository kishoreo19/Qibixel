/**
 * DB-Ready Schema Contracts & Data Transfer Object (DTO) Definitions
 * 
 * This module defines the validation schemas and structure for QIBIXEL models.
 * If switching to MongoDB (Mongoose) or PostgreSQL (Prisma/Knex) in the future,
 * these definitions serve as the exact contract interface for database entities.
 */

class ContactModel {
  static validate(payload) {
    const errors = {};
    const { name, workEmail, company, website, industry, budgetRange, seoChallenge, message } = payload || {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = "Full name is required (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!workEmail || !emailRegex.test(workEmail.trim())) {
      errors.workEmail = "A valid work email address is required.";
    }

    if (!company || typeof company !== 'string' || company.trim().length < 1) {
      errors.company = "Company name is required.";
    }

    if (website && typeof website === 'string' && website.trim().length > 0) {
      if (!website.includes('.') || website.length < 4) {
        errors.website = "Please provide a valid website URL or domain.";
      }
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = "Please describe your project or enquiry (minimum 10 characters).";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      sanitized: {
        name: name ? name.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;") : '',
        workEmail: workEmail ? workEmail.trim().toLowerCase() : '',
        company: company ? company.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;") : '',
        website: website ? website.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;") : '',
        industry: industry ? industry.trim() : 'Not Specified',
        budgetRange: budgetRange ? budgetRange.trim() : 'Not Specified',
        seoChallenge: seoChallenge ? seoChallenge.trim() : 'General Organic Growth',
        message: message ? message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;") : '',
        createdAt: new Date().toISOString()
      }
    };
  }
}

module.exports = {
  ContactModel
};
