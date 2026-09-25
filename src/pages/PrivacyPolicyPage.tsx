import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, Eye, FileText, UserCheck, 
  Database, RefreshCw, Mail, Phone, ArrowLeft, 
  CheckCircle2, Sparkles, AlertCircle
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate?: (tab: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-[#FFF8F5] text-slate-900 space-y-12">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Top Breadcrumb Navigation */}
        {onNavigate && (
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0284C7] transition-colors py-1 px-3 rounded-lg bg-white/60 border border-slate-200/60 shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        )}

        {/* Header Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-amber-500/10 to-[#E84125]/10 border border-[#E84125]/30 text-[#E84125] text-xs font-black uppercase tracking-widest shadow-sm">
            <Lock className="w-3.5 h-3.5 text-[#E84125]" />
            <span>Legal & Data Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#EA580C] to-[#E84125]">Policy</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Effective Date: January 1, 2026 • Last Reviewed: August 2026 • Version 2.4
          </p>
        </motion.div>

        {/* Quick Highlights Summary Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Zero Data Selling</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                We never monetize, rent, or sell your proprietary code, customer lists, or personal details to data brokers.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">End-to-End Encryption</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                All data in transit is encrypted using TLS 1.3 and at rest with military-grade AES-256 standards.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Full User Rights</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                Request export, correction, or permanent deletion of your data at any time with prompt 48-hour fulfillment.
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">1</span>
              <span>Introduction & Scope</span>
            </h2>
            <p>
              TecVor Technologies (&ldquo;TecVor,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy, confidentiality, and security of individuals who visit our website, use our platforms, or engage our enterprise software, cloud, and AI engineering services.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and safeguard your personal data when you interact with our digital web properties, client dashboards, inquiry forms, and communication channels.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">2</span>
              <span>Information We Collect</span>
            </h2>
            <p>We collect information only to the extent necessary to deliver world-class digital engineering solutions:</p>
            <ul className="space-y-2 pl-4 list-disc marker:text-[#E84125]">
              <li>
                <strong>Directly Provided Information:</strong> Full name, professional email address, mobile phone number, company organization, project specifications, and communication notes submitted via contact forms, strategy scheduling tools, or candidate portal applications.
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> Anonymized IP addresses, browser fingerprint metadata, device hardware specs, operating systems, session duration, and page interaction metrics to diagnose technical issues and optimize page load performance.
              </li>
              <li>
                <strong>Project Assets & Credentials:</strong> Any source code repositories, API endpoints, wireframes, or credentials shared under mutual Non-Disclosure Agreements (NDAs) are treated as strictly confidential enterprise assets.
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">3</span>
              <span>How We Use Your Information</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="font-bold text-slate-900 text-xs mb-1">Service Execution</h4>
                <p className="text-[11px] text-slate-600">Architecting, coding, testing, and deploying custom digital platforms per client specifications.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="font-bold text-slate-900 text-xs mb-1">Customer & Technical Support</h4>
                <p className="text-[11px] text-slate-600">Responding to requests for proposals (RFPs), project status inquiries, and urgent 24/7 technical incident tickets.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="font-bold text-slate-900 text-xs mb-1">Talent Evaluation</h4>
                <p className="text-[11px] text-slate-600">Processing employment applications, generating verified offer letters, and conducting technical skill assessments.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="font-bold text-slate-900 text-xs mb-1">Platform Security</h4>
                <p className="text-[11px] text-slate-600">Detecting brute-force attacks, mitigating DDoS attempts, and maintaining strict audit logs across all API routes.</p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">4</span>
              <span>Cookies & Tracking Policy</span>
            </h2>
            <p>
              Our website uses strictly essential session cookies and local storage tokens (e.g., authentication JWTs and color palette preferences) necessary for the functionality of our candidate portal and responsive UI. We do not use third-party cross-site advertising trackers or predatory spyware cookies.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">5</span>
              <span>Data Protection & Retention Rights</span>
            </h2>
            <p>
              Under global data privacy frameworks (including GDPR, CCPA, and India's Digital Personal Data Protection Act), you maintain the right to:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc marker:text-[#0284C7]">
              <li>Access and receive a portable copy of your stored records.</li>
              <li>Request immediate rectification of inaccurate or outdated information.</li>
              <li>Request permanent deletion of your data (&ldquo;Right to be Forgotten&rdquo;).</li>
              <li>Withdraw consent for marketing updates and newsletters at any moment.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 - Contact */}
          <section className="space-y-3 p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-orange-50/50 border border-sky-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0284C7]" />
              <span>Contact Data Protection Officer (DPO)</span>
            </h2>
            <p className="text-xs text-slate-600">
              For any questions, privacy audits, or data deletion requests, please contact our legal and compliance desk:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-900 pt-1">
              <a href="mailto:tecvortechnology@gmail.com" className="text-[#0284C7] hover:underline flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>tecvortechnology@gmail.com</span>
              </a>
              <a href="tel:+918580051079" className="text-slate-700 hover:text-slate-900 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>+91 8580051079</span>
              </a>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
