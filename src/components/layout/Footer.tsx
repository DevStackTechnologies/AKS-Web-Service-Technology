import React from 'react';
import { AksLogo } from '../common/AksLogo';
import { Mail, Phone, Linkedin, Twitter, Github, Instagram, ArrowRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#04091E] text-white pt-16 pb-12 border-t border-[#0E1A3D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#0E1A3D]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block">
              <AksLogo variant="dark" height={50} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              TecVor Technologies is a modern enterprise software solutions & talent hub. Building scalable digital web apps, cloud architectures, and empowering high-impact technology careers globally.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-[#0C1738] flex items-center justify-center text-sky-400 hover:bg-sky-600 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0C1738] flex items-center justify-center text-sky-400 hover:bg-sky-600 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0C1738] flex items-center justify-center text-sky-400 hover:bg-sky-600 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0C1738] flex items-center justify-center text-sky-400 hover:bg-sky-600 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4">
              Technology Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-sky-400 transition-colors">
                  Web App Development
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-sky-400 transition-colors">
                  Mobile App Development
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-sky-400 transition-colors">
                  Cloud Infrastructure & DevOps
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-sky-400 transition-colors">
                  AI & Automation Solutions
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-sky-400 transition-colors">
                  UI/UX Design Systems
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-sky-400 transition-colors">
                  IT Consulting & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Careers & Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4">
              Careers & Showcase
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('positions')} className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <span>Open Positions</span>
                  <span className="bg-sky-500/20 text-sky-400 text-[10px] px-1.5 py-0.5 rounded font-semibold">Hiring</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('internships')} className="hover:text-sky-400 transition-colors">
                  Internship Program 2026
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('portfolio')} className="hover:text-sky-400 transition-colors">
                  Enterprise Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('candidate-dashboard')} className="hover:text-sky-400 transition-colors">
                  Candidate Portal
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('blogs')} className="hover:text-sky-400 transition-colors">
                  Engineering Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4">
              Official Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:ownsources001@gmail.com" className="hover:text-white">ownsources001@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+917739339852" className="hover:text-white font-bold">+91 7739339852</a>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="w-full py-2 px-3 rounded-xl bg-[#0C1738] hover:bg-sky-600 text-white font-semibold flex items-center justify-center gap-1.5 transition-all text-xs border border-[#0E1A3D]"
                >
                  <span>Connect with Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© 2026 TecVor Technologies. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
