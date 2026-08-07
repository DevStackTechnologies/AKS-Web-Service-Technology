import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['candidate', 'hr', 'admin'], 
    default: 'candidate' 
  },
  title: { type: String, default: 'Software Engineer' },
  skills: [{ type: String }],
  experienceYears: { type: Number, default: 2 },
  education: { type: String, default: 'B.Tech in Computer Science' },
  atsScore: { type: Number, default: 90 },
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', userSchema);
