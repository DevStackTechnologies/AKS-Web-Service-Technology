import express from 'express';
import { Inquiry } from '../models/Inquiry.js';
import { protect, authorize } from '../middleware/auth.js';
import { sendInquiryEmailNotification } from '../services/emailService.js';

const router = express.Router();

// POST /api/inquiries (Public client contact form & cost estimator submission)
router.post('/', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();

    // Dispatch notification email to company email (ownsources001@gmail.com) asynchronously
    sendInquiryEmailNotification(inquiry).catch(err => {
      console.warn('Background email dispatch warning:', err.message);
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry received successfully! Our team will contact you within 24 hours.',
      data: inquiry
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/inquiries (Admin & HR view client inquiries)
router.get('/', protect, authorize('admin', 'hr'), async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/inquiries/:id (Admin delete inquiry)
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Inquiry deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
