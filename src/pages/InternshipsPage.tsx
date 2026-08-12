import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GraduationCap, Clock, Award, CheckCircle2, ArrowRight, Sparkles, Mail, Phone, UserCheck } from 'lucide-react';

interface InternshipsPageProps {
  onNavigate: (tab: string) => void;
  onOpenCertificateModal: () => void;
}

export const InternshipsPage: React.FC<InternshipsPageProps> = ({ onNavigate, onOpenCertificateModal }) => {
  const { internships } = useApp();
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#1A2031] via-[#0A4EDB] to-[#139EF8] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-[#38BDF8] text-xs font-bold backdrop-blur-sm">
          <GraduationCap className="w-4 h-4" />
          <span>TecVor Technologies • Student & Graduate Program</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black">
          Launch Your Career with Hands-On Engineering Experience
        </h1>
        <p className="text-xs sm:text-sm text-[#CDD2DA] max-w-2xl leading-relaxed">
          Gain real-world experience building enterprise applications alongside senior mentors at TecVor Technologies. Get paid stipends, official certificate verification, and direct PPO opportunities.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenCertificateModal}
            className="px-5 py-2.5 rounded-full bg-white text-[#0A4EDB] hover:bg-[#EEF2F7] text-xs font-black shadow-md transition-all flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Sample Certificate Preview</span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold backdrop-blur-sm transition-all flex items-center gap-2 border border-white/30"
          >
            <Mail className="w-4 h-4" />
            <span>Contact University Relations</span>
          </button>
        </div>
      </div>

      {/* NO INTERNSHIP OPENINGS AVAILABLE CARD */}
      <div className="glass-card bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-lg text-center space-y-6 max-w-3xl mx-auto">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-amber-50 border-2 border-amber-200 text-amber-500 flex items-center justify-center mx-auto shadow-sm">
          <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider">
            <span>Internship Cohort Currently Full</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Currently No Active Internship Openings
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            The active internship cohort applications are currently closed. All seats for the current quarter have been filled. The next batch registration schedule will be announced soon.
          </p>
        </div>

        {/* Notify for Next Cohort Form */}
        <div className="pt-2 border-t border-slate-100 max-w-md mx-auto space-y-3">
          <p className="text-xs font-bold text-slate-700">
            Register your email to get early-access notification for the next cohort:
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your student email..."
              value={notifyEmail}
              onChange={(e) => setNotifyEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:border-sky-500 outline-none"
            />
            <button
              onClick={() => {
                if (notifyEmail) {
                  setNotifySubmitted(true);
                  setNotifyEmail('');
                  setTimeout(() => setNotifySubmitted(false), 3500);
                }
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white text-xs font-black shadow-md hover:brightness-110 transition-all flex-shrink-0"
            >
              Get Notified
            </button>
          </div>
          {notifySubmitted && (
            <p className="text-xs font-bold text-emerald-600 animate-pulse">
              ✓ Registered! You will receive an alert before the next internship batch opens.
            </p>
          )}
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span>Official Inquiries: <a href="mailto:info@tecvor.com" className="font-bold text-sky-600 hover:underline">info@tecvor.com</a></span>
          <span>•</span>
          <span>WhatsApp Hotline: <a href="tel:+917739339852" className="font-bold text-sky-600 hover:underline">+91 7739339852</a></span>
        </div>
      </div>

      {/* Curriculum & Technology Learning Tracks (Informational Overview) */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Curriculum Overview
          </span>
          <h2 className="text-2xl font-black text-slate-900">Internship Domains & Learning Tracks</h2>
          <p className="text-xs text-slate-500">Overview of practical modules taught in TecVor engineering cohorts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {internships.map((track) => (
            <div key={track.id} className="glass-card bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-4 shadow-sm hover:border-sky-300 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#0A4EDB]/10 text-[#0A4EDB] text-[10px] font-bold">
                    {track.department}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    Cohort Closed
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900">{track.title}</h3>
                
                <div className="space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#139EF8]" />
                    <span>Duration: {track.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>Stipend: <strong className="text-[#0A4EDB]">{track.stipend}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Mentor: {track.mentor}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1">
                  <span className="text-[11px] font-bold text-slate-800 block">Core Syllabus & Modules:</span>
                  <ul className="text-[11px] text-slate-600 space-y-0.5">
                    {track.learningPath.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#139EF8]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenCertificateModal}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>View Sample Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
