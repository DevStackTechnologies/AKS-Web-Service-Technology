import React from 'react';
import { TecVorLogo } from '../common/TecVorLogo';
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
              <TecVorLogo variant="dark" height={50} />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              TecVor Technologies is a modern enterprise software solutions & talent hub. Building scalable digital web apps, cloud architectures, and empowering high-impact technology careers globally.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/in/tecvor-technology-bb2bb9432" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TecVor Technologies LinkedIn Profile" 
                className="w-10 h-10 rounded-full bg-[#0C1738] flex items-center justify-center text-sky-400 hover:bg-[#0A66C2] hover:text-white transition-all transform hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/tecvor_technology?xtok=ZDRsa2E5d2VjaDNh" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TecVor Technologies Instagram Profile" 
                className="w-10 h-10 rounded-full bg-[#0C1738] flex items-center justify-center text-sky-400 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white transition-all transform hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/tecvortech" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TecVor Technologies Twitter Profile" 
                className="w-10 h-10 rounded-full bg-[#0C1738] flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all transform hover:scale-105"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/tecvor-technologies" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TecVor Technologies GitHub Organization" 
                className="w-10 h-10 rounded-full bg-[#0C1738] flex items-center justify-center text-sky-400 hover:bg-slate-700 hover:text-white transition-all transform hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4">
              Technology Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => setActiveTab('services')} aria-label="Web App Development Services" className="hover:text-sky-400 transition-colors">
                  Web App Development
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} aria-label="Mobile App Development Services" className="hover:text-sky-400 transition-colors">
                  Mobile App Development
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} aria-label="Cloud Infrastructure Services" className="hover:text-sky-400 transition-colors">
                  Cloud Infrastructure & DevOps
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} aria-label="AI and Automation Solutions" className="hover:text-sky-400 transition-colors">
                  AI & Automation Solutions
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} aria-label="UI UX Design Systems" className="hover:text-sky-400 transition-colors">
                  UI/UX Design Systems
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} aria-label="IT Consulting and Support" className="hover:text-sky-400 transition-colors">
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
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => setActiveTab('positions')} aria-label="Open Positions" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <span>Open Positions</span>
                  <span className="bg-sky-500/20 text-sky-400 text-[10px] px-1.5 py-0.5 rounded font-semibold">Hiring</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('internships')} aria-label="Internship Program 2026" className="hover:text-sky-400 transition-colors">
                  Internship Program 2026
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('portfolio')} aria-label="Enterprise Portfolio" className="hover:text-sky-400 transition-colors">
                  Enterprise Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('candidate-dashboard')} aria-label="Candidate Portal" className="hover:text-sky-400 transition-colors">
                  Candidate Portal
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('blogs')} aria-label="Engineering Blog" className="hover:text-sky-400 transition-colors">
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
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:tecvortechnology@gmail.com" aria-label="Send Email to TecVor" className="hover:text-white">tecvortechnology@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+918580051079" aria-label="Call TecVor Support" className="hover:text-white font-bold">+91 8580051079</a>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => setActiveTab('contact')}
                  aria-label="Connect with Engineering Team"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#0C1738] hover:bg-sky-600 text-white font-semibold flex items-center justify-center gap-1.5 transition-all text-xs border border-[#0E1A3D] min-h-[44px]"
                >
                  <span>Connect with Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© 2026 TecVor Technologies. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button 
              onClick={() => setActiveTab('privacy-policy')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveTab('terms')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setActiveTab('security')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Security
            </button>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
