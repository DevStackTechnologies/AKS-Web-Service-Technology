import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GraduationCap, Clock, Award, CheckCircle2, ArrowRight, UserCheck, Sparkles } from 'lucide-react';

interface InternshipsPageProps {
  onNavigate: (tab: string) => void;
  onOpenCertificateModal: () => void;
}

export const InternshipsPage: React.FC<InternshipsPageProps> = ({ onNavigate, onOpenCertificateModal }) => {
  const { internships, applyForJob } = useApp();
  const [appliedIndex, setAppliedIndex] = useState<number | null>(null);

  const handleApplyIntern = (idx: number, title: string) => {
    applyForJob(`intern-${idx}`, {
      jobTitle: `${title} (Internship)`,
      candidateName: 'Student Candidate',
      experienceYears: 0
    });
    setAppliedIndex(idx);
    setTimeout(() => {
      onNavigate('candidate-dashboard');
    }, 1200);
  };

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#1A2031] via-[#0A4EDB] to-[#139EF8] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-[#38BDF8] text-xs font-bold">
          <GraduationCap className="w-4 h-4" />
          <span>AKS Tech Internship Program 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black">
          Launch Your Career with Hands-On Engineering Experience
        </h1>
        <p className="text-xs sm:text-sm text-[#CDD2DA] max-w-2xl leading-relaxed">
          Gain real-world experience building enterprise applications alongside senior mentors at AKS Web Service Technologies. Get paid stipends, official certificate verification, and direct PPO opportunities.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenCertificateModal}
            className="px-5 py-2.5 rounded-full bg-white text-[#0A4EDB] hover:bg-[#EEF2F7] text-xs font-bold shadow-md transition-all flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Sample Certificate Preview</span>
          </button>
        </div>
      </div>

      {/* Internship Tracks Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#1A2031]">Available Internship Tracks</h2>
          <p className="text-xs text-[#8590A6]">Select a track to apply for the upcoming cohort</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {internships.map((track, idx) => (
            <div key={track.id} className="glass-card bg-white p-6 rounded-2xl border border-[#CDD2DA] flex flex-col justify-between space-y-4 hover:border-[#139EF8] transition-all">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-full bg-[#0A4EDB]/10 text-[#0A4EDB] text-[10px] font-bold">
                  {track.department}
                </span>
                <h3 className="text-base font-bold text-[#1A2031]">{track.title}</h3>
                
                <div className="space-y-1.5 text-xs text-[#8590A6]">
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

                <div className="pt-2 border-t border-[#CDD2DA]/50 space-y-1">
                  <span className="text-[11px] font-bold text-[#1A2031] block">Learning Path:</span>
                  <ul className="text-[11px] text-[#8590A6] space-y-0.5">
                    {track.learningPath.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#139EF8]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleApplyIntern(idx, track.title)}
                disabled={appliedIndex === idx}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                {appliedIndex === idx ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>Application Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Apply for Internship</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
