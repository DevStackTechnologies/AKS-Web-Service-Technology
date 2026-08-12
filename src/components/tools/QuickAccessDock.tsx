import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Palette, FileText, Settings, X, ExternalLink, 
  Download, Sparkles, CheckCircle2, MessageSquare, Phone, 
  Mail, Zap
} from 'lucide-react';

interface QuickAccessDockProps {
  onNavigate: (tab: string) => void;
  onOpenCalendly: () => void;
}

export const QuickAccessDock: React.FC<QuickAccessDockProps> = ({ onNavigate, onOpenCalendly }) => {
  const [activeModal, setActiveModal] = useState<'demos' | 'colors' | 'brochure' | 'support' | null>(null);
  const [activeColor, setActiveColor] = useState<string>('electric-blue');
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureSent, setBrochureSent] = useState(false);

  const demoItems = [
    {
      title: 'KD Finserve Wealth & SIP Portal',
      category: 'FinTech & Investment',
      desc: 'OAuth2 secure portfolio tracking with automated NAV calculation engines.',
      url: 'https://kdfinserv.netlify.app',
      badge: 'Live Production 🚀',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Rahul Custom Choppers 3D Builder',
      category: 'Automotive & 3D WebXR',
      desc: 'Interactive 3D motorcycle configurator with exhaust audio preview.',
      url: 'https://thriving-bunny-01ec14.netlify.app',
      badge: '3D Configurator 🔥',
      tags: ['Three.js', 'Flutter', 'Firebase']
    },
    {
      title: 'GlowBotanica Luxury Cosmetic Store',
      category: 'Luxury E-Commerce',
      desc: 'Headless Next.js storefront with AI shade matching and instant checkout.',
      url: 'https://kdfinserv.netlify.app',
      badge: 'Headless Store',
      tags: ['Next.js', 'GraphQL', 'Tailwind']
    },
    {
      title: 'PulseCare AI Telehealth Platform',
      category: 'MedTech & AI Diagnostic',
      desc: 'HIPAA-compliant encrypted WebRTC consultations and symptom analysis.',
      url: 'https://kdfinserv.netlify.app',
      badge: 'AI Telehealth',
      tags: ['FastAPI', 'WebRTC', 'Python']
    }
  ];

  const colorPalettes = [
    {
      id: 'electric-blue',
      name: 'Electric Blue',
      gradient: 'from-[#0A4EDB] via-[#139EF8] to-[#38BDF8]',
      hex: '#0A4EDB',
      tag: 'Default Official'
    },
    {
      id: 'luxury-crimson',
      name: 'Logo Crimson Red',
      gradient: 'from-[#E84125] via-[#FF5722] to-[#FF8A65]',
      hex: '#E84125',
      tag: 'Brand Red'
    },
    {
      id: 'cyber-emerald',
      name: 'Cyber Emerald',
      gradient: 'from-[#059669] via-[#10B981] to-[#34D399]',
      hex: '#10B981',
      tag: 'High Growth'
    },
    {
      id: 'neon-violet',
      name: 'Deep Neon Violet',
      gradient: 'from-[#7C3AED] via-[#8B5CF6] to-[#C084FC]',
      hex: '#8B5CF6',
      tag: 'AI Matrix'
    },
    {
      id: 'solar-amber',
      name: 'Solar Amber Gold',
      gradient: 'from-[#D97706] via-[#F59E0B] to-[#FCD34D]',
      hex: '#F59E0B',
      tag: 'Enterprise Gold'
    }
  ];

  const handlePaletteChange = (colorId: string) => {
    setActiveColor(colorId);
  };

  return (
    <>
      {/* 1. DESKTOP & TABLET FLOATING DOCK (Positioned safely with ample right margin inside Hero) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:flex absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 p-2 bg-slate-950/90 backdrop-blur-xl rounded-3xl border border-sky-400/40 shadow-[0_8px_32px_rgba(10,78,219,0.45)] transform-gpu will-change-transform select-none"
      >
        {/* Button 1: Demos */}
        <motion.button
          whileHover={{ scale: 1.08, x: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setActiveModal('demos')}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-[#0A4EDB] via-[#139EF8] to-[#0A4EDB] text-white flex flex-col items-center justify-center gap-0.5 shadow-md hover:shadow-sky-500/50 border border-sky-300/40 transition-transform active:scale-95 group p-1"
          title="Explore Live Demos"
        >
          <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Monitor className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-black tracking-tight leading-none">Demos</span>
        </motion.button>

        {/* Button 2: Colors */}
        <motion.button
          whileHover={{ scale: 1.08, x: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setActiveModal('colors')}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-[#0A4EDB] via-[#139EF8] to-[#0A4EDB] text-white flex flex-col items-center justify-center gap-0.5 shadow-md hover:shadow-sky-500/50 border border-sky-300/40 transition-transform active:scale-95 group p-1"
          title="Color Themes & Customization"
        >
          <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Palette className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-black tracking-tight leading-none">Colors</span>
        </motion.button>

        {/* Button 3: Brochure */}
        <motion.button
          whileHover={{ scale: 1.08, x: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setActiveModal('brochure')}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-[#0A4EDB] via-[#139EF8] to-[#0A4EDB] text-white flex flex-col items-center justify-center gap-0.5 shadow-md hover:shadow-sky-500/50 border border-sky-300/40 transition-transform active:scale-95 group p-1"
          title="Download Company Brochure"
        >
          <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileText className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-black tracking-tight leading-none">Profile</span>
        </motion.button>

        {/* Button 4: Support */}
        <motion.button
          whileHover={{ scale: 1.08, x: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setActiveModal('support')}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-[#0A4EDB] via-[#139EF8] to-[#0A4EDB] text-white flex flex-col items-center justify-center gap-0.5 shadow-md hover:shadow-sky-500/50 border border-sky-300/40 transition-transform active:scale-95 group p-1"
          title="24/7 Engineering Support Desk"
        >
          <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Settings className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-black tracking-tight leading-none">Support</span>
        </motion.button>
      </motion.div>

      {/* 2. MOBILE DOCK BAR (Positioned strictly at bottom of Hero Section with 100% visible buttons) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex sm:hidden absolute bottom-3 left-1/2 -translate-x-1/2 z-30 items-center justify-center gap-1.5 p-1.5 bg-slate-950/92 backdrop-blur-xl rounded-2xl border border-sky-400/40 shadow-[0_8px_24px_rgba(10,78,219,0.45)] w-[calc(100%-2rem)] max-w-sm select-none"
      >
        <button
          onClick={() => setActiveModal('demos')}
          className="flex-1 py-2 px-1.5 rounded-xl bg-gradient-to-b from-[#0A4EDB] to-[#139EF8] text-white flex flex-col items-center justify-center gap-1 shadow-sm active:scale-95 border border-sky-300/30"
        >
          <Monitor className="w-3.5 h-3.5 text-white" />
          <span className="text-[9px] font-bold leading-none">Demos</span>
        </button>

        <button
          onClick={() => setActiveModal('colors')}
          className="flex-1 py-2 px-1.5 rounded-xl bg-gradient-to-b from-[#0A4EDB] to-[#139EF8] text-white flex flex-col items-center justify-center gap-1 shadow-sm active:scale-95 border border-sky-300/30"
        >
          <Palette className="w-3.5 h-3.5 text-white" />
          <span className="text-[9px] font-bold leading-none">Colors</span>
        </button>

        <button
          onClick={() => setActiveModal('brochure')}
          className="flex-1 py-2 px-1.5 rounded-xl bg-gradient-to-b from-[#0A4EDB] to-[#139EF8] text-white flex flex-col items-center justify-center gap-1 shadow-sm active:scale-95 border border-sky-300/30"
        >
          <FileText className="w-3.5 h-3.5 text-white" />
          <span className="text-[9px] font-bold leading-none">Profile</span>
        </button>

        <button
          onClick={() => setActiveModal('support')}
          className="flex-1 py-2 px-1.5 rounded-xl bg-gradient-to-b from-[#0A4EDB] to-[#139EF8] text-white flex flex-col items-center justify-center gap-1 shadow-sm active:scale-95 border border-sky-300/30"
        >
          <Settings className="w-3.5 h-3.5 text-white" />
          <span className="text-[9px] font-bold leading-none">Support</span>
        </button>
      </motion.div>

      {/* 3. ULTRA-FAST INDIVIDUAL POPUP MODALS */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm transform-gpu"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 text-slate-900 max-h-[88vh] my-auto flex flex-col transform-gpu will-change-transform"
            >
              
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/90 flex-shrink-0">
                <div className="flex items-center gap-2.5 sm:gap-3 pr-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    {activeModal === 'demos' && <Monitor className="w-4 h-4" />}
                    {activeModal === 'colors' && <Palette className="w-4 h-4" />}
                    {activeModal === 'brochure' && <FileText className="w-4 h-4" />}
                    {activeModal === 'support' && <Settings className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                      {activeModal === 'demos' && 'Interactive Project Demos'}
                      {activeModal === 'colors' && 'Theme & Accent Palette'}
                      {activeModal === 'brochure' && 'Company Profile & Deck'}
                      {activeModal === 'support' && '24/7 Engineering Support'}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1">
                      {activeModal === 'demos' && 'Live web & mobile apps developed by TecVor Technologies.'}
                      {activeModal === 'colors' && 'Choose your preferred accent palette across our ecosystem.'}
                      {activeModal === 'brochure' && 'Get instant access to corporate deck and capabilities.'}
                      {activeModal === 'support' && 'Connect directly with technical architects and engineers.'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200/90 hover:bg-slate-300 active:scale-95 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all flex-shrink-0 ml-1 shadow-sm"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-5 overflow-y-auto space-y-4">

                {/* MODAL CONTENT 1: DEMOS */}
                {activeModal === 'demos' && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {demoItems.map((demo, idx) => (
                        <div 
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:shadow-sm transition-all space-y-2 flex flex-col justify-between"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-extrabold uppercase text-[#0A4EDB] tracking-wider">
                                {demo.category}
                              </span>
                              <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                {demo.badge}
                              </span>
                            </div>
                            <h4 className="text-xs font-black text-slate-900 leading-snug">
                              {demo.title}
                            </h4>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              {demo.desc}
                            </p>
                          </div>

                          <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                            <div className="flex flex-wrap gap-1">
                              {demo.tags.map((t, tI) => (
                                <span key={tI} className="text-[8px] px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium">
                                  {t}
                                </span>
                              ))}
                            </div>
                            <a
                              href={demo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-1.5 px-2.5 rounded-lg bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white text-[11px] font-bold flex items-center justify-center gap-1 hover:brightness-110 shadow-sm transition-all"
                            >
                              <span>Launch Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between gap-3">
                      <div>
                        <h4 className="text-xs font-black text-sky-950">Want a custom prototype?</h4>
                        <p className="text-[10px] text-sky-800">We build proof-of-concept prototypes in 48 hours.</p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveModal(null);
                          onOpenCalendly();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#0A4EDB] text-white text-[11px] font-bold hover:bg-sky-600 shadow transition-all flex-shrink-0"
                      >
                        Book Call
                      </button>
                    </div>
                  </div>
                )}

                {/* MODAL CONTENT 2: COLORS */}
                {activeModal === 'colors' && (
                  <div className="space-y-3">
                    <p className="text-[11px] text-slate-600">
                      Select an accent color palette to customize your visual experience across our platform:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {colorPalettes.map((cp) => (
                        <div
                          key={cp.id}
                          onClick={() => handlePaletteChange(cp.id)}
                          className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between gap-2.5 ${
                            activeColor === cp.id 
                              ? 'border-sky-500 bg-sky-50/60 shadow-sm' 
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${cp.gradient} shadow-sm flex-shrink-0`} />
                            <div>
                              <h4 className="text-xs font-black text-slate-900">{cp.name}</h4>
                              <span className="text-[9px] text-slate-500 font-medium">{cp.tag}</span>
                            </div>
                          </div>

                          {activeColor === cp.id && (
                            <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-100 text-[11px] text-slate-600 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>Color palette is saved to your session and synchronized automatically.</span>
                    </div>
                  </div>
                )}

                {/* MODAL CONTENT 3: BROCHURE */}
                {activeModal === 'brochure' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-sky-950 text-white space-y-2 relative overflow-hidden shadow-md">
                      <div className="absolute right-0 top-0 w-28 h-28 bg-sky-500/20 rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-sky-400 uppercase font-bold tracking-widest">
                          Official Profile 2026
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-white font-bold">
                          PDF • 14 Pages
                        </span>
                      </div>
                      <h3 className="text-sm font-black text-white">
                        TecVor Technologies Capabilities & Deck
                      </h3>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Includes architecture blueprints, tech stack pricing models, enterprise case studies, and SLA guarantees.
                      </p>
                    </div>

                    {brochureSent ? (
                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                        <h4 className="text-xs font-bold text-emerald-900">Brochure Link Sent Successfully!</h4>
                        <p className="text-[11px] text-emerald-700">Check your email for the high-res PDF download link.</p>
                      </div>
                    ) : (
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          setBrochureSent(true);
                        }}
                        className="space-y-2.5"
                      >
                        <label className="text-[11px] font-bold text-slate-700 block">
                          Enter your work email for instant access:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            required
                            placeholder="work@example.com"
                            value={brochureEmail}
                            onChange={(e) => setBrochureEmail(e.target.value)}
                            className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-base sm:text-xs focus:border-sky-500 outline-none"
                          />
                          <button
                            type="submit"
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white text-xs font-bold hover:brightness-110 shadow transition-all flex items-center gap-1.5 flex-shrink-0"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF</span>
                          </button>
                        </div>
                      </form>
                    )}

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>ownsources001@gmail.com</span>
                      <a 
                        href="tel:+917739339852" 
                        className="font-bold text-sky-600 hover:underline"
                      >
                        +91 7739339852
                      </a>
                    </div>
                  </div>
                )}

                {/* MODAL CONTENT 4: SUPPORT */}
                {activeModal === 'support' && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      
                      {/* WhatsApp Channel */}
                      <a
                        href="https://wa.me/917739339852"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 hover:shadow-sm transition-all flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow group-hover:scale-105 transition-transform flex-shrink-0">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-black text-emerald-950">WhatsApp Hotline</h4>
                          <p className="text-[11px] text-emerald-700">+91 7739339852</p>
                          <span className="text-[8px] font-bold text-emerald-600">Avg Reply: 2 mins</span>
                        </div>
                      </a>

                      {/* Official Email */}
                      <a
                        href="mailto:ownsources001@gmail.com"
                        className="p-3 rounded-xl bg-sky-50 border border-sky-200 hover:border-sky-400 hover:shadow-sm transition-all flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0A4EDB] text-white flex items-center justify-center shadow group-hover:scale-105 transition-transform flex-shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-black text-sky-950">Email Support</h4>
                          <p className="text-[11px] text-sky-700 truncate">ownsources001@gmail.com</p>
                          <span className="text-[8px] font-bold text-sky-600">Fast 24-hr SLA</span>
                        </div>
                      </a>

                      {/* Phone Support */}
                      <a
                        href="tel:+917739339852"
                        className="p-3 rounded-xl bg-amber-50 border border-amber-200 hover:border-amber-400 hover:shadow-sm transition-all flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow group-hover:scale-105 transition-transform flex-shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-black text-amber-950">Direct Phone</h4>
                          <p className="text-[11px] text-amber-700">+91 7739339852</p>
                          <span className="text-[8px] font-bold text-amber-600">Mon - Sat: 9 AM - 9 PM</span>
                        </div>
                      </a>

                      {/* Strategy Call */}
                      <div
                        onClick={() => {
                          setActiveModal(null);
                          onOpenCalendly();
                        }}
                        className="p-3 rounded-xl bg-rose-50 border border-rose-200 hover:border-rose-400 hover:shadow-sm transition-all flex items-center gap-3 cursor-pointer group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#E84125] text-white flex items-center justify-center shadow group-hover:scale-105 transition-transform flex-shrink-0">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-black text-rose-950">Book Video Call</h4>
                          <p className="text-[11px] text-rose-700">1-on-1 Strategy Meet</p>
                          <span className="text-[8px] font-bold text-rose-600">Instant Confirmation</span>
                        </div>
                      </div>

                    </div>

                    <div className="pt-2 text-center">
                      <button
                        onClick={() => {
                          setActiveModal(null);
                          onNavigate('contact');
                        }}
                        className="text-[11px] font-bold text-[#0A4EDB] hover:underline"
                      >
                        Open Full Contact & Engineering Desk &rarr;
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
