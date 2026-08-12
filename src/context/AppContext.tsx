import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  fetchJobsApi, createJobApi, deleteJobApi, 
  fetchApplicationsApi, createApplicationApi, 
  updateApplicationStatusApi, scheduleInterviewApi, generateOfferApi, parseResumeApi 
} from '../services/api';

export interface Job {
  id: string;
  _id?: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  jobType: 'Full-time' | 'Part-time' | 'Remote' | 'Hybrid' | 'Internship';
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  featured?: boolean;
}

export interface Application {
  id: string;
  _id?: string;
  jobId: string;
  jobTitle: string;
  candidateName: string;
  email: string;
  phone: string;
  experienceYears: number;
  skills: string[];
  resumeText: string;
  atsScore: number;
  status: 'Applied' | 'Resume Parsing' | 'ATS Screening' | 'HR Review' | 'Technical Test' | 'Interview' | 'HR Discussion' | 'Offer Letter' | 'Onboarding';
  appliedDate: string;
  rating: number;
  interviewDate?: string;
  interviewNotes?: string;
  offerDetails?: {
    ctc: string;
    joiningDate: string;
    designation: string;
  };
}

export interface Internship {
  id: string;
  title: string;
  department: string;
  duration: string;
  stipend: string;
  eligibility: string;
  mentor: string;
  learningPath: string[];
  openings: number;
}

export interface Blog {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
}

interface AppContextType {
  role: 'guest' | 'candidate';
  setRole: (role: 'guest' | 'candidate') => void;
  jobs: Job[];
  applications: Application[];
  internships: Internship[];
  blogs: Blog[];
  savedJobIds: string[];
  candidateProfile: {
    name: string;
    email: string;
    phone: string;
    title: string;
    skills: string[];
    experienceYears: number;
    resumeParsed: boolean;
    atsScore: number;
    education: string;
    resumeText?: string;
  };
  toggleSaveJob: (jobId: string) => void;
  applyForJob: (jobId: string, candidateData: Partial<Application>) => Promise<void>;
  parseResumeSimulated: (text: string) => Promise<number>;
  updateApplicationStatus: (appId: string, newStatus: Application['status']) => Promise<void>;
  updateProfile: (profile: any) => void;
  refreshData: () => Promise<void>;
}

const fallbackJobs: Job[] = [
  {
    id: 'job-1',
    title: 'Frontend Developer (React / Next.js)',
    department: 'Development',
    location: 'Remote / Worldwide',
    experience: '2-4 Years',
    jobType: 'Full-time',
    salary: '₹8,00,000 - ₹14,00,000 PA',
    description: 'We are seeking an ambitious Frontend Engineer passionate about crafting high-performance visual interfaces, accessible designs, and scalable React application architectures.',
    responsibilities: [
      'Architect resilient web components using React 19, TypeScript, and Tailwind CSS.',
      'Optimize web performance and Core Web Vitals to achieve sub-second load times.'
    ],
    requirements: [
      'Strong proficiency in TypeScript, React.js, Next.js, and modern CSS/Tailwind.',
      'Hands-on experience with Framer Motion or GSAP animations.'
    ],
    benefits: ['Flexible Remote / Hybrid working model', 'Health Insurance coverage'],
    postedDate: '2026-07-25',
    featured: true
  },
  {
    id: 'job-2',
    title: 'Backend Developer (Node.js & Microservices)',
    department: 'Development',
    location: 'Remote / Global',
    experience: '2-5 Years',
    jobType: 'Full-time',
    salary: '₹9,00,000 - ₹16,00,000 PA',
    description: 'Engineer high-throughput backend APIs, MongoDB Atlas database abstractions, and real-time microservice architectures.',
    responsibilities: ['Develop secure microservices in Node.js and Express.', 'Design optimized MongoDB schemas.'],
    requirements: ['3+ years experience with Node.js, Express, and MongoDB.', 'Experience with REST APIs.'],
    benefits: ['Competitive compensation package', 'Flexible working hours'],
    postedDate: '2026-07-28',
    featured: true
  },
  {
    id: 'job-3',
    title: 'AI / Machine Learning Engineer',
    department: 'AI & Data',
    location: 'Remote / Hybrid',
    experience: '2-5 Years',
    jobType: 'Full-time',
    salary: '₹12,00,000 - ₹22,00,000 PA',
    description: 'Build intelligent resume parsing, automated candidate screening, and AI career guidance engines using LLMs.',
    responsibilities: ['Fine-tune open-source LLMs', 'Develop document OCR pipelines'],
    requirements: ['Strong Python proficiency (PyTorch, LangChain)', 'Vector DBs'],
    benefits: ['High-growth AI R&D environment', 'Conference budget'],
    postedDate: '2026-07-26',
    featured: true
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<'guest' | 'candidate'>('guest');
  const [jobs, setJobs] = useState<Job[]>(fallbackJobs);
  const [applications, setApplications] = useState<Application[]>([]);
  const [savedJobIds, setSavedJobIds] = useState<string[]>(['job-1']);

  const [candidateProfile, setCandidateProfile] = useState({
    name: 'Akash Kumar',
    email: 'akash.candidate@example.com',
    phone: '+91 99887 76655',
    title: 'Frontend & Fullstack Engineer',
    skills: ['React.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Git'],
    experienceYears: 3,
    resumeParsed: true,
    atsScore: 92,
    education: 'B.Tech in Computer Science & Engineering'
  });

  // Fetch Real Data from Server API on load
  const refreshData = async () => {
    const apiJobs = await fetchJobsApi();
    if (apiJobs && apiJobs.length > 0) {
      setJobs(apiJobs.map((j: any) => ({ ...j, id: j._id || j.id })));
    }

    const apiApps = await fetchApplicationsApi();
    if (apiApps) {
      setApplications(apiApps.map((a: any) => ({ ...a, id: a._id || a.id })));
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const toggleSaveJob = (jobId: string) => {
    setSavedJobIds(prev =>
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  // Real Application Submission
  const applyForJob = async (jobId: string, candidateData: Partial<Application>) => {
    const targetJob = jobs.find(j => j.id === jobId || j._id === jobId);
    const newApp = {
      jobId,
      jobTitle: targetJob ? targetJob.title : 'Software Role',
      candidateName: candidateData.candidateName || candidateProfile.name,
      email: candidateData.email || candidateProfile.email,
      phone: candidateData.phone || candidateProfile.phone,
      experienceYears: candidateData.experienceYears || candidateProfile.experienceYears,
      skills: candidateData.skills || candidateProfile.skills,
      resumeText: candidateData.resumeText || 'Candidate Resume Text',
      atsScore: Math.floor(Math.random() * 15) + 84,
      status: 'Applied' as const,
      appliedDate: new Date().toISOString().split('T')[0],
      rating: 4
    };

    // Save to State
    const tempId = `app-${Date.now()}`;
    setApplications(prev => [{ ...newApp, id: tempId }, ...prev]);

    // Save to Real Database via REST API
    const res = await createApplicationApi(newApp);
    if (res.success) {
      refreshData();
    }
  };

  const parseResumeSimulated = async (text: string): Promise<number> => {
    const res = await parseResumeApi(text);
    const score = res.atsScore || 90;
    setCandidateProfile(prev => ({
      ...prev,
      resumeParsed: true,
      atsScore: score
    }));
    return score;
  };

  const updateApplicationStatus = async (appId: string, newStatus: Application['status']) => {
    setApplications(prev =>
      prev.map(app => app.id === appId || app._id === appId ? { ...app, status: newStatus } : app)
    );
    await updateApplicationStatusApi(appId, newStatus);
  };

  const rateCandidate = (appId: string, rating: number) => {
    setApplications(prev =>
      prev.map(app => app.id === appId || app._id === appId ? { ...app, rating } : app)
    );
  };

  const scheduleInterview = async (appId: string, date: string, notes: string) => {
    setApplications(prev =>
      prev.map(app => app.id === appId || app._id === appId ? { ...app, status: 'Interview', interviewDate: date, interviewNotes: notes } : app)
    );
    await scheduleInterviewApi(appId, date, notes);
  };

  const generateOffer = async (appId: string, ctc: string, joiningDate: string) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === appId || app._id === appId
          ? {
              ...app,
              status: 'Offer Letter',
              offerDetails: {
                ctc,
                joiningDate,
                designation: app.jobTitle
              }
            }
          : app
      )
    );
    await generateOfferApi(appId, ctc, joiningDate);
  };

  const addNewJob = async (newJobData: Omit<Job, 'id' | 'postedDate'>) => {
    const tempJob: Job = {
      ...newJobData,
      id: `job-${Date.now()}`,
      postedDate: new Date().toISOString().split('T')[0]
    };
    setJobs(prev => [tempJob, ...prev]);
    await createJobApi(newJobData);
    refreshData();
  };

  const deleteJob = async (jobId: string) => {
    setJobs(prev => prev.filter(j => j.id !== jobId && j._id !== jobId));
    await deleteJobApi(jobId);
  };

  const updateProfile = (profile: any) => {
    setCandidateProfile(prev => ({ ...prev, ...profile }));
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        jobs,
        applications,
        internships: [
          {
            id: 'intern-1',
            title: 'Web Development Internship',
            department: 'Development',
            duration: '3 Months (Remote)',
            stipend: '₹15,000 / Month',
            eligibility: 'B.Tech / BCA / MCA Students',
            mentor: 'Senior Architect',
            learningPath: ['React.js & Tailwind CSS', 'Node.js APIs', 'MongoDB Atlas'],
            openings: 5
          },
          {
            id: 'intern-2',
            title: 'UI/UX Design Internship',
            department: 'Design',
            duration: '3 Months (Remote)',
            stipend: '₹12,000 / Month',
            eligibility: 'Design Students with Portfolio',
            mentor: 'Lead UI/UX Designer',
            learningPath: ['Figma Prototyping', 'Glassmorphism Design Tokens'],
            openings: 3
          }
        ],
        blogs: [
          {
            id: 'blog-1',
            title: 'Cracking Engineering Interviews at TecVor Technologies',
            category: 'Career Tips',
            author: 'TecVor HR Team',
            date: 'July 28, 2026',
            readTime: '5 min read',
            summary: 'Preparation roadmap for coding rounds and system architecture interviews.',
            content: 'Detailed guide...',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
          }
        ],
        savedJobIds,
        candidateProfile,
        toggleSaveJob,
        applyForJob,
        parseResumeSimulated,
        updateApplicationStatus,
        updateProfile,
        refreshData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
