const servicesData = require('../data/servicesData');
const caseStudiesData = require('../data/caseStudiesData');
const industriesData = require('../data/industriesData');
const insightsData = require('../data/insightsData');
const faqsData = require('../data/faqsData');
const { ContactModel } = require('../models');

/**
 * Data Service Abstraction for QIBIXEL Platform
 * Easily plug in ORM / DB calls (Mongoose, Prisma, Knex) inside these functions.
 */
class QibixelService {
  async getAllServices() {
    return servicesData;
  }

  async getServiceBySlug(slug) {
    return servicesData.find(s => s.slug === slug) || null;
  }

  async getAllCaseStudies() {
    return caseStudiesData;
  }

  async getCaseStudyBySlug(slug) {
    return caseStudiesData.find(cs => cs.slug === slug) || null;
  }

  async getAllIndustries() {
    return industriesData;
  }

  async getAllInsights(category = null) {
    if (category && category !== 'All') {
      return insightsData.filter(i => i.category.toLowerCase() === category.toLowerCase());
    }
    return insightsData;
  }

  async getInsightBySlug(slug) {
    return insightsData.find(i => i.slug === slug) || null;
  }

  async getAllFaqs() {
    return faqsData;
  }

  async saveContactEnquiry(rawPayload) {
    const validation = ContactModel.validate(rawPayload);

    if (!validation.isValid) {
      const error = new Error("Validation Failed");
      error.statusCode = 400;
      error.details = validation.errors;
      throw error;
    }

    // DB Storage simulation (e.g., await ContactDbModel.create(validation.sanitized))
    const savedRecord = {
      id: "enq_" + Date.now(),
      ...validation.sanitized
    };

    console.log("[STORAGE LOG] Secure Contact Submission Received:", savedRecord.id, savedRecord.workEmail);

    return savedRecord;
  }
}

module.exports = new QibixelService();
