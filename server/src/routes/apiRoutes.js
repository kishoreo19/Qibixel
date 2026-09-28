const express = require('express');
const apiController = require('../controllers/apiController');
const contactController = require('../controllers/contactController');

const router = express.Router();

// Health Check
router.get('/health', (req, res, next) => apiController.getHealth(req, res, next));

// Contact Submission
router.post('/contact', (req, res, next) => contactController.submitContact(req, res, next));

// Services
router.get('/services', (req, res, next) => apiController.getServices(req, res, next));
router.get('/services/:slug', (req, res, next) => apiController.getServiceBySlug(req, res, next));

// Case Studies
router.get('/case-studies', (req, res, next) => apiController.getCaseStudies(req, res, next));
router.get('/case-studies/:slug', (req, res, next) => apiController.getCaseStudyBySlug(req, res, next));

// Industries
router.get('/industries', (req, res, next) => apiController.getIndustries(req, res, next));

// Insights / Blog
router.get('/insights', (req, res, next) => apiController.getInsights(req, res, next));
router.get('/insights/:slug', (req, res, next) => apiController.getInsightBySlug(req, res, next));

// FAQs
router.get('/faqs', (req, res, next) => apiController.getFaqs(req, res, next));

module.exports = router;
