import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    maxlength: [80, 'Name cannot exceed 80 characters']
  },
  role: {
    type: String,
    required: [true, 'Please provide your role or company name'],
    trim: true,
    maxlength: [100, 'Role cannot exceed 100 characters']
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a star rating between 1 and 5'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
    default: 5
  },
  project: {
    type: String,
    required: [true, 'Please specify the project or service name'],
    trim: true,
    maxlength: [120, 'Project name cannot exceed 120 characters']
  },
  review: {
    type: String,
    required: [true, 'Please share your detailed review feedback'],
    trim: true,
    minlength: [10, 'Review must be at least 10 characters'],
    maxlength: [1200, 'Review cannot exceed 1200 characters']
  },
  photo: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'rejected'],
    default: 'approved'
  },
  isVerified: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for fast retrieval of latest approved reviews
reviewSchema.index({ status: 1, createdAt: -1 });

export const Review = mongoose.model('Review', reviewSchema);
