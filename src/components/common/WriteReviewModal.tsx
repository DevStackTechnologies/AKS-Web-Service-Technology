import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, CheckCircle2, MessageSquare, Send, Sparkles, AlertCircle } from 'lucide-react';

export interface ClientReview {
  _id?: string;
  name: string;
  role: string;
  photo?: string;
  rating: number;
  project: string;
  review: string;
  createdAt?: string | Date;
}

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: (review: ClientReview) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onReviewSubmitted
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [project, setProject] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const ratingDescriptions: Record<number, string> = {
    1: 'Needs Improvement',
    2: 'Below Average',
    3: 'Good Quality',
    4: 'Very Impressed',
    5: 'Exceptional (5 Stars) ⭐'
  };

  const resetForm = () => {
    setName('');
    setRole('');
    setProject('');
    setReview('');
    setRating(5);
    setHoverRating(0);
    setErrorMsg('');
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!role.trim()) {
      setErrorMsg('Please specify your designation or company name.');
      return;
    }
    if (!project.trim()) {
      setErrorMsg('Please enter the project or service name.');
      return;
    }
    if (!review.trim() || review.trim().length < 15) {
      setErrorMsg('Please write at least 15 characters of detailed feedback.');
      return;
    }

    setIsSubmitting(true);

    const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name.trim())}&backgroundColor=0052FF,E84125,0F172A`;

    const reviewData: ClientReview = {
      name: name.trim(),
      role: role.trim(),
      rating,
      project: project.trim(),
      review: review.trim(),
      photo: avatarUrl,
      createdAt: new Date().toISOString()
    };

    try {
      // 1. Send to MongoDB API
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData)
      });

      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          reviewData._id = json.data._id;
        }
      }
    } catch (err) {
      console.warn('Backend offline, saving review locally in browser:', err);
    } finally {
      // 2. Persist locally to localStorage as backup
      try {
        const stored = localStorage.getItem('tecvor_client_reviews');
        const list: ClientReview[] = stored ? JSON.parse(stored) : [];
        list.unshift(reviewData);
        localStorage.setItem('tecvor_client_reviews', JSON.stringify(list));
      } catch (storageErr) {
        console.error('LocalStorage write failed:', storageErr);
      }

      // 3. Immediately update parent state (Optimistic UI)
      onReviewSubmitted(reviewData);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after 2.5s
      setTimeout(() => {
        handleClose();
      }, 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        >
          {/* Header Accent Gradient */}
          <div className="h-2 bg-gradient-to-r from-[#E84125] via-amber-500 to-[#0052FF]" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all"
            aria-label="Close review modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Modal Title */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E84125]">
                <Sparkles className="w-4 h-4" />
                <span>Verified Client Feedback</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Write a Client Review
              </h3>
              <p className="text-xs text-slate-500">
                Share your experience working with TecVor Technologies. Your review will be featured live on our website.
              </p>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    Your verified review has been submitted and is now published live on our platform.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Rating Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 transition-transform hover:scale-110 focus:outline-none"
                          aria-label={`${star} Star`}
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${
                              (hoverRating || rating) >= star
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-600 ml-2">
                      {ratingDescriptions[hoverRating || rating]}
                    </span>
                  </div>
                </div>

                {/* Name & Role Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Role / Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Founder, FinTech Ltd"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                </div>

                {/* Project Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    Project / Solution Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Next.js SaaS Platform, AI Agent Automation, Mobile App"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all"
                  />
                </div>

                {/* Review Text */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700">
                      Your Review / Feedback <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {review.length} / 1000
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    placeholder="Share how TecVor Technologies helped engineer your platform, solve architectural challenges, or achieve business growth..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-[#E84125] to-[#0052FF] hover:opacity-95 shadow-md flex items-center gap-2 disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Publish Review</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
