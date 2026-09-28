const qibixelService = require('../services/qibixelService');

class ContactController {
  async submitContact(req, res, next) {
    try {
      const payload = req.body;
      const savedEnquiry = await qibixelService.saveContactEnquiry(payload);

      res.status(201).json({
        success: true,
        message: "Thanks for reaching out. Your enquiry has been received.",
        data: {
          id: savedEnquiry.id,
          createdAt: savedEnquiry.createdAt
        }
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ContactController();
