import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp, Job } from '../context/AppContext';
import { 
  Search, MapPin, Clock, Briefcase, Bookmark, ArrowRight, CheckCircle2, X, 
  Rocket, Users, GraduationCap, Heart, Award, Globe, Zap, ShieldCheck, 
  Sparkles, Code2, Cpu, Laptop, Smartphone, Server, Database, ChevronDown, 
  Mail, Phone, FileText, Upload, BookOpen, Layers, HelpCircle, MessageSquare
} from 'lucide-react';

interface CareersPageProps {
  initialJobId?: string;
  onOpenAuth: () => void;
  onNavigate: (tab: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ initialJobId, onOpenAuth, onNavigate }) => {
  const { jobs, savedJobIds, toggleSaveJob, applyForJob, candidateProfile } = useApp();
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');
  const [selectedJob, setSelectedJob] = useState<Job | null>(
    initialJobId ? jobs.find(j => j.id === initialJobId) || null : null
  );
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [talentEmail, setTalentEmail] = useState('');
  const [talentSubmitted, setTalentSubmitted] = useState(false);

  const filtered = jobs.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.description.toLowerCase().includes(search.toLowerCase());
    const matchDept = department === 'All' || j.department === department;
    return matchSearch && matchDept;
  });

  const handleApply = (job: Job) => {
    applyForJob(job.id, {
      candidateName: candidateProfile.name || 'Candidate',
      email: candidateProfile.email || 'candidate@example.com',
      jobTitle: job.title
    });
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
      onNavigate('candidate-dashboard');
    }, 1500);
  };

  const whyWorkCards = [
    { title: 'Career Growth', desc: 'Accelerated promotion tracks based on merit and impact.', icon: Rocket, color: 'text-sky-500 bg-sky-50' },
    { title: 'Continuous Learning', desc: 'Paid certifications, internal workshops, and learning stipends.', icon: GraduationCap, color: 'text-indigo-500 bg-indigo-50' },
    { title: 'Global Projects', desc: 'Work on high-scale enterprise applications for Fortune 500 clients.', icon: Globe, color: 'text-emerald-500 bg-emerald-50' },
    { title: 'Remote & Hybrid Work', desc: 'Flexible work choices with high autonomy and work-life balance.', icon: Laptop, color: 'text-purple-500 bg-purple-50' },
    { title: 'Competitive Compensation', desc: 'Top-of-market salaries, performance bonuses, and ESOP options.', icon: Award, color: 'text-amber-500 bg-amber-50' },
    { title: 'Collaborative Culture', desc: 'Zero hierarchy, psychological safety, and peer mentorship.', icon: Users, color: 'text-rose-500 bg-rose-50' },
    { title: 'AI & Emerging Tech', desc: 'Hands-on experience with OpenAI LLMs, RAG pipelines, and cloud infra.', icon: Cpu, color: 'text-blue-500 bg-blue-50' },
    { title: 'Recognition & Rewards', desc: 'Quarterly excellence awards, spot bonuses, and team retreats.', icon: StarIcon, color: 'text-teal-500 bg-teal-50' }
  ];

  const teams = [
    { title: 'Software Engineering', desc: 'Build scalable web applications, microservices, and enterprise engines.', icon: Code2, count: '12 Positions' },
    { title: 'UI/UX Design', desc: 'Craft luxury glassmorphic interfaces and intuitive user flows.', icon: Layers, count: '4 Positions' },
    { title: 'AI & Machine Learning', desc: 'Develop autonomous LLM agents and predictive intelligence models.', icon: Cpu, count: '6 Positions' },
    { title: 'Mobile Development', desc: 'Cross-platform iOS and Android apps with 60fps Flutter performance.', icon: Smartphone, count: '5 Positions' },
    { title: 'DevOps & Cloud', desc: 'AWS/GCP multi-cloud clusters, Docker, and CI/CD pipelines.', icon: Server, count: '3 Positions' },
    { title: 'Digital Marketing', desc: 'Growth marketing, brand positioning, and SEO data analytics.', icon: Zap, count: '2 Positions' },
    { title: 'HR & Talent Acquisition', desc: 'Discover, nurture, and onboard world-class technology talent.', icon: Users, count: '2 Positions' },
    { title: 'Sales & Business Development', desc: 'Expand global client partnerships across US, UK, and APAC regions.', icon: Globe, count: '4 Positions' }
  ];

  const hiringJourney = [
    { step: '01', title: 'Online Application', desc: 'Submit your resume or LinkedIn profile via our portal.' },
    { step: '02', title: 'Resume Review', desc: 'Our talent team evaluates your skills & project portfolio.' },
    { step: '03', title: 'Technical Assessment', desc: 'Practical coding challenge or system design scenario.' },
    { step: '04', title: 'HR Discussion', desc: 'Culture fit alignment, career expectations, and benefits.' },
    { step: '05', title: 'Technical Interview', desc: 'Deep dive into architecture, code quality, and problem solving.' },
    { step: '06', title: 'Manager Discussion', desc: 'Project allocation, team vision, and role orientation.' },
    { step: '07', title: 'Offer Letter', desc: 'Formal offer with competitive compensation package.' },
    { step: '08', title: 'Background Verification', desc: 'Standard credential and documentation verification.' },
    { step: '09', title: 'Welcome to AKS', desc: 'Seamless onboarding and welcome kit delivery!' }
  ];

  const employeeBenefits = [
    { title: 'Health Insurance', desc: 'Comprehensive medical coverage for you and family.', icon: ShieldCheck },
    { title: 'Paid Time Off', desc: 'Generous annual leave, sick leave, and parental leave.', icon: Clock },
    { title: 'Flexible Working Hours', desc: 'Core hours with flexibility to suit your productive rhythm.', icon: Laptop },
    { title: 'Remote Work Allowance', desc: 'Monthly internet allowance and home office setup budget.', icon: Globe },
    { title: 'Learning Budget', desc: 'Annual stipend for courses, books, and tech certifications.', icon: GraduationCap },
    { title: 'Annual Performance Bonus', desc: 'Rewarding hard work with annual profit-share bonuses.', icon: Award },
    { title: 'Team Outings & Events', desc: 'Regular hackathons, fun Fridays, and annual retreats.', icon: Users },
    { title: 'Certification Sponsorship', desc: '100% reimbursement for AWS, GCP, and React certifications.', icon: BookOpen }
  ];

  const successStories = [
    {
      name: 'Aniket Verma',
      path: 'Started as Intern ➔ Software Engineer ➔ Tech Lead',
      story: 'Joined AKS during my final semester. Within 2 years, I led the architecture for KD Finserve financial portal managing ₹85 Cr+ AUM.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Riya Sengupta',
      path: 'Junior UI Designer ➔ Senior Product Designer',
      story: 'The mentorship culture at AKS is unmatched. I designed the luxury GlowBotanica e-commerce platform which won global design accolades.',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const employeeTestimonials = [
    {
      name: 'Karan Sharma',
      role: 'Senior Full Stack Engineer',
      dept: 'Software Engineering',
      years: '3 Years at AKS',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      review: 'Working at AKS has been the highlight of my engineering career. The freedom to use cutting-edge tech like Next.js 15 and OpenAI APIs makes every day exciting!'
    },
    {
      name: 'Megha Nair',
      role: 'Lead UI/UX Architect',
      dept: 'Design Systems',
      years: '2.5 Years at AKS',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      review: 'The psychological safety and creative independence here allow designers to craft truly world-class products without micromanagement.'
    }
  ];

  const faqs = [
    { q: 'How do I apply for open positions?', a: 'Explore our Featured Jobs section below, select your desired role, and click "Apply Now". You can also log in to track your application status in real time.' },
    { q: 'Can freshers and final-year students apply?', a: 'Yes! We have a dedicated Internship & Fresher Trainee Program designed specifically for final-year students and fresh graduates.' },
    { q: 'Is remote work available for all roles?', a: 'Most of our engineering, design, and AI positions offer remote or hybrid work flexibility based on your preference.' },
    { q: 'What is the standard interview turnaround time?', a: 'Our interview process typically takes 5–10 business days from initial resume screening to final offer letter issuance.' },
    { q: 'Can I apply for multiple positions simultaneously?', a: 'Yes, you can apply for up to 3 positions that align with your technical skills and experience.' }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-[#FFF8F5] text-slate-900 space-y-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* 1. ENTERPRISE HERO SECTION WITH DARK MESH GRADIENT */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white p-8 sm:p-14 shadow-2xl border border-slate-800 space-y-6 text-center">
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>🌍 Remote & Hybrid Opportunities • 🚀 Fast Growth • 💼 Enterprise Scale</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white"
            >
              Build Your Future with <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">AKS Web Service Technologies</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Join a team of passionate innovators, engineers, designers, and problem-solvers creating next-generation digital solutions. Grow your career while working on impactful projects with global clients.
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              <a
                href="#open-positions"
                className="px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-black text-xs shadow-lg transition-all flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Explore Open Positions</span>
              </a>

              <a
                href="#talent-network"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs backdrop-blur-md shadow-sm transition-all flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-sky-400" />
                <span>Join Talent Community</span>
              </a>

              <button
                onClick={() => onNavigate('internships')}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-black text-xs border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-sky-300" />
                <span>View Internship Program</span>
              </button>
            </motion.div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-6 border-t border-white/10 text-center">
              {[
                { num: '250+', label: 'Projects Delivered' },
                { num: '50+', label: 'Team Members' },
                { num: '15+', label: 'Technologies' },
                { num: '98%', label: 'Employee Satisfaction' },
                { num: 'Global', label: 'Remote & Hybrid' }
              ].map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-xl font-black text-sky-400 block">{s.num}</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* 2. WHY WORK WITH AKS (BUILD MORE THAN A CAREER) */}
      <section className="glass-card bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-8 shadow-sm">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Work Culture</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Build More Than a Career</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">At AKS, we believe our people are our greatest strength. We foster innovation, continuous learning, and career growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyWorkCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500 transition-all space-y-2">
                <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. LIFE AT AKS GALLERY */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Life at AKS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Inside Our Engineering Hub</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Team Collaboration', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80' },
            { title: 'Hackathons & Ideas', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80' },
            { title: 'Tech Talks & Demos', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80' },
            { title: 'Annual Retreats', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80' }
          ].map((gal, gIdx) => (
            <div key={gIdx} className="relative h-48 rounded-2xl overflow-hidden shadow-sm group">
              <img src={gal.img} alt={gal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-black text-white">{gal.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEET OUR TEAMS */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Teams at AKS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Explore Specialist Departments</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {teams.map((tm, tIdx) => {
            const Icon = tm.icon;
            return (
              <div key={tIdx} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 shadow-sm space-y-2 transition-all">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">{tm.count}</span>
                </div>
                <h3 className="text-sm font-black text-slate-900">{tm.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{tm.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FEATURED JOBS & ADVANCED SEARCH (EXISTING PRESERVED & UPGRADED) */}
      <section id="open-positions" className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Active Requisitions</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Featured Open Positions</h2>
        </div>

        {/* Filter Header */}
        <div className="glass-card bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search positions, keywords, or skills..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
            {['All', 'Engineering', 'Design', 'AI & ML', 'Marketing', 'Sales'].map((d) => (
              <button
                key={d}
                onClick={() => setDepartment(d)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex-shrink-0 ${
                  department === d
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((job) => {
            const isSaved = savedJobIds.includes(job.id);
            return (
              <div
                key={job.id}
                className="glass-card bg-white p-6 rounded-3xl border border-slate-200 hover:border-sky-500 transition-all shadow-sm space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold text-sky-600 uppercase tracking-widest block">{job.department}</span>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors pt-0.5">
                        {job.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => toggleSaveJob(job.id)}
                      className={`p-2 rounded-xl border transition-colors ${
                        isSaved
                          ? 'bg-sky-50 border-sky-300 text-sky-600'
                          : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700'
                      }`}
                      title={isSaved ? 'Saved' : 'Save Job'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-slate-400" /> {job.experience}</span>
                    {job.salary && <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{job.salary}</span>}
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(job.skills || []).map((sk, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="text-xs font-black text-sky-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>View Requisition Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs shadow-sm transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. HIRING JOURNEY (9-STEP TIMELINE) */}
      <section className="glass-card bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-6 shadow-sm">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Hiring Journey</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Transparent Recruitment Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 text-center">
          {hiringJourney.map((h, hIdx) => (
            <div key={hIdx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-black text-sky-600 block">{h.step}</span>
              <h4 className="text-[11px] font-black text-slate-900 leading-tight">{h.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 7. EMPLOYEE BENEFITS GRID */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Perks & Benefits</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Enterprise Benefits Package</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {employeeBenefits.map((ben, bIdx) => {
            const Icon = ben.icon;
            return (
              <div key={bIdx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-slate-900">{ben.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{ben.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. EMPLOYEE SUCCESS STORIES & TESTIMONIALS */}
      <section className="glass-card bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-6 shadow-sm">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Employee Stories</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Career Growth at AKS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {successStories.map((st, sIdx) => (
            <div key={sIdx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 flex items-start gap-4">
              <img src={st.photo} alt={st.name} className="w-12 h-12 rounded-full object-cover border-2 border-sky-300" />
              <div className="space-y-1">
                <h4 className="text-sm font-black text-slate-900">{st.name}</h4>
                <span className="text-[10px] font-extrabold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full block w-max">{st.path}</span>
                <p className="text-xs text-slate-600 font-medium leading-relaxed pt-1">"{st.story}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TALENT NETWORK & COMMUNITY */}
      <section id="talent-network" className="glass-card bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl border border-slate-800">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest">Talent Network</span>
          <h2 className="text-2xl sm:text-3xl font-black">Don't See the Right Role Today?</h2>
          <p className="text-xs text-slate-300">Join our Talent Community. Submit your resume and we will notify you when matching engineering or design requisitions open.</p>
        </div>

        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            value={talentEmail}
            onChange={(e) => setTalentEmail(e.target.value)}
            placeholder="Enter your email address..."
            className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
          />
          <button
            onClick={() => { setTalentSubmitted(true); setTalentEmail(''); setTimeout(() => setTalentSubmitted(false), 3000); }}
            className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-black text-xs shadow-md transition-all flex items-center gap-1.5 flex-shrink-0"
          >
            <Upload className="w-4 h-4" />
            <span>Join Community</span>
          </button>
        </div>
        {talentSubmitted && (
          <p className="text-center text-xs font-extrabold text-emerald-400 animate-pulse">
            ✓ Thank you for joining AKS Talent Community! We will notify you about future openings.
          </p>
        )}
      </section>

      {/* 10. FAQ SECTION */}
      <section className="glass-card bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-6 shadow-sm">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Got Questions?</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, fIdx) => (
            <div key={fIdx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
              <button
                onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-2 hover:text-sky-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === fIdx ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
              </button>
              {openFaq === fIdx && (
                <div className="px-4 pb-4 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 pt-2 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. FINAL CTA BANNER */}
      <section className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
        <div className="space-y-2 max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black">Ready to Shape the Future with AKS?</h2>
          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed pt-1">
            Whether you're an experienced professional, a fresher, or an intern, your next opportunity starts here.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
          <a
            href="#open-positions"
            className="px-8 py-3.5 rounded-full bg-white text-sky-700 font-black text-xs hover:bg-sky-50 transition-all shadow-lg flex items-center gap-2"
          >
            <Rocket className="w-4 h-4 text-sky-600" />
            <span>Apply Now</span>
          </a>
          
          <a
            href="#talent-network"
            className="px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-black text-xs border border-white/30 transition-all flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            <span>Join Talent Community</span>
          </a>
        </div>
      </section>

      {/* JOB DETAIL & APPLICATION MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-extrabold uppercase tracking-wider border border-sky-200">
                  {selectedJob.department} Requisition
                </span>
                <h2 className="text-2xl font-black text-slate-900">{selectedJob.title}</h2>
                
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500 pt-1">
                  <span>📍 {selectedJob.location}</span>
                  <span>⏱️ {selectedJob.type}</span>
                  <span>💼 {selectedJob.experience}</span>
                  {selectedJob.salary && <span className="text-emerald-600 font-extrabold">💰 {selectedJob.salary}</span>}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Role Description</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Required Technical Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {(selectedJob.skills || []).map((sk, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 text-xs font-extrabold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {appliedSuccess ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-center font-black text-xs flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-bounce" />
                  <span>Application Submitted Successfully! Redirecting to Workspace...</span>
                </div>
              ) : (
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
                  <button
                    onClick={() => toggleSaveJob(selectedJob.id)}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-extrabold text-xs hover:bg-slate-100 transition-colors"
                  >
                    {savedJobIds.includes(selectedJob.id) ? 'Bookmarked ✓' : 'Save Job'}
                  </button>

                  <button
                    onClick={() => handleApply(selectedJob)}
                    className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Submit Candidate Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      </div>
    </div>
  );
};

// Auxiliary Star Icon Helper
const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
