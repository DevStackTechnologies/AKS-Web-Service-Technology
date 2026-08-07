import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AksLogo } from '../common/AksLogo';
import { useApp } from '../../context/AppContext';
import { Menu, X, Sparkles, UserCheck, LogOut, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenAuth }) => {
  const { role, setRole } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'careers', label: 'Careers' },
    { id: 'internships', label: 'Internships' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Contact Bar with Official Brand Credentials */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-300">Enterprise Engineering & AI Support</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 font-semibold">
            <a href="mailto:ownsources001@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-[#0A4EDB]" />
              <span>ownsources001@gmail.com</span>
            </a>
            <a href="tel:+917739339852" className="flex items-center gap-1.5 text-sky-300 hover:text-white font-bold transition-colors">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 7739339852</span>
            </a>
          </div>
        </div>
      </div>

      <div className="glass-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 py-2.5">
            
            {/* Logo */}
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab('home')}
              className="flex items-center text-left focus:outline-none py-1 group"
            >
              <AksLogo height={62} />
            </motion.button>

            {/* Public Navigation Links with LayoutId Indicator */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <motion.button
                    key={link.id}
                    onClick={() => setActiveTab(link.id)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative px-3.5 py-2 rounded-xl text-xs font-bold transition-colors duration-200 flex items-center gap-1 ${
                      isActive ? 'text-white font-extrabold' : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50/70'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl shadow-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Right Action Controls */}
            <div className="hidden sm:flex items-center space-x-3">
              
              {/* Authenticated Candidate Session / Guest Login Button */}
              {role === 'guest' ? (
                <motion.button
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenAuth}
                  className="px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-lg transition-all shadow-md flex items-center gap-1.5"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Candidate Portal</span>
                </motion.button>
              ) : (
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('candidate-dashboard')}
                    className="px-4 py-2 rounded-full text-xs font-black text-white bg-gradient-to-r from-sky-500 to-blue-600 flex items-center gap-1.5 shadow-md"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Candidate Workspace</span>
                  </motion.button>

                  <button
                    onClick={() => {
                      setRole('guest');
                      localStorage.removeItem('aks_token');
                      setActiveTab('home');
                    }}
                    title="Logout Session"
                    className="p-2 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Drawer Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-sky-50"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-1.5 py-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => { setActiveTab(link.id); setMobileMenuOpen(false); }}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left ${
                    activeTab === link.id ? 'bg-sky-600 text-white font-extrabold shadow-sm' : 'text-slate-700 hover:bg-sky-50'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5" /> Candidate Portal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
