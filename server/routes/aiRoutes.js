import express from 'express';

const router = express.Router();

// POST /api/ai/parse-resume
router.post('/parse-resume', (req, res) => {
  const { resumeText } = req.body;
  
  // Keyword extraction algorithm simulation
  const keywords = ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Python', 'Tailwind', 'Docker', 'AWS'];
  let matches = 0;
  
  if (resumeText) {
    keywords.forEach(kw => {
      if (resumeText.toLowerCase().includes(kw.toLowerCase())) {
        matches++;
      }
    });
  }

  const baseScore = Math.floor((matches / keywords.length) * 40) + 55;
  const atsScore = Math.min(Math.max(baseScore, 75), 98);

  res.json({
    success: true,
    atsScore,
    extractedSkills: keywords.filter(kw => (resumeText || '').toLowerCase().includes(kw.toLowerCase())),
    recommendations: [
      'Add measurable metrics (e.g. Improved site load time by 35%)',
      'Include cloud certification details (AWS / GCP)',
      'Ensure standard section headers (Experience, Education, Skills)'
    ]
  });
});

// POST /api/ai/chat
router.post('/chat', (req, res) => {
  const { message } = req.body;
  const lower = (message || '').toLowerCase();

  let response = "AKS AI Assistant: We have active open positions in React, Node.js, and AI Engineering.";
  if (lower.includes('job') || lower.includes('position')) {
    response = "AKS AI Assistant: We currently have 25+ open positions across Engineering, Design, and AI R&D.";
  } else if (lower.includes('intern')) {
    response = "AKS AI Assistant: Our 2026 Internship Program offers 3-month paid tracks with stipends up to ₹18,000/month!";
  }

  res.json({ success: true, reply: response });
});

export default router;
