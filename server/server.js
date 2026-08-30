import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';

import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';

import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';

import { Job } from './models/Job.js';
import { User } from './models/User.js';
import { Application } from './models/Application.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure Uploads Directory Exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 🛡️ Enterprise Security Middlewares Configuration
// 1. Rate Limiting Protection (Anti-Brute Force & Anti-DDoS)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150, // Limit each IP to 150 requests per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Security Block: Too many requests from this IP. Please try again in 15 minutes.' }
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Max 10 login/register/OTP attempts per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Security Block: Too many authentication attempts. Please try again after 15 minutes.' }
});

// 2. Helmet HTTP Security Headers (HSTS, Anti-XSS, Anti-Framejacking)
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  frameguard: { action: 'deny' },
  noSniff: true
}));

// 3. Cookie Parser Integration
app.use(cookieParser());

// 4. NoSQL Operator Injection Sanitization & HTTP Parameter Pollution Defense
app.use(mongoSanitize({
  replaceWith: '_'
}));
app.use(hpp());

// 5. Apply Security Rate Limiters to API Routes
app.use('/api/', apiLimiter);
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);
app.use('/api/auth/send-otp', authLimiter);

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan('dev'));

// Static Uploads & SEO Sitemap Handlers
app.use('/uploads', express.static(uploadDir));

app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml; charset=utf-8');
  res.sendFile(path.join(process.cwd(), '..', 'public', 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
  res.header('Content-Type', 'text/plain; charset=utf-8');
  res.sendFile(path.join(process.cwd(), '..', 'public', 'robots.txt'));
});

// Connect MongoDB Atlas & Seed Data
connectDB().then((connected) => {
  if (connected) {
    seedInitialDatabaseData();
  }
});

// Seed Initial Database Setup
async function seedInitialDatabaseData() {
  try {
    // 1. Seed Default Admin & HR Users
    const adminCount = await User.countDocuments({ role: 'admin' });
    if (adminCount === 0) {
      const hashedAdminPassword = await bcrypt.hash('admin123', 10);
      await User.create({
        name: 'TecVor Systems Administrator',
        email: 'admin@tecvor.com',
        password: hashedAdminPassword,
        role: 'admin',
        title: 'Chief Technology Officer',
        skills: ['Cloud Architecture', 'Security', 'React', 'Node.js']
      });
      console.log('👤 Default Admin Created: admin@tecvor.com / admin123');
    }

    const hrCount = await User.countDocuments({ role: 'hr' });
    if (hrCount === 0) {
      const hashedHrPassword = await bcrypt.hash('hr123', 10);
      await User.create({
        name: 'Priya Sharma (HR Lead)',
        email: 'hr@tecvor.com',
        password: hashedHrPassword,
        role: 'hr',
        title: 'Head of Talent Acquisition',
        skills: ['Recruitment', 'ATS Systems', 'People Operations']
      });
      console.log('👤 Default HR Lead Created: hr@tecvor.com / hr123');
    }

    // 2. Seed Requisitions
    const jobCount = await Job.countDocuments();
    if (jobCount === 0) {
      await Job.insertMany([
        {
          title: 'Frontend Developer (React / Next.js)',
          department: 'Development',
          location: 'Remote / Ranchi, India',
          experience: '2-4 Years',
          jobType: 'Full-time',
          salary: '₹8,00,000 - ₹14,00,000 PA',
          description: 'Build enterprise React 18 web applications with glassmorphism UI & sub-second render speeds.',
          responsibilities: ['Architect resilient components', 'Optimize Core Web Vitals', 'Integrate Framer Motion animations'],
          requirements: ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
          benefits: ['Remote options', 'Health Insurance', 'Learning Stipend'],
          featured: true
        },
        {
          title: 'Backend Developer (Node.js & Microservices)',
          department: 'Development',
          location: 'Ranchi, India',
          experience: '2-5 Years',
          jobType: 'Full-time',
          salary: '₹9,00,000 - ₹16,00,000 PA',
          description: 'Engineers high-throughput backend REST APIs, MongoDB Atlas database indexing, and Redis caching layers.',
          responsibilities: ['Develop Node microservices', 'Optimize MongoDB indexing', 'Security Hardening'],
          requirements: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
          benefits: ['Competitive pay', 'Flexible hours', 'Performance Bonus'],
          featured: true
        },
        {
          title: 'AI / Machine Learning Engineer',
          department: 'AI & Data',
          location: 'Remote / Hybrid',
          experience: '2-5 Years',
          jobType: 'Full-time',
          salary: '₹12,00,000 - ₹22,00,000 PA',
          description: 'Fine-tune open-source LLMs, automated document OCR, and AI resume screening engines.',
          responsibilities: ['Build NLP models', 'Deploy LLM Agents', 'Optimize RAG pipelines'],
          requirements: ['Python', 'PyTorch', 'LangChain', 'Vector DBs'],
          benefits: ['High growth AI team', 'Conference budget', 'Stock Options'],
          featured: true
        }
      ]);
      console.log('🌱 MongoDB Atlas Job Requisitions Populated');
    }

    // 3. Seed Sample Applications if empty
    const appCount = await Application.countDocuments();
    if (appCount === 0) {
      await Application.create({
        jobId: '101',
        jobTitle: 'Frontend Developer (React / Next.js)',
        candidateName: 'Rahul Verma',
        email: 'rahul.verma@example.com',
        phone: '+91 98765 12345',
        experienceYears: 3,
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        atsScore: 92,
        status: 'Interview',
        interviewDate: '2026-08-10T11:00',
        interviewNotes: 'Strong frontend architectural understanding and smooth animation experience.'
      });
      console.log('🌱 Sample Candidate Application Populated');
    }

  } catch (err) {
    console.error('Seed Error:', err.message);
  }
}

// REST API Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    company: 'TecVor Technologies',
    database: 'MongoDB Atlas Cloud',
    version: '1.0.0-production',
    timestamp: new Date().toISOString()
  });
});

// Global 404 Route
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('API Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 TecVor Production REST API running on http://localhost:${PORT}`);
});
