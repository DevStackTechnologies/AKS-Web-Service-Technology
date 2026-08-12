import React, { useState } from 'react';
import { useApp, Application } from '../../context/AppContext';
import { AksLogo } from '../../components/common/AksLogo';
import { 
  User, Upload, FileText, CheckCircle2, Award, Clock, Sparkles, 
  Download, Briefcase, ChevronRight, AlertCircle, FileCheck, RefreshCw, Bookmark
} from 'lucide-react';

interface CandidateDashboardProps {
  onOpenOfferModal: (app: Application) => void;
  onOpenCertificateModal: () => void;
  onNavigate: (tab: string) => void;
}

export const CandidateDashboard: React.FC<CandidateDashboardProps> = ({
  onOpenOfferModal,
  onOpenCertificateModal,
  onNavigate
}) => {
  const { candidateProfile, applications, parseResumeSimulated, updateProfile, refreshData } = useApp();
  const [resumeText, setResumeText] = useState(candidateProfile.resumeText || '');
  const [parsingActive, setParsingActive] = useState(false);
  const [parsedScore, setParsedScore] = useState<number | null>(candidateProfile.atsScore || 92);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleSimulatedUpload = async () => {
    setParsingActive(true);
    const score = await parseResumeSimulated(resumeText);
    setParsedScore(score);
    setParsingActive(false);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshData();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Official Candidate Portal Header with Brand Logo */}
      <div className="glass-card bg-white p-6 rounded-3xl border border-[#CDD2DA] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
        <div className="flex items-center gap-4">
          <AksLogo height={56} />
          <div className="h-10 w-[1px] bg-[#CDD2DA] hidden sm:block"></div>
          <div>
            <span className="text-[10px] font-extrabold tracking-widest text-[#0066FF] uppercase block">
              OFFICIAL CANDIDATE CAREER PORTAL
            </span>
            <h1 className="text-xl font-bold text-[#1A2031]">
              Candidate Workspace & Application Tracker
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="p-2 rounded-xl bg-[#EEF2F7] hover:bg-[#0066FF] hover:text-white text-[#0066FF] transition-all"
            title="Refresh Real Applications"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() => onNavigate('positions')}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
          >
            <span>Explore Open Positions</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Candidate Banner Card */}
      <div className="bg-gradient-to-r from-[#1A2031] via-[#0A4EDB] to-[#139EF8] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#38BDF8] text-xs font-bold">
            <User className="w-3.5 h-3.5" />
            <span>Active Candidate Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            Welcome, {candidateProfile.name}!
          </h2>
          <p className="text-xs text-[#CDD2DA] max-w-xl leading-relaxed">
            Manage your real-world job applications, analyze your ATS resume score, and download official offer letters with verified TecVor Technologies branding.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[160px]">
          <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider block">Live Applications</span>
          <span className="text-3xl font-black text-white">{applications.length}</span>
        </div>
      </div>

      {/* Main Grid: Profile & Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Profile & Resume ATS Analyzer */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Profile Card */}
          <div className="glass-card bg-white p-6 rounded-2xl border border-[#CDD2DA] space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#CDD2DA]/50 pb-3">
              <h3 className="text-sm font-bold text-[#1A2031]">My Professional Details</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E]">
                ● Verified Candidate
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#EEF2F7] pb-1.5">
                <span className="text-[#8590A6]">Full Name:</span>
                <span className="font-bold text-[#1A2031]">{candidateProfile.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#EEF2F7] pb-1.5">
                <span className="text-[#8590A6]">Email Address:</span>
                <span className="font-bold text-[#1A2031]">{candidateProfile.email}</span>
              </div>
              <div className="flex justify-between border-b border-[#EEF2F7] pb-1.5">
                <span className="text-[#8590A6]">Experience:</span>
                <span className="font-bold text-[#1A2031]">{candidateProfile.experienceYears} Years</span>
              </div>
              <div className="flex justify-between border-b border-[#EEF2F7] pb-1.5">
                <span className="text-[#8590A6]">Education:</span>
                <span className="font-bold text-[#1A2031]">{candidateProfile.education}</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold text-[#8590A6] uppercase tracking-wider block mb-1.5">Verified Technical Skills</span>
              <div className="flex flex-wrap gap-1.5">
                {candidateProfile.skills.map((skill, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#EEF2F7] text-[#0A4EDB] text-[11px] font-bold border border-[#CDD2DA]/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI ATS Resume Parser & Score */}
          <div className="glass-card bg-white p-6 rounded-2xl border border-[#CDD2DA] space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0A4EDB]" />
                <h3 className="text-sm font-bold text-[#1A2031]">AI ATS Resume Score</h3>
              </div>
              {parsedScore && (
                <span className="text-xs font-black text-[#0A4EDB] bg-[#0A4EDB]/10 px-2.5 py-1 rounded-full border border-[#0A4EDB]/20">
                  {parsedScore}% Match
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#8590A6]">
                Upload or Paste Resume Content for Instant Parsing:
              </label>
              <textarea
                rows={4}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume content, skills, or projects here to test real AI ATS compatibility..."
                className="w-full p-3 text-xs glass-input rounded-xl focus:outline-none"
              />
            </div>

            <button
              onClick={handleSimulatedUpload}
              disabled={parsingActive}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              {parsingActive ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Analyzing Resume Keywords...</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>Run Real AI ATS Analyzer</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right Col: Applications Tracker & Offer Downloads */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="glass-card bg-white p-6 rounded-2xl border border-[#CDD2DA] space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#CDD2DA]/50 pb-4">
              <div>
                <h3 className="text-base font-bold text-[#1A2031]">My Real Job Applications</h3>
                <p className="text-[11px] text-[#8590A6]">Live application status saved in cloud MongoDB database</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EEF2F7] text-[#0A4EDB]">
                Total: {applications.length}
              </span>
            </div>

            <div className="space-y-4">
              {applications.length === 0 ? (
                <div className="text-center py-8 space-y-3 bg-[#EEF2F7]/50 rounded-2xl border border-dashed border-[#CDD2DA]">
                  <Briefcase className="w-8 h-8 text-[#8590A6] mx-auto" />
                  <p className="text-xs font-semibold text-[#8590A6]">No active job applications found in database.</p>
                  <button
                    onClick={() => onNavigate('positions')}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0A4EDB] hover:bg-[#139EF8] transition-colors"
                  >
                    Apply Now for Open Requisitions
                  </button>
                </div>
              ) : (
                applications.map((app) => (
                  <div key={app.id || app._id} className="p-5 rounded-2xl bg-[#EEF2F7]/60 border border-[#CDD2DA]/60 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-[#1A2031]">{app.jobTitle}</h4>
                        <p className="text-[11px] text-[#8590A6]">Applied Date: {app.appliedDate}</p>
                      </div>

                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        app.status === 'Offer Letter'
                          ? 'bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30'
                          : app.status === 'Interview'
                          ? 'bg-[#139EF8]/15 text-[#0A4EDB] border border-[#139EF8]/30'
                          : 'bg-[#0A4EDB]/10 text-[#0A4EDB] border border-[#0A4EDB]/20'
                      }`}>
                        {app.status}
                      </span>
                    </div>

                    {/* Progress Pipeline */}
                    <div className="grid grid-cols-4 gap-1 pt-2">
                      {['Applied', 'ATS Screening', 'Interview', 'Offer Letter'].map((step, idx) => {
                        const isDone = ['Applied', 'ATS Screening', 'Interview', 'Offer Letter'].indexOf(app.status) >= idx;
                        return (
                          <div key={idx} className="text-center space-y-1">
                            <div className={`h-1.5 rounded-full ${isDone ? 'bg-gradient-to-r from-[#0A4EDB] to-[#139EF8]' : 'bg-[#CDD2DA]'}`}></div>
                            <span className={`text-[9px] block ${isDone ? 'font-bold text-[#0A4EDB]' : 'text-[#8590A6]'}`}>
                              {step}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Offer Letter Download Box */}
                    {app.status === 'Offer Letter' && (
                      <div className="pt-2 flex items-center justify-between bg-white p-3.5 rounded-xl border border-[#22C55E]/40 shadow-sm">
                        <div className="flex items-center gap-2.5">
                          <FileCheck className="w-5 h-5 text-[#22C55E]" />
                          <div>
                            <span className="text-xs font-bold text-[#1A2031] block">Official Offer Issued!</span>
                            <span className="text-[10px] text-[#8590A6]">CTC: {app.offerDetails?.ctc || '₹14,50,000 PA'}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onOpenOfferModal(app)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#22C55E] hover:bg-emerald-600 shadow-sm transition-all flex items-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>View & Print Offer</span>
                        </button>
                      </div>
                    )}

                  </div>
                ))
              )}
            </div>
          </div>

          {/* Certificate Center */}
          <div className="glass-card bg-white p-6 rounded-2xl border border-[#CDD2DA] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-[#0A4EDB]" />
              <div>
                <h4 className="text-xs font-bold text-[#1A2031]">Internship Certificate Center</h4>
                <p className="text-[11px] text-[#8590A6]">Preview or print official TecVor completion certificates.</p>
              </div>
            </div>

            <button
              onClick={onOpenCertificateModal}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#0A4EDB] bg-[#EEF2F7] hover:bg-[#0A4EDB] hover:text-white transition-colors"
            >
              Preview Certificate
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
