const qibixelService = require('../services/qibixelService');

class ApiController {
  async getHealth(req, res, next) {
    try {
      res.json({
        success: true,
        status: 'online',
        service: 'QIBIXEL API Engine',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
      });
    } catch (error) {
      next(error);
    }
  }

  async getServices(req, res, next) {
    try {
      const services = await qibixelService.getAllServices();
      res.json({
        success: true,
        count: services.length,
        data: services
      });
    } catch (error) {
      next(error);
    }
  }

  async getServiceBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const service = await qibixelService.getServiceBySlug(slug);

      if (!service) {
        return res.status(404).json({
          success: false,
          message: `Service matching '${slug}' was not found.`
        });
      }

      res.json({
        success: true,
        data: service
      });
    } catch (error) {
      next(error);
    }
  }

  async getCaseStudies(req, res, next) {
    try {
      const caseStudies = await qibixelService.getAllCaseStudies();
      res.json({
        success: true,
        count: caseStudies.length,
        data: caseStudies
      });
    } catch (error) {
      next(error);
    }
  }

  async getCaseStudyBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const caseStudy = await qibixelService.getCaseStudyBySlug(slug);

      if (!caseStudy) {
        return res.status(404).json({
          success: false,
          message: `Case study matching '${slug}' was not found.`
        });
      }

      res.json({
        success: true,
        data: caseStudy
      });
    } catch (error) {
      next(error);
    }
  }

  async getIndustries(req, res, next) {
    try {
      const industries = await qibixelService.getAllIndustries();
      res.json({
        success: true,
        count: industries.length,
        data: industries
      });
    } catch (error) {
      next(error);
    }
  }

  async getInsights(req, res, next) {
    try {
      const { category } = req.query;
      const insights = await qibixelService.getAllInsights(category);
      res.json({
        success: true,
        count: insights.length,
        data: insights
      });
    } catch (error) {
      next(error);
    }
  }

  async getInsightBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const insight = await qibixelService.getInsightBySlug(slug);

      if (!insight) {
        return res.status(404).json({
          success: false,
          message: `Insight article matching '${slug}' was not found.`
        });
      }

      res.json({
        success: true,
        data: insight
      });
    } catch (error) {
      next(error);
    }
  }

  async getFaqs(req, res, next) {
    try {
      const faqs = await qibixelService.getAllFaqs();
      res.json({
        success: true,
        count: faqs.length,
        data: faqs
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ApiController();
