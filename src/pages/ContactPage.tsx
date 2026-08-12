import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, 
  Globe, Clock, Sparkles, Building2, User, HelpCircle, ArrowRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Web App & Software',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-[#FFF8F5] text-slate-900 space-y-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* 1. HERO HEADER WITH AKS LOGO BRANDED GRADIENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-amber-500/10 to-[#E84125]/10 border border-[#E84125]/30 text-[#E84125] text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E84125]" />
            <span>Connect with TecVor Technologies</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#EA580C] to-[#E84125]">
              Extraordinary Together
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Have a project idea, inquiry about our custom software engineering, or seeking enterprise technical consultation? Our engineering team is ready to assist you.
          </p>
        </motion.div>

        {/* 2. 3 HIGHLIGHT CONTACT CARDS (MATCHING LOGO A-K-S PALETTE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Logo 'A' (Sky Blue / Cyan #0284C7) */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-3xl bg-white border-2 border-sky-100 hover:border-sky-400 shadow-md space-y-4 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] border border-sky-200 flex items-center justify-center shadow-sm group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#0284C7]">Official Email Inquiries</span>
              <h3 className="text-lg font-black text-slate-900">Email & Support</h3>
              <p className="text-xs text-slate-600">Fast response within 4 hours</p>
            </div>
            <div className="pt-2 border-t border-slate-100 space-y-1 text-xs font-bold text-slate-800">
              <a href="mailto:ownsources001@gmail.com" className="block text-[#0284C7] hover:underline">
                ownsources001@gmail.com
              </a>
              <a href="mailto:contact@tecvor.com" className="block text-slate-600 hover:text-[#0284C7]">
                contact@tecvor.com
              </a>
            </div>
          </motion.div>

          {/* Card 2: Logo 'K' (Amber / Gold #EA580C) */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-3xl bg-white border-2 border-amber-100 hover:border-amber-400 shadow-md space-y-4 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#EA580C] border border-amber-200 flex items-center justify-center shadow-sm group-hover:bg-[#EA580C] group-hover:text-white transition-colors duration-300">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#EA580C]">Direct Hotline & WhatsApp</span>
              <h3 className="text-lg font-black text-slate-900">Phone & Consult</h3>
              <p className="text-xs text-slate-600">Available Mon-Sat 9AM-7:30PM</p>
            </div>
            <div className="pt-2 border-t border-slate-100 space-y-1 text-xs font-bold text-slate-800">
              <a href="tel:+917739339852" className="block text-[#EA580C] hover:underline">
                +91 7739339852
              </a>
              <a href="https://wa.me/917739339852" target="_blank" rel="noopener noreferrer" className="block text-emerald-600 hover:underline">
                WhatsApp: +91 7739339852
              </a>
            </div>
          </motion.div>

          {/* Card 3: Logo 'S' (Coral Red #E84125 - 24/7 Engineering Support) */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-3xl bg-white border-2 border-[#FED7C8] hover:border-[#E84125] shadow-md space-y-4 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E84125]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#E84125] border border-[#FED7C8] flex items-center justify-center shadow-sm group-hover:bg-[#E84125] group-hover:text-white transition-colors duration-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#E84125]">24/7 Client Availability</span>
              <h3 className="text-lg font-black text-slate-900">Engineering SLA</h3>
              <p className="text-xs text-slate-600">Enterprise Cloud & Technical Support</p>
            </div>
            <div className="pt-2 border-t border-slate-100 space-y-0.5 text-xs text-slate-700 font-semibold">
              <p className="text-slate-900 font-bold">Fast Guaranteed Response</p>
              <p className="text-[11px] text-slate-500">Dedicated Technical Architects</p>
            </div>
          </motion.div>

        </div>

        {/* 3. MAIN INTERACTIVE FORM & MAP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#FED7C8]/80 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="inline-block border-b-2 border-[#E84125] pb-0.5">
                <span className="text-[#E84125] text-xs font-black uppercase tracking-wider">
                  Send a Direct Message
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                How Can Our Engineers Help You?
              </h2>
              <p className="text-xs text-slate-600">
                Fill out the project details below and our lead technical architect will contact you.
              </p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-black text-slate-900">Thank You! Message Sent Successfully.</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  We have received your message. Our technical team will reach out at <span className="font-bold text-[#E84125]">{formData.email}</span> in less than 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', category: 'Web App & Software', subject: '', message: '' });
                  }}
                  className="mt-3 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#E84125] hover:bg-[#c9331a] shadow-md transition-all"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold uppercase tracking-wider text-[11px] text-slate-700 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0284C7]" /> Your Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter Full Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E84125] focus:ring-2 focus:ring-[#E84125]/20 bg-slate-50/60" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold uppercase tracking-wider text-[11px] text-slate-700 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#EA580C]" /> Email Address *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="email@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E84125] focus:ring-2 focus:ring-[#E84125]/20 bg-slate-50/60" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold uppercase tracking-wider text-[11px] text-slate-700 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#E84125]" /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E84125] focus:ring-2 focus:ring-[#E84125]/20 bg-slate-50/60" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold uppercase tracking-wider text-[11px] text-slate-700 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#0284C7]" /> Project Domain
                    </label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E84125] focus:ring-2 focus:ring-[#E84125]/20 bg-slate-50/60 font-semibold"
                    >
                      <option>Web App & Custom Software</option>
                      <option>Mobile App (iOS & Android)</option>
                      <option>E-Commerce & Stripe Platforms</option>
                      <option>AI Automation & Neural Models</option>
                      <option>UI/UX Design Systems</option>
                      <option>Careers & Internship Opportunities</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold uppercase tracking-wider text-[11px] text-slate-700 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#EA580C]" /> Subject
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Brief description of your project or requirement" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E84125] focus:ring-2 focus:ring-[#E84125]/20 bg-slate-50/60" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold uppercase tracking-wider text-[11px] text-slate-700 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#E84125]" /> Your Message
                  </label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Provide details about your project timelines, requirements, or questions..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E84125] focus:ring-2 focus:ring-[#E84125]/20 bg-slate-50/60 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-xs text-white bg-gradient-to-r from-[#0284C7] via-[#EA580C] to-[#E84125] hover:opacity-95 shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>Submit Inquiry to Engineering Team</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Map & Working Hours Showcase */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Visual Location Card with Logo Branded Backdrop */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white shadow-xl border border-slate-800 space-y-6 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E84125]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-200 text-[10px] font-black uppercase tracking-widest">
                  <span>Global Cloud & Engineering Desk</span>
                </div>

                <h3 className="text-2xl font-black text-white">
                  Enterprise Support Hub
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Our distributed teams of full-stack software engineers, cloud architects, and UI/UX designers deliver world-class digital platforms globally.
                </p>

                <div className="space-y-3 pt-2 text-xs">
                  <div className="flex items-center gap-3 text-slate-200">
                    <Mail className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                    <span>ownsources001@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-200">
                    <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>+91 7739339852</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-200">
                    <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Mon - Sat: 9:00 AM - 9:00 PM (IST)</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-200">
                    <Globe className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>24/7 Enterprise SLA Cloud Monitoring</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3 relative z-10">
                <a
                  href="mailto:ownsources001@gmail.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-black text-center transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Email Engineering Desk</span>
                </a>

                <a
                  href="https://wa.me/917739339852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick Support SLA Callout */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#FED7C8] shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#E84125] border border-[#FED7C8] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black text-slate-900">Guaranteed Response SLA</h4>
                <p className="text-[11px] text-slate-600">All business and technical inquiries receive a direct reply within 4 to 24 hours.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

