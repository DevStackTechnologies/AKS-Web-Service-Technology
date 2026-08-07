import express from 'express';
import { Application } from '../models/Application.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// GET /api/applications
router.get('/', async (req, res) => {
  try {
    const apps = await Application.find().sort({ appliedDate: -1 });
    res.json({ success: true, count: apps.length, data: apps });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/applications (Support JSON & Multipart file uploads)
router.post('/', (req, res, next) => {
  upload.single('resume')(req, res, (err) => {
    if (err) {
      // If error is file type mismatch or multer error, pass error response
      return res.status(400).json({ success: false, message: err.message });
    }
    next();
  });
}, async (req, res) => {
  try {
    const appData = { ...req.body };
    if (req.file) {
      appData.resumeUrl = `/uploads/${req.file.filename}`;
    }

    // Convert stringified arrays if sent via formData
    if (typeof appData.skills === 'string') {
      try { appData.skills = JSON.parse(appData.skills); } catch (_) { appData.skills = appData.skills.split(','); }
    }

    const app = new Application(appData);
    await app.save();
    res.status(201).json({ success: true, data: app });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// PATCH /api/applications/:id/status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const app = await Application.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json({ success: true, data: app });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /api/applications/:id/interview
router.post('/:id/interview', async (req, res) => {
  try {
    const { interviewDate, interviewNotes } = req.body;
    const app = await Application.findByIdAndUpdate(
      req.params.id,
      { status: 'Interview', interviewDate, interviewNotes },
      { new: true }
    );
    res.json({ success: true, data: app });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /api/applications/:id/offer
router.post('/:id/offer', async (req, res) => {
  try {
    const { ctc, joiningDate, designation } = req.body;
    const app = await Application.findByIdAndUpdate(
      req.params.id,
      { 
        status: 'Offer Letter', 
        offerDetails: { ctc, joiningDate, designation } 
      },
      { new: true }
    );
    res.json({ success: true, data: app });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

export default router;
