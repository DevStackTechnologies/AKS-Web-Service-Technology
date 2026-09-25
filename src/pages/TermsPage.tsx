import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, CheckCircle2, ShieldCheck, Scale, Award, 
  HelpCircle, ArrowLeft, Mail, Phone, Clock, AlertTriangle
} from 'lucide-react';

interface TermsPageProps {
  onNavigate?: (tab: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
            <Scale className="w-3.5 h-3.5 text-[#E84125]" />
            <span>Master Services Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#EA580C] to-[#E84125]">Service</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Effective Date: January 1, 2026 • Last Updated: August 2026 • TecVor Technologies Legal Framework
          </p>
        </motion.div>

        {/* 3 Core Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">100% Code Ownership</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                Upon final invoice clearance, all custom source code, documentation, and digital assets transfer entirely to the client.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Strict Mutual NDAs</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                Your proprietary business logic, patents, algorithms, and trade secrets are protected with legally binding non-disclosure clauses.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Guaranteed SLAs</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                Clearly defined sprint milestones, delivery timelines, and enterprise 99.99% uptime availability commitments.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Content Card */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">1</span>
              <span>Acceptance of Agreement</span>
            </h2>
            <p>
              By accessing the digital services, platforms, client portals, or initiating a commercial project with TecVor Technologies (&ldquo;TecVor,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;), you (&ldquo;Client,&rdquo; &ldquo;User,&rdquo; or &ldquo;You&rdquo;) agree to be legally bound by these Terms of Service, along with our Privacy Policy and any project-specific Statement of Work (SOW) executed between the parties.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">2</span>
              <span>Engineering Deliverables & Scope</span>
            </h2>
            <p>
              TecVor provides custom digital engineering, enterprise web and mobile development, cloud infrastructure setup, UI/UX design architecture, and AI model integration.
            </p>
            <ul className="space-y-1.5 pl-4 list-disc marker:text-[#E84125]">
              <li>Each project scope is formally defined in a written Statement of Work (SOW) specifying milestone deliverables, sprint schedules, and acceptance criteria.</li>
              <li>Any requests outside the agreed scope will be evaluated under our standard change request (CR) protocol with transparent cost and timeline estimates.</li>
              <li>TecVor guarantees code built to modern production standards, utilizing type-safe, performant, and secure architectures.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">3</span>
              <span>Intellectual Property & Ownership Rights</span>
            </h2>
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
              <p className="font-semibold text-slate-900">
                &ldquo;You Own What We Build for You.&rdquo;
              </p>
              <p className="text-xs text-slate-600">
                Upon 100% full financial settlement of agreed invoices, all custom written code, application architectures, database schemas, and digital visual assets developed specifically for the client transfer entirely to the client with full commercial ownership rights.
              </p>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              TecVor retains proprietary rights only to pre-existing internal developer toolkits, generic helper libraries, and open-source packages governed by their respective public licenses (e.g., MIT, Apache 2.0).
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">4</span>
              <span>Payment Terms & Milestone Settlement</span>
            </h2>
            <ul className="space-y-1.5 pl-4 list-disc marker:text-[#0284C7]">
              <li>Standard commercial projects follow milestone-based billing (e.g., Initial Architecture Sprint, Core Feature Beta, and Final Production Launch).</li>
              <li>Invoices are due within 15 calendar days from issuance unless otherwise mutually agreed in writing.</li>
              <li>Late payments may be subject to a nominal statutory interest charge of 1.5% per month on overdue balances.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">5</span>
              <span>Warranty, Bug Fixes & Post-Launch Support</span>
            </h2>
            <p>
              TecVor provides an inclusive <strong>30-day post-launch warranty period</strong> for all custom developed platforms. During this window, any functional discrepancies, bugs, or rendering errors that deviate from agreed specifications will be remediated promptly at zero additional charge.
            </p>
            <p>
              Extended SLA agreements, 24/7 server monitoring, and monthly feature iteration retainers are available under separate maintenance contracts.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">6</span>
              <span>Limitation of Liability</span>
            </h2>
            <p>
              To the maximum extent permitted under applicable law, TecVor Technologies shall not be held liable for indirect, incidental, punitive, or consequential damages resulting from third-party hosting outages (e.g., AWS, Cloudflare, Vercel), client-directed security credential misconfigurations, or force majeure events.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">7</span>
              <span>Governing Law & Legal Jurisdiction</span>
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the substantive laws of India. The courts situated in Ranchi, Jharkhand, India shall have exclusive jurisdiction over any legal proceedings.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Contact Section */}
          <section className="space-y-3 p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-orange-50/50 border border-sky-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0284C7]" />
              <span>Questions Regarding Terms?</span>
            </h2>
            <p className="text-xs text-slate-600">
              For commercial contract discussions, customized enterprise NDAs, or licensing questions, connect with our executive team:
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

export default TermsPage;
