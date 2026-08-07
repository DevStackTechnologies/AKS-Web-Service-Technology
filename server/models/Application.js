import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  jobId: { type: String, required: true },
  jobTitle: { type: String, required: true },
  candidateName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '+91 98765 43210' },
  experienceYears: { type: Number, default: 2 },
  skills: [{ type: String }],
  resumeText: { type: String, default: '' },
  atsScore: { type: Number, default: 88 },
  status: { 
    type: String, 
    enum: ['Applied', 'Resume Parsing', 'ATS Screening', 'HR Review', 'Technical Test', 'Interview', 'HR Discussion', 'Offer Letter', 'Onboarding'], 
    default: 'Applied' 
  },
  appliedDate: { type: String, default: () => new Date().toISOString().split('T')[0] },
  rating: { type: Number, default: 4 },
  interviewDate: { type: String },
  interviewNotes: { type: String },
  offerDetails: {
    ctc: { type: String },
    joiningDate: { type: String },
    designation: { type: String }
  }
});

export const Application = mongoose.model('Application', applicationSchema);
