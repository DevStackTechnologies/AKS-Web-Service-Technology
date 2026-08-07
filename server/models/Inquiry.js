import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['contact', 'cost_estimator', 'consultation'],
    default: 'contact'
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  company: { type: String, default: '' },
  service: { type: String, default: '' },
  budget: { type: String, default: '' },
  message: { type: String, required: true },
  estimatedCost: { type: String, default: '' },
  selectedFeatures: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
