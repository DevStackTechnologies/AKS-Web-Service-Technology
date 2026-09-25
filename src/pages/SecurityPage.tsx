import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, Server, Key, AlertCircle, 
  CheckCircle2, RefreshCw, Eye, ArrowLeft, Mail, 
  Cpu, FileCode, HardDrive, Terminal
} from 'lucide-react';

interface SecurityPageProps {
  onNavigate?: (tab: string) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate }) => {
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#E84125]" />
            <span>Enterprise Cyber Defense</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#EA580C] to-[#E84125]">Compliance</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Zero-Trust Architectural Principles • Bank-Grade Cryptography • Proactive Threat Mitigation
          </p>
        </motion.div>

        {/* Security Metric Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">TLS 1.3 / AES-256</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Every data byte in transit and at rest is secured with modern authenticated encryption.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#EA580C] flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">VPC Isolation</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Multi-tenant separation, private subnets, and strict perimeter firewall gateways.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <HardDrive className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Daily Encrypted Backups</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Automated multi-region snapshots with sub-hour Point-in-Time Recovery (PITR).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Role-Based Access</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Granular least-privilege IAM, multi-factor authentication (MFA), and audit log tracking.
            </p>
          </div>
        </div>

        {/* Security Deep Dive Card */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">1</span>
              <span>Our Security Philosophy: Zero Trust by Default</span>
            </h2>
            <p>
              At TecVor Technologies, security is not an afterthought or an add-on checklist—it is foundational to our architectural design. We operate under the <strong>Zero-Trust model</strong>: <em>&ldquo;Never trust, always verify.&rdquo;</em> Every incoming request, database query, and API call must authenticate, authorize, and encrypt before execution.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">2</span>
              <span>Secure Software Development Life Cycle (SSDLC)</span>
            </h2>
            <p>We enforce rigorous security gates throughout every phase of our agile development pipeline:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Automated SAST & DAST</span>
                </h4>
                <p className="text-[11px] text-slate-600">Continuous static and dynamic code analysis in CI/CD pipelines to catch vulnerabilities before merging.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>OWASP Top 10 Hardening</span>
                </h4>
                <p className="text-[11px] text-slate-600">Built-in protections against SQL/NoSQL injection, XSS, CSRF, broken access control, and SSRF attacks.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dependency Auditing</span>
                </h4>
                <p className="text-[11px] text-slate-600">Automated scanning of npm and container registries for known CVEs with automated patch alerting.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-purple-600" />
                  <span>Secrets Management</span>
                </h4>
                <p className="text-[11px] text-slate-600">Zero hardcoded API keys or database tokens; all secrets are managed via cloud KMS and environment injection.</p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">3</span>
              <span>Cloud Infrastructure & Network Defense</span>
            </h2>
            <ul className="space-y-1.5 pl-4 list-disc marker:text-[#E84125]">
              <li><strong>Distributed DDoS Mitigation:</strong> Cloudflare edge routing with Anycast DNS and Layer 7 behavioral rate-limiting.</li>
              <li><strong>Secure HTTP Headers:</strong> Strict Transport Security (HSTS), Content-Security-Policy (CSP), and X-Frame-Options configured across all public web services.</li>
              <li><strong>Database Isolation:</strong> Production databases (MongoDB Atlas, PostgreSQL) reside in private Virtual Private Clouds (VPCs) with IP whitelisting and non-public access.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">4</span>
              <span>Disaster Recovery & High Availability</span>
            </h2>
            <p>
              We engineer enterprise client systems with automated failover clusters, multi-availability zone deployments, and continuous snapshotting to provide a target <strong>99.99% service availability</strong>. In the event of catastrophic infrastructure failure, our Disaster Recovery procedures guarantee a Recovery Time Objective (RTO) of under 2 hours.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 - Vulnerability Disclosure */}
          <section className="space-y-3 p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-orange-50/50 border border-sky-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#0284C7]" />
              <span>Responsible Vulnerability Disclosure Program</span>
            </h2>
            <p className="text-xs text-slate-600">
              We welcome independent security researchers to audit our public web assets. If you believe you have discovered a potential security vulnerability, please submit a responsible disclosure report to our cybersecurity response team:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-900 pt-1">
              <a href="mailto:tecvortechnology@gmail.com" className="text-[#0284C7] hover:underline flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>tecvortechnology@gmail.com</span>
              </a>
              <span className="text-slate-500 text-[11px]">(Target Response Time: Under 24 Hours)</span>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default SecurityPage;
