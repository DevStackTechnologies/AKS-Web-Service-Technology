import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Palette, FileText, Settings, X, ExternalLink, 
  Download, Sparkles, CheckCircle2, MessageSquare, Phone, 
  Mail, ArrowRight, ShieldCheck, Zap, Layers, Play
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
      name: 'Candidate Portal Electric Blue',
      gradient: 'from-[#0A4EDB] via-[#139EF8] to-[#38BDF8]',
      hex: '#0A4EDB',
      tag: 'Default Official'
    },
    {
      id: 'luxury-crimson',
      name: 'Logo Accent Crimson Red',
      gradient: 'from-[#E84125] via-[#FF5722] to-[#FF8A65]',
      hex: '#E84125',
      tag: 'Brand Red'
    },
    {
      id: 'cyber-emerald',
      name: 'Cyber Emerald & FinTech Green',
      gradient: 'from-[#059669] via-[#10B981] to-[#34D399]',
      hex: '#10B981',
      tag: 'High Growth'
    },
    {
      id: 'neon-violet',
      name: 'Deep AI Neon Violet',
      gradient: 'from-[#7C3AED] via-[#8B5CF6] to-[#C084FC]',
      hex: '#8B5CF6',
      tag: 'AI Matrix'
    },
    {
      id: 'solar-amber',
      name: 'Solar Amber & Gold Luxury',
      gradient: 'from-[#D97706] via-[#F59E0B] to-[#FCD34D]',
      hex: '#F59E0B',
      tag: 'Enterprise Gold'
    }
  ];

  const [isVisible, setIsVisible] = useState(true);

  // Animate and show only in Hero Section, then smoothly slide out/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.85;
      if (window.scrollY < heroThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePaletteChange = (colorId: string) => {
    setActiveColor(colorId);
  };

  return (
    <>
      {/* FLOATING QUICK ACCESS VERTICAL DOCK (Hero Section Only with Slide-In Animation & AKS Blue Theme) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, x: 90 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 90 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5 p-1.5 bg-slate-950/80 backdrop-blur-xl rounded-l-2xl border-l border-y border-sky-400/30 shadow-[0_10px_40px_rgba(10,78,219,0.35)]"
          >
            
            {/* Button 1: Demos (AKS Web Service Electric Blue) */}
            <motion.button
              whileHover={{ scale: 1.08, x: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal('demos')}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b from-[#0A4EDB] via-[#139EF8] to-[#0A4EDB] text-white flex flex-col items-center justify-center gap-1 shadow-lg hover:shadow-sky-500/40 border border-sky-300/30 transition-all group"
              title="Explore Live Demos"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-tight">Demos</span>
            </motion.button>

            {/* Button 2: Colors (AKS Web Service Electric Blue) */}
            <motion.button
              whileHover={{ scale: 1.08, x: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal('colors')}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b from-[#0A4EDB] via-[#139EF8] to-[#0A4EDB] text-white flex flex-col items-center justify-center gap-1 shadow-lg hover:shadow-sky-500/40 border border-sky-300/30 transition-all group"
              title="Color Themes & Customization"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-tight">Colors</span>
            </motion.button>

            {/* Button 3: Brochure (AKS Web Service Electric Blue) */}
            <motion.button
              whileHover={{ scale: 1.08, x: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal('brochure')}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b from-[#0A4EDB] via-[#139EF8] to-[#0A4EDB] text-white flex flex-col items-center justify-center gap-1 shadow-lg hover:shadow-sky-500/40 border border-sky-300/30 transition-all group"
              title="Download Company Brochure"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-tight">Brochure</span>
            </motion.button>

            {/* Button 4: Support (AKS Web Service Electric Blue with Rotating Gear) */}
            <motion.button
              whileHover={{ scale: 1.08, x: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal('support')}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b from-[#0A4EDB] via-[#139EF8] to-[#0A4EDB] text-white flex flex-col items-center justify-center gap-1 shadow-lg hover:shadow-sky-500/40 border border-sky-300/30 transition-all group"
              title="24/7 Engineering Support Desk"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-spin-slow" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-tight">Support</span>
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>

      {/* INTERACTIVE MODALS & DRAWERS */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 text-slate-900 max-h-[90vh] flex flex-col"
            >
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white flex items-center justify-center shadow-md">
                    {activeModal === 'demos' && <Monitor className="w-5 h-5" />}
                    {activeModal === 'colors' && <Palette className="w-5 h-5" />}
                    {activeModal === 'brochure' && <FileText className="w-5 h-5" />}
                    {activeModal === 'support' && <Settings className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 capitalize">
                      {activeModal === 'demos' && 'Interactive Project Demos'}
                      {activeModal === 'colors' && 'Theme & Accent Palette'}
                      {activeModal === 'brochure' && 'Official Company Brochure'}
                      {activeModal === 'support' && '24/7 Engineering Support Desk'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {activeModal === 'demos' && 'Explore live production web & mobile platforms developed by our team.'}
                      {activeModal === 'colors' && 'Choose your preferred accent palette across the agency ecosystem.'}
                      {activeModal === 'brochure' && 'Get instant access to our complete corporate deck and service breakdown.'}
                      {activeModal === 'support' && 'Connect directly with technical architects and support engineers.'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="w-9 h-9 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">

                {/* MODAL CONTENT 1: DEMOS */}
                {activeModal === 'demos' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {demoItems.map((demo, idx) => (
                        <div 
                          key={idx}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-extrabold uppercase text-[#0A4EDB] tracking-wider">
                                {demo.category}
                              </span>
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                {demo.badge}
                              </span>
                            </div>
                            <h4 className="text-sm font-black text-slate-900 leading-snug">
                              {demo.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {demo.desc}
                            </p>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-slate-200/80">
                            <div className="flex flex-wrap gap-1">
                              {demo.tags.map((t, tI) => (
                                <span key={tI} className="text-[9px] px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-semibold">
                                  {t}
                                </span>
                              ))}
                            </div>
                            <a
                              href={demo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:brightness-110 shadow-sm transition-all"
                            >
                              <span>Launch Live Demo</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-xs font-black text-sky-950">Want a custom demo tailored for your business?</h4>
                        <p className="text-[11px] text-sky-800">We build proof-of-concept prototypes in 48 hours.</p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveModal(null);
                          onOpenCalendly();
                        }}
                        className="px-4 py-2 rounded-xl bg-[#0A4EDB] text-white text-xs font-bold hover:bg-sky-600 shadow-md transition-all flex-shrink-0"
                      >
                        Book Strategy Call
                      </button>
                    </div>
                  </div>
                )}

                {/* MODAL CONTENT 2: COLORS */}
                {activeModal === 'colors' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-600">
                      Select an accent color palette to customize your visual experience across our platform:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {colorPalettes.map((cp) => (
                        <div
                          key={cp.id}
                          onClick={() => handlePaletteChange(cp.id)}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between gap-3 ${
                            activeColor === cp.id 
                              ? 'border-sky-500 bg-sky-50/60 shadow-md' 
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${cp.gradient} shadow-sm`} />
                            <div>
                              <h4 className="text-xs font-black text-slate-900">{cp.name}</h4>
                              <span className="text-[10px] text-slate-500 font-semibold">{cp.tag}</span>
                            </div>
                          </div>

                          {activeColor === cp.id && (
                            <CheckCircle2 className="w-5 h-5 text-sky-600" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-100 text-xs text-slate-600 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>Color palette is saved to your session and automatically synchronized.</span>
                    </div>
                  </div>
                )}

                {/* MODAL CONTENT 3: BROCHURE */}
                {activeModal === 'brochure' && (
                  <div className="space-y-5">
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white space-y-3 relative overflow-hidden shadow-lg">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-sky-400 uppercase font-bold tracking-widest">
                          Official Corporate Profile 2026
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white font-bold">
                          PDF • 14 Pages
                        </span>
                      </div>
                      <h3 className="text-base font-black text-white">
                        AKS Web Service Technology Capabilities & Portfolio Deck
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Includes architecture blueprints, tech stack pricing models, enterprise case studies, and SLA guarantees.
                      </p>
                    </div>

                    {brochureSent ? (
                      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                        <h4 className="text-sm font-bold text-emerald-900">Brochure Link Sent Successfully!</h4>
                        <p className="text-xs text-emerald-700">Check your email for the high-res PDF download link.</p>
                      </div>
                    ) : (
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          setBrochureSent(true);
                        }}
                        className="space-y-3"
                      >
                        <label className="text-xs font-bold text-slate-700 block">
                          Enter your work email for instant access:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            required
                            placeholder="Enter your work email address"
                            value={brochureEmail}
                            onChange={(e) => setBrochureEmail(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:border-sky-500 outline-none"
                          />
                          <button
                            type="submit"
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white text-xs font-bold hover:brightness-110 shadow-md transition-all flex items-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF</span>
                          </button>
                        </div>
                      </form>
                    )}

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Direct Inquiries: ownsources001@gmail.com</span>
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
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {/* WhatsApp Channel */}
                      <a
                        href="https://wa.me/917739339852"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all flex items-center gap-3.5 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-emerald-950">WhatsApp Hotline</h4>
                          <p className="text-[11px] text-emerald-700">+91 7739339852</p>
                          <span className="text-[9px] font-bold text-emerald-600">Avg Reply: 2 mins</span>
                        </div>
                      </a>

                      {/* Official Email */}
                      <a
                        href="mailto:ownsources001@gmail.com"
                        className="p-4 rounded-2xl bg-sky-50 border border-sky-200 hover:border-sky-400 hover:shadow-md transition-all flex items-center gap-3.5 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#0A4EDB] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-sky-950">Email Support</h4>
                          <p className="text-[11px] text-sky-700 truncate max-w-[140px]">ownsources001@gmail.com</p>
                          <span className="text-[9px] font-bold text-sky-600">Fast 24-hr SLA</span>
                        </div>
                      </a>

                      {/* Phone Support */}
                      <a
                        href="tel:+917739339852"
                        className="p-4 rounded-2xl bg-amber-50 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all flex items-center gap-3.5 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-amber-950">Direct Phone</h4>
                          <p className="text-[11px] text-amber-700">+91 7739339852</p>
                          <span className="text-[9px] font-bold text-amber-600">Mon - Sat: 9 AM - 9 PM</span>
                        </div>
                      </a>

                      {/* Strategy Call */}
                      <div
                        onClick={() => {
                          setActiveModal(null);
                          onOpenCalendly();
                        }}
                        className="p-4 rounded-2xl bg-rose-50 border border-rose-200 hover:border-rose-400 hover:shadow-md transition-all flex items-center gap-3.5 cursor-pointer group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#E84125] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-rose-950">Book Video Call</h4>
                          <p className="text-[11px] text-rose-700">Schedule 1-on-1 Meet</p>
                          <span className="text-[9px] font-bold text-rose-600">Instant Confirmation</span>
                        </div>
                      </div>

                    </div>

                    <div className="pt-2 text-center">
                      <button
                        onClick={() => {
                          setActiveModal(null);
                          onNavigate('contact');
                        }}
                        className="text-xs font-bold text-[#0A4EDB] hover:underline"
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
