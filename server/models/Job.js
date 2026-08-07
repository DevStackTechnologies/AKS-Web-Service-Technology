import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: String, required: true },
  jobType: { 
    type: String, 
    enum: ['Full-time', 'Part-time', 'Remote', 'Hybrid', 'Internship'], 
    default: 'Full-time' 
  },
  salary: { type: String, required: true },
  description: { type: String, required: true },
  responsibilities: [{ type: String }],
  requirements: [{ type: String }],
  benefits: [{ type: String }],
  postedDate: { type: String, default: () => new Date().toISOString().split('T')[0] },
  featured: { type: Boolean, default: false }
});

export const Job = mongoose.model('Job', jobSchema);
