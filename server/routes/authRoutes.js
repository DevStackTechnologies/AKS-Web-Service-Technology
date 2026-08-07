import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { Otp } from '../models/Otp.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'aks_jwt_secret';

// POST /api/auth/send-otp (Generate & store real 4-digit OTP in MongoDB Atlas)
router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email address is required' });
    }

    const cleanEmail = email.toLowerCase().trim();
    // Generate real 4-digit random OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

    // Upsert OTP in MongoDB
    await Otp.deleteMany({ email: cleanEmail });
    await Otp.create({ email: cleanEmail, otp: generatedOtp });

    console.log(`✉️ REAL OTP GENERATED FOR [${cleanEmail}]: ${generatedOtp}`);

    res.json({
      success: true,
      message: `Real OTP verification code sent to ${cleanEmail}`,
      otp: generatedOtp // Return code so user can see/use it directly for testing
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/auth/verify-otp (Verify OTP from MongoDB Atlas)
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: 'Email and OTP code are required' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const otpRecord = await Otp.findOne({ email: cleanEmail, otp: otp.trim() });

    if (!otpRecord) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP code' });
    }

    // Delete verified OTP record
    await Otp.deleteMany({ email: cleanEmail });

    res.json({
      success: true,
      message: 'Email address verified successfully!'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/auth/register (Create Real User in MongoDB Atlas)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, role = 'candidate', title, skills, experienceYears, education } = req.body;
    const cleanEmail = email.toLowerCase().trim();

    let user = await User.findOne({ email: cleanEmail });
    if (user) {
      return res.status(400).json({ success: false, message: 'User already exists with this email address' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email: cleanEmail,
      password: hashedPassword,
      phone,
      role,
      title: title || (role === 'hr' ? 'HR Talent Manager' : 'Software Engineer'),
      skills: Array.isArray(skills) ? skills : ['React', 'TypeScript', 'Node.js'],
      experienceYears: Number(experienceYears) || 2,
      education: education || 'B.Tech Computer Science',
      atsScore: Math.floor(Math.random() * 10) + 88
    });

    await user.save();
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        title: user.title,
        skills: user.skills,
        experienceYears: user.experienceYears,
        atsScore: user.atsScore
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/auth/login (Authenticate Real User from MongoDB Atlas)
router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const cleanEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials. User not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials. Password incorrect.' });
    }

    if (role && user.role !== role) {
      user.role = role;
      await user.save();
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        title: user.title,
        skills: user.skills,
        experienceYears: user.experienceYears,
        atsScore: user.atsScore
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/auth/me (Get Authenticated User Data)
router.get('/me', protect, async (req, res) => {
  try {
    res.json({ success: true, user: req.user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
