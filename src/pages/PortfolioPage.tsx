import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, TrendingUp, ExternalLink, ShieldCheck, Award, Globe, 
  Users, Rocket, CheckCircle2, ChevronDown, Clock, Zap, Star, Code2, Server, 
  Database, Cpu, Layers, HeartPulse, Building2, GraduationCap, ShoppingBag, 
  Home, Factory, Truck, Car, Coffee, Scissors, Sprout, Laptop, MessageSquare, 
  FileText, X, Eye
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (tab: string) => void;
  onOpenCalendly?: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenCalendly }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'ai'>('all');
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [activePreset, setActivePreset] = useState<number>(0);
  const [activeTechCategory, setActiveTechCategory] = useState<'frontend' | 'backend' | 'database' | 'cloud' | 'ai'>('frontend');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState<any | null>(null);
  const [isTestimonialsHovered, setIsTestimonialsHovered] = useState<boolean>(false);

  // Before vs After Showcase Presets
  const beforeAfterPresets = [
    {
      title: 'FinTech Trading Platform',
      beforeImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
      afterImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
      beforeScore: '42/100',
      afterScore: '99/100',
      beforeTitle: 'Legacy PHP & Cluttered Layout',
      afterTitle: 'Modern WebSockets Trading Engine'
    },
    {
      title: 'Luxury E-Commerce Store',
      beforeImg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80',
      afterImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80',
      beforeScore: '38/100',
      afterScore: '100/100',
      beforeTitle: 'Slow Monolithic Template Store',
      afterTitle: 'Headless Next.js 15 & AR Shader Store'
    },
    {
      title: 'Custom Automotive App',
      beforeImg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
      afterImg: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=80',
      beforeScore: '51/100',
      afterScore: '98/100',
      beforeTitle: 'Outdated Webview Mobile Frame',
      afterTitle: 'Native 60fps 3D Bike Builder App'
    }
  ];

  // Enhanced Projects List with complete rich metadata
  const projects = [
    {
      id: 'kd-finserve',
      title: 'KD Finserve Financial Advisory & Investment Portal',
      category: 'web',
      client: 'KD Finserve Private Limited',
      industry: 'Finance & Banking',
      teamSize: '6 Engineers',
      country: 'India / Global',
      description: 'Secure wealth management portal for SIP mutual funds, insurance analytics, portfolio tracking, and instant KYC verification.',
      results: '₹85 Cr+ AUM Managed, 100% Audit Compliance',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AES-256'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      badge: 'Live Platform 🚀',
      liveUrl: 'https://kdfinserv.netlify.app',
      lighthouseScore: '99/100',
      caseStudyDetails: 'Engineered an enterprise-grade OAuth2 encrypted financial portal. Built automated portfolio rebalancing engines, instant e-KYC document processing, and real-time NAV calculations for over 45,000 active investors.'
    },
    {
      id: 'fintech-saas',
      title: 'ApexPay Fintech & Trading Dashboard',
      category: 'web',
      client: 'Apex Capital Corp',
      industry: 'FinTech & Trading',
      teamSize: '8 Engineers',
      country: 'United States',
      description: 'Ultra-low latency web trading portal handling 100K+ concurrent WebSockets transactions with high-frequency charting.',
      results: '+340% User Engagement, 45ms Latency',
      tech: ['React', 'TypeScript', 'Node.js', 'Tailwind', 'WebSockets', 'AWS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badge: 'Featured Enterprise',
      lighthouseScore: '98/100',
      caseStudyDetails: 'Designed sub-50ms WebSockets data pipeline with WebGL high-frequency candle charting, instant order execution engine, and multi-tenant risk risk analysis dashboard.'
    },
    {
      id: 'cosmetics-brand',
      title: 'GlowBotanica Luxury Cosmetic & Beauty Platform',
      category: 'web',
      client: 'GlowBotanica Beauty',
      industry: 'Beauty & E-Commerce',
      teamSize: '5 Engineers',
      country: 'United Kingdom',
      description: 'Luxury glassmorphic e-commerce store with AI shade finder, organic skincare recommendations, and subscription box management.',
      results: '₹4.5 Cr Monthly Sales, 4.9★ Review Score',
      tech: ['Next.js', 'Node.js', 'GraphQL', 'Tailwind', 'Razorpay'],
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      badge: 'Luxury Beauty',
      lighthouseScore: '100/100',
      caseStudyDetails: 'Integrated AR live camera shade matching technology with headless Shopify GraphQL engine to boost conversion rates by 340%.'
    },
    {
      id: 'rahul-motorcycle',
      title: 'Rahul Custom Motorcycles & Workshop Showcase',
      category: 'mobile',
      client: 'Rahul Custom Choppers',
      industry: 'Automotive & Custom Builds',
      teamSize: '4 Engineers',
      country: 'India',
      description: 'Interactive custom motorcycle booking app with 3D bike builder, exhaust sound preview, service booking, and live build tracking.',
      results: '500+ Custom Builds Booked, 4.9★ Rating',
      tech: ['Flutter', 'Firebase', 'Three.js', 'Node.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
      badge: 'Live Platform 🚀',
      liveUrl: 'https://thriving-bunny-01ec14.netlify.app',
      lighthouseScore: '97/100',
      caseStudyDetails: 'Developed 3D WebGL motorcycle configurator allowing customers to customize handlebars, paints, and exhaust pipes with instant price calculation.'
    },
    {
      id: 'bottle-brand',
      title: 'AquaPure Eco Bottle & Hydration E-Commerce',
      category: 'web',
      client: 'AquaPure Brands',
      industry: 'D2C Retail & Eco Tech',
      teamSize: '4 Engineers',
      country: 'Singapore',
      description: 'D2C e-commerce platform for sustainable thermal water bottles featuring interactive 3D bottle configurator and instant checkout.',
      results: '+280% Conversion Rate, 150K+ Orders',
      tech: ['Shopify Plus', 'Three.js', 'React', 'Tailwind CSS', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
      badge: 'D2C E-Commerce',
      lighthouseScore: '99/100',
      caseStudyDetails: 'Custom 3D product customization tool linked directly to automated laser-engraving fulfillment pipelines.'
    },
    {
      id: 'garden-nursery',
      title: 'Eden Garden Nursery & Landscaping Portal',
      category: 'web',
      client: 'Eden Greenery Solutions',
      industry: 'Agriculture & Landscaping',
      teamSize: '5 Engineers',
      country: 'Australia',
      description: 'Omnichannel plant nursery platform with AR plant placement preview, automated watering schedules, and doorstep delivery.',
      results: '85K+ Active Gardeners, +190% Repeat Orders',
      tech: ['React', 'WebXR', 'Node.js', 'MongoDB', 'AWS'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
      badge: 'AgriTech & Garden',
      lighthouseScore: '98/100',
      caseStudyDetails: 'Augmented reality mobile web experience enabling customers to preview full-grown trees and plants in their garden before ordering.'
    },
    {
      id: 'health-app',
      title: 'PulseCare AI Telehealth Mobile Suite',
      category: 'mobile',
      client: 'PulseCare Healthcare Inc.',
      industry: 'Healthcare & MedTech',
      teamSize: '9 Engineers',
      country: 'United States',
      description: 'Cross-platform iOS/Android telemedicine application with AI symptom checker, encrypted video consultations, and IoT sync.',
      results: '4.9★ App Store Rating, 500K+ Downloads',
      tech: ['Flutter', 'Firebase', 'Python', 'FastAPI', 'WebRTC', 'GCP'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      badge: 'Top Rated App',
      lighthouseScore: '99/100',
      caseStudyDetails: 'HIPAA-compliant encrypted WebRTC video consultation suite with AI symptom analysis and automated doctor e-prescriptions.'
    },
    {
      id: 'ai-copilot',
      title: 'OmniStream Autonomous AI Workflow Agent',
      category: 'ai',
      client: 'OmniStream Logistics',
      industry: 'Logistics & Supply Chain',
      teamSize: '7 Engineers',
      country: 'Germany',
      description: 'LLM-powered automated supply chain coordinator that optimizes freight routing and predicts delivery bottlenecks in real time.',
      results: '₹1.2 Cr Annual Freight Savings',
      tech: ['Python', 'PyTorch', 'Next.js', 'LangChain', 'Docker', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      badge: 'AI Innovation',
      lighthouseScore: '100/100',
      caseStudyDetails: 'LangChain multi-agent autonomous AI agent predicting port delays, rerouting trucks dynamically, and saving ₹1.2 Cr in annual logisitics overhead.'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const techCategories = {
    frontend: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'NestJS', 'Python', 'FastAPI', 'REST APIs'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'DynamoDB'],
    cloud: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Vercel', 'Cloudflare'],
    ai: ['OpenAI API', 'LangChain', 'TensorFlow', 'Machine Learning', 'PyTorch', 'RAG Pipelines']
  };

  const industries = [
    { name: 'Healthcare', icon: HeartPulse, color: 'text-rose-500 bg-rose-50' },
    { name: 'Finance', icon: Building2, color: 'text-emerald-500 bg-emerald-50' },
    { name: 'Education', icon: GraduationCap, color: 'text-blue-500 bg-blue-50' },
    { name: 'E-Commerce', icon: ShoppingBag, color: 'text-amber-500 bg-amber-50' },
    { name: 'Real Estate', icon: Home, color: 'text-indigo-500 bg-indigo-50' },
    { name: 'Manufacturing', icon: Factory, color: 'text-purple-500 bg-purple-50' },
    { name: 'Logistics', icon: Truck, color: 'text-cyan-500 bg-cyan-50' },
    { name: 'Automotive', icon: Car, color: 'text-red-500 bg-red-50' },
    { name: 'Hospitality', icon: Coffee, color: 'text-teal-500 bg-teal-50' },
    { name: 'Beauty & Wellness', icon: Scissors, color: 'text-pink-500 bg-pink-50' },
    { name: 'Agriculture', icon: Sprout, color: 'text-green-500 bg-green-50' },
    { name: 'IT & SaaS', icon: Laptop, color: 'text-sky-500 bg-sky-50' }
  ];

  const developmentSteps = [
    { step: '01', title: 'Discovery', desc: 'In-depth analysis of business goals and user requirements.' },
    { step: '02', title: 'Strategy', desc: 'Architecture mapping, tech stack selection, and milestone roadmaps.' },
    { step: '03', title: 'UI/UX Design', desc: 'Interactive prototypes and high-converting glassmorphic design systems.' },
    { step: '04', title: 'Development', desc: 'Type-safe React/Next/Node codebase with clean microservice architecture.' },
    { step: '05', title: 'Quality Assurance', desc: 'Rigorous automated unit testing, security audits, and load testing.' },
    { step: '06', title: 'Deployment', desc: 'Zero-downtime cloud launch with CDN caching and SSL certificates.' },
    { step: '07', title: 'Maintenance & Support', desc: '24/7 SLA monitoring, feature upgrades, and performance tuning.' }
  ];

  const whyChooseUsCards = [
    { title: 'Experienced Engineers', desc: 'Certified full-stack architects with deep industry experience.', icon: Users },
    { title: 'Transparent Communication', desc: 'Weekly video demos, dedicated Slack channels, and real-time sprint tracking.', icon: MessageSquare },
    { title: 'Agile Development', desc: 'Fast 2-week iteration cycles with continuous integration & delivery.', icon: Zap },
    { title: 'Scalable Architecture', desc: 'Cloud-native microservices engineered to handle millions of daily users.', icon: Server },
    { title: 'On-Time Delivery', desc: '100% committed delivery schedules backed by strict milestone SLAs.', icon: Clock },
    { title: 'Long-Term Support', desc: 'Post-launch optimization, security patches, and scaling support.', icon: ShieldCheck },
    { title: 'Enterprise Security', desc: 'OWASP top-10 security compliance, AES-256 encryption, and audit logs.', icon: Award },
    { title: 'AI-Driven Innovation', desc: 'Integrating cutting-edge LLMs and machine learning into business workflows.', icon: Cpu }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, KD Finserve',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'KD Finserve Wealth Portal',
      review: 'AKS Web Service Technologies engineered our wealth management portal from scratch. Their security standards and fast execution delivered ₹85 Cr+ AUM growth within months!'
    },
    {
      name: 'Sarah Jenkins',
      role: 'VP Product, GlowBotanica UK',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'GlowBotanica E-Commerce Store',
      review: 'The glassmorphic design and AI shade finder built by AKS tripled our conversion rates. Outstanding team and absolute engineering brilliance!'
    },
    {
      name: 'Michael Zhang',
      role: 'CTO, Apex Capital',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'ApexPay Trading Dashboard',
      review: 'Handling 100K+ concurrent WebSockets trading transactions with sub-45ms latency was critical for us. AKS delivered flawless performance!'
    },
    {
      name: 'Vikramaditya Singh',
      role: 'Founder, Rahul Custom Choppers',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: '3D Motorcycle Configurator App',
      review: 'The 3D bike builder and booking app transformed our workshop completely. Over 500 custom motorcycle builds were booked in just 60 days!'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Digital, AquaPure Singapore',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'AquaPure Eco Bottle D2C Store',
      review: 'Our D2C water bottle sales exploded after AKS deployed our Next.js storefront. 150,000+ orders processed smoothly with zero downtime!'
    },
    {
      name: 'Dr. Aris Thorne',
      role: 'Chief Medical Officer, PulseCare USA',
      photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'PulseCare AI Telehealth Suite',
      review: 'The HIPAA-compliant WebRTC telehealth app achieved 500,000+ downloads with a 4.9-star rating. Patient satisfaction has never been higher!'
    },
    {
      name: 'Klaus Weber',
      role: 'Logistics Director, OmniStream Germany',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'Autonomous AI Supply Chain Agent',
      review: 'Their LangChain autonomous AI logistics coordinator saves our European freight network ₹1.2 Cr annually in supply chain overhead.'
    },
    {
      name: 'Ananya Deshmukh',
      role: 'MD, Eden Greenery Australia',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'Eden Garden Nursery Portal',
      review: 'The WebXR room scanner developed by AKS allows plant lovers to preview 200+ indoor plant varieties. 190% boost in repeat orders!'
    },
    {
      name: 'David Miller',
      role: 'Co-Founder, CloudPulse SaaS',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'CloudPulse AWS Microservices',
      review: 'AKS migrated our monolithic backend to AWS microservices with zero downtime. API response latency dropped from 350ms to 28ms!'
    },
    {
      name: 'Sophia Martinez',
      role: 'Marketing Director, LuxeCraft Beauty',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'LuxeCraft E-Commerce Redesign',
      review: 'Sensational UI/UX design! The micro-animations and lightning-fast checkout increased our monthly e-commerce revenues by 240%.'
    },
    {
      name: 'Arjun Patel',
      role: 'Operations Lead, LogisticsFlow India',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'Logistics GPS Dispatch Portal',
      review: 'Real-time GPS fleet tracking and automated e-way bill processing system built by AKS streamlined 10,000+ truck dispatches.'
    },
    {
      name: 'Claire Dupont',
      role: 'E-Commerce Head, Velour Paris',
      photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'Velour Multi-Currency Boutique',
      review: 'The multi-currency luxury fashion store developed by AKS delivered our highest holiday sales record in company history!'
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Founder, EduLearn Global',
      photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'EduLearn EdTech Video Engine',
      review: 'Our interactive online learning platform handles 80,000 concurrent students streaming HD video courses smoothly with zero lag.'
    },
    {
      name: 'Neha Sharma',
      role: 'Founder, UrbanSpaces Real Estate',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'UrbanSpaces 360 Property Portal',
      review: 'Virtual 360-degree home tours and AI property valuation tools built by AKS doubled our broker inquiry conversions within 30 days.'
    },
    {
      name: 'Oliver Bennet',
      role: 'Head of Tech, BioNutra UK',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'BioNutra D2C Subscription Platform',
      review: 'Sub-second page speeds and automated subscription renewals built by AKS boosted our recurring D2C revenue by 180%.'
    },
    {
      name: 'Priya Roy',
      role: 'COO, FinTechPay India',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'FinTechPay UPI Merchant Gateway',
      review: 'The instant UPI payment integration and merchant onboarding dashboard built by AKS processed ₹120 Cr+ transactions seamlessly.'
    },
    {
      name: 'Alexander Gross',
      role: 'CTO, AutoDrive Mobility Germany',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'EV Charging Locator App',
      review: 'Their Flutter cross-platform EV charging locator app delivers 60fps smoothness and instant Bluetooth OBD sync.'
    },
    {
      name: 'Tanya Verma',
      role: 'Founder, GlowUp Salon Suite',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'GlowUp POS & Booking Suite',
      review: 'The online appointment scheduling system and POS integration built by AKS eliminated double-bookings completely!'
    },
    {
      name: 'Carlos Silva',
      role: 'VP Engineering, AgriSmart Brazil',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'IoT Soil & Crop Dashboard',
      review: 'IoT sensor dashboard monitoring soil moisture and crop yield predictions built by AKS empowered 5,000+ farmers in Brazil.'
    },
    {
      name: 'Rachel Green',
      role: 'Head of HR, TalentHub Global',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'AI Candidate Screening System',
      review: 'The AI resume parser and candidate evaluation dashboard built by AKS cut our hiring turnaround time by 75%!'
    }
  ];

  const faqs = [
    { q: 'How long does a project take?', a: 'Project timelines range from 2–4 weeks for fast-track web applications to 3–6 months for large enterprise platforms, backed by clear 2-week agile sprint milestones.' },
    { q: 'Do you work with startups?', a: 'Yes! We partner with ambitious early-stage startups and growth-stage companies to build investor-ready MVPs and scalable digital products.' },
    { q: 'Can you redesign existing websites?', a: 'Absolutely. We specialize in transforming outdated legacy web platforms into ultra-fast, modern glassmorphic web applications with sub-second page loads.' },
    { q: 'Do you provide maintenance & post-launch support?', a: 'Yes, we provide 24/7 technical monitoring, database backups, security patches, bug fixes, and continuous feature additions under tailored SLA plans.' },
    { q: 'What technologies do you use?', a: 'Our modern engineering stack includes React 19, Next.js 15, TypeScript, Node.js, Express, Python, FastAPI, MongoDB, PostgreSQL, AWS, GCP, and Flutter.' },
    { q: 'How do we start?', a: 'Simply click "Schedule a Free Consultation" or contact our engineering leads. We will conduct a free requirement analysis and provide a detailed project roadmap within 24 hours.' }
  ];

  const currentPreset = beforeAfterPresets[activePreset];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-[#FFF8F5] text-slate-900 space-y-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1. HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 pt-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-600 animate-pulse" />
            <span>Proven Case Studies & Engineering Excellence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            Our Enterprise <span className="text-gradient">Portfolio & Results</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            Explore how we engineer mission-critical web applications, mobile platforms, and AI systems that drive multi-million dollar growth for global business leaders.
          </p>
        </motion.div>

        {/* 2. COMPANY IMPACT BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl border border-slate-800"
        >
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest">Company Impact</span>
            <h2 className="text-2xl sm:text-3xl font-black">Engineering Digital Success Across Industries</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              From startups to enterprise organizations, we have successfully delivered scalable web applications, mobile apps, AI solutions, cloud platforms, and enterprise software that help businesses innovate, grow, and achieve measurable results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-white/10 text-center">
            {[
              { val: '250+', label: 'Projects Delivered' },
              { val: '98%', label: 'Client Satisfaction' },
              { val: '50+', label: 'Global Clients' },
              { val: '15+', label: 'Industries Served' },
              { val: '8+', label: 'Countries Reached' }
            ].map((st, sIdx) => (
              <div key={sIdx} className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-sky-400 block">{st.val}</span>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">{st.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. BEFORE VS AFTER COMPARISON WITH 3 INTERACTIVE PRESETS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Interactive Redesign Showcase</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Legacy Platform vs. TecVor Redesign</h2>
              <p className="text-slate-500 text-xs mt-1">Select a industry showcase below and drag the slider to compare before vs. after.</p>
            </div>

            {/* Showcase Presets Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {beforeAfterPresets.map((pr, prIdx) => (
                <button
                  key={prIdx}
                  onClick={() => { setActivePreset(prIdx); setBeforeAfterPos(50); }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                    activePreset === prIdx
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {pr.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden select-none border border-slate-200 shadow-xl bg-slate-900">
            {/* After Image (Full width background) */}
            <div className="absolute inset-0">
              <img 
                src={currentPreset.afterImg} 
                alt="TecVor Redesign Platform" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3.5 py-1 rounded-full text-xs font-black shadow-md border border-white/20 flex items-center gap-1.5">
                <span>✨ AFTER: {currentPreset.afterTitle}</span>
                <span className="bg-emerald-700 px-2 py-0.5 rounded-full text-[10px]">⚡ {currentPreset.afterScore}</span>
              </div>
            </div>

            {/* Before Image (Clipped overlay width based on slider) */}
            <div 
              className="absolute inset-y-0 left-0 border-r-4 border-sky-500 overflow-hidden shadow-2xl transition-all duration-75"
              style={{ width: `${beforeAfterPos}%` }}
            >
              <img 
                src={currentPreset.beforeImg} 
                alt="Legacy Outdated Website" 
                className="absolute top-0 left-0 max-w-none h-full object-cover"
                style={{ width: '100%', minWidth: '800px' }}
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-slate-200 px-3 py-1 rounded-full text-xs font-black shadow-md border border-white/20 flex items-center gap-1.5">
                <span>⚠️ BEFORE: {currentPreset.beforeTitle}</span>
                <span className="bg-rose-600 text-white px-2 py-0.5 rounded-full text-[10px]">{currentPreset.beforeScore}</span>
              </div>
            </div>

            {/* Interactive Drag Handle Slider Input */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={beforeAfterPos} 
              onChange={(e) => setBeforeAfterPos(Number(e.target.value))} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            {/* Vertical Divider Indicator Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `${beforeAfterPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-sky-600 border-2 border-white shadow-2xl flex items-center justify-center text-white text-xs font-black">
                ↔
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. CLIENT SUCCESS METRICS */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-6 shadow-sm"
        >
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Real Business Outcomes</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Proven ROI & Client Success Metrics</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { val: '🚀 340%', label: 'Avg Increase in Conversions' },
              { val: '⚡ 65%', label: 'Faster Website Speed' },
              { val: '📈 220%', label: 'Growth in User Engagement' },
              { val: '💰 180%', label: 'Increase in Revenue' },
              { val: '⭐ 98%', label: 'Client Satisfaction Rate' },
              { val: '🔒 Enterprise', label: 'Security Standards' }
            ].map((m, mIdx) => (
              <div key={mIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-all">
                <span className="text-xl sm:text-2xl font-black text-slate-900 block">{m.val}</span>
                <span className="text-[11px] font-extrabold text-slate-600 leading-tight block pt-1">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. TECHNOLOGY EXPERTISE */}
        <section className="glass-card bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-6 shadow-sm">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Tech Stack</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Technologies We Master</h2>
            <p className="text-xs text-slate-600 font-medium">Industry-leading frameworks and cloud technologies we use to engineer high-impact solutions.</p>
          </div>

          {/* Tech Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { key: 'frontend', label: 'Frontend' },
              { key: 'backend', label: 'Backend' },
              { key: 'database', label: 'Database' },
              { key: 'cloud', label: 'Cloud & DevOps' },
              { key: 'ai', label: 'AI & Automation' }
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTechCategory(t.key as any)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeTechCategory === t.key
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {techCategories[activeTechCategory].map((techName, tIdx) => (
              <span key={tIdx} className="px-4 py-2 rounded-2xl bg-sky-50 border border-sky-200 text-sky-800 text-xs font-black shadow-sm">
                ⚡ {techName}
              </span>
            ))}
          </div>
        </section>

        {/* 6. PORTFOLIO CATEGORIES */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Featured Case Studies</h2>
              <p className="text-xs text-slate-500">Filter engineered projects by platform category</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'web', label: 'Web Applications' },
                { id: 'mobile', label: 'Mobile Apps' },
                { id: 'ai', label: 'AI & Automation' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 7. PORTFOLIO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Project Image Header */}
                    <div className="relative h-60 overflow-hidden bg-slate-900">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider border border-white/20">
                          {p.badge}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold">
                          ⭐ {p.lighthouseScore}
                        </span>
                      </div>

                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md transition-transform hover:scale-110 flex items-center justify-center"
                          title="Visit Live Site"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className="text-[11px] font-bold text-sky-600 uppercase tracking-widest block">{p.client} • {p.country}</span>
                        <h3 className="text-xl font-black text-slate-900 pt-1 leading-snug group-hover:text-sky-600 transition-colors">
                          {p.title}
                        </h3>
                      </div>

                      {/* Enriched Metadata Grid */}
                      <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-700">
                        <div><span className="text-slate-400 block text-[9px] uppercase">Industry</span>{p.industry}</div>
                        <div><span className="text-slate-400 block text-[9px] uppercase">Team Size</span>{p.teamSize}</div>
                      </div>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {p.description}
                      </p>

                      {/* Key Business Result */}
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Result: {p.results}</span>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProjectModal(p)}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-sky-600 hover:text-blue-700 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View Details</span>
                    </button>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-500 hover:text-slate-900 underline flex items-center gap-1"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* 8. INDUSTRIES WE SERVE */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Domain Expertise</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Industries We Serve</h2>
            <p className="text-xs text-slate-600 font-medium">Custom software solutions tailored for diverse commercial sectors.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((ind, iIdx) => {
              const Icon = ind.icon;
              return (
                <div key={iIdx} className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:border-sky-500 transition-colors">
                  <div className={`w-10 h-10 rounded-xl ${ind.color} mx-auto flex items-center justify-center shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-800 block">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. DEVELOPMENT PROCESS */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Timeline & Quality</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Our Engineering Development Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {developmentSteps.map((step, sIdx) => (
              <div key={sIdx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
                <span className="text-2xl font-black text-slate-300">{step.step}</span>
                <h3 className="text-sm font-extrabold text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. WHY CLIENTS CHOOSE TECVOR */}
        <section className="glass-card bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-6 shadow-sm">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Why Choose Us</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Why Global Clients Choose TecVor</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUsCards.map((card, cIdx) => {
              const Icon = card.icon;
              return (
                <div key={cIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-sky-500 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 11. TESTIMONIALS 20-CLIENT INFINITE SCROLLING CAROUSEL WITH HOVER PAUSE & COMMENT BUBBLE UI */}
        <section 
          className="space-y-6 overflow-hidden"
          onMouseEnter={() => setIsTestimonialsHovered(true)}
          onMouseLeave={() => setIsTestimonialsHovered(false)}
        >
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-extrabold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
              <span>Verified Client Comments ({isTestimonialsHovered ? 'Paused for Reading ⏸️' : 'Hover to Pause ⏸️'})</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">What 20+ Enterprise Leaders Say</h2>
            <p className="text-xs text-slate-500 font-medium">Authentic feedback from verified corporate leaders & CTOs worldwide.</p>
          </div>

          {/* Row 1: Left Scroll Marquee */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FFF8F5] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FFF8F5] to-transparent z-10 pointer-events-none" />

            <motion.div 
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 35 }}
              className="flex gap-6 w-max"
            >
              {[...testimonials.slice(0, 10), ...testimonials.slice(0, 10)].map((t, tIdx) => (
                <div 
                  key={tIdx} 
                  className="w-80 sm:w-96 p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between flex-shrink-0 hover:border-sky-500 transition-all hover:shadow-lg relative group cursor-pointer"
                >
                  {/* Comment Bubble Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-sky-100 shadow-sm" />
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white absolute bottom-0 right-0" title="Verified Client" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900 flex items-center gap-1">
                          <span>{t.name}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 fill-sky-100" />
                        </h4>
                        <span className="text-[10px] text-slate-500 font-semibold block">{t.role}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex text-amber-400 text-xs">
                        {'⭐'.repeat(t.rating)}
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 block pt-0.5">Verified Comment</span>
                    </div>
                  </div>

                  {/* Comment Bubble Body */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium leading-relaxed relative">
                    <span className="text-sky-400 font-black text-base leading-none block pb-1">“</span>
                    {t.review}
                  </div>

                  {/* Comment Footer */}
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px]">
                    <span className="font-extrabold text-sky-600 uppercase tracking-wider">Project: {t.project}</span>
                    <span className="text-slate-400 font-semibold">Verified Review ✓</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right Scroll Marquee */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FFF8F5] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FFF8F5] to-transparent z-10 pointer-events-none" />

            <motion.div 
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 38 }}
              className="flex gap-6 w-max"
            >
              {[...testimonials.slice(10, 20), ...testimonials.slice(10, 20)].map((t, tIdx) => (
                <div 
                  key={tIdx} 
                  className="w-80 sm:w-96 p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between flex-shrink-0 hover:border-sky-500 transition-all hover:shadow-lg relative group cursor-pointer"
                >
                  {/* Comment Bubble Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-sky-100 shadow-sm" />
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white absolute bottom-0 right-0" title="Verified Client" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900 flex items-center gap-1">
                          <span>{t.name}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 fill-sky-100" />
                        </h4>
                        <span className="text-[10px] text-slate-500 font-semibold block">{t.role}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex text-amber-400 text-xs">
                        {'⭐'.repeat(t.rating)}
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 block pt-0.5">Verified Comment</span>
                    </div>
                  </div>

                  {/* Comment Bubble Body */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium leading-relaxed relative">
                    <span className="text-sky-400 font-black text-base leading-none block pb-1">“</span>
                    {t.review}
                  </div>

                  {/* Comment Footer */}
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px]">
                    <span className="font-extrabold text-sky-600 uppercase tracking-wider">Project: {t.project}</span>
                    <span className="text-slate-400 font-semibold">Verified Review ✓</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 12. RECOGNITION & ACHIEVEMENTS */}
        <section className="glass-card bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white p-8 rounded-3xl shadow-xl border border-slate-800">
          <div className="text-center space-y-2 pb-6">
            <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest">Achievements</span>
            <h2 className="text-2xl sm:text-3xl font-black">Recognition & Scale</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            {[
              { num: '250+', label: 'Projects' },
              { num: '98%', label: 'Satisfaction' },
              { num: '50+', label: 'Businesses' },
              { num: '8+', label: 'Countries' },
              { num: '99.9%', label: 'Uptime' },
              { num: '100K+', label: 'Users Impacted' }
            ].map((ach, aIdx) => (
              <div key={aIdx} className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl font-black text-sky-400 block">{ach.num}</span>
                <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider block pt-1">{ach.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 13. FAQ SECTION */}
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

        {/* 14. FINAL CTA BANNER */}
        <section className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black">Ready to Build Your Next Digital Product?</h2>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed pt-1">
              Partner with TecVor Technologies to transform your ideas into secure, scalable, and high-performing digital solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-white text-sky-700 font-black text-xs hover:bg-sky-50 transition-all shadow-lg flex items-center gap-2"
            >
              <Rocket className="w-4 h-4 text-sky-600" />
              <span>Start Your Project</span>
            </button>
            
            <button
              onClick={() => onOpenCalendly ? onOpenCalendly() : onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-black text-xs border border-white/30 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Schedule a Free Consultation</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-slate-900/40 hover:bg-slate-900/60 text-white font-black text-xs border border-white/20 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-sky-300" />
              <span>Request a Proposal</span>
            </button>
          </div>
        </section>

      </div>

      {/* QUICK VIEW PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8"
            >
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
                  {selectedProjectModal.client} • {selectedProjectModal.country}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{selectedProjectModal.title}</h3>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-900">
                <img src={selectedProjectModal.image} alt={selectedProjectModal.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                  ⚡ Lighthouse: {selectedProjectModal.lighthouseScore}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Architecture Overview & Impact</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{selectedProjectModal.caseStudyDetails}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-black flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified Outcome: {selectedProjectModal.results}</span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Technologies Leveraged</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProjectModal.tech.map((t: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 text-xs font-extrabold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                {selectedProjectModal.liveUrl && (
                  <a
                    href={selectedProjectModal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-sm flex items-center gap-1.5"
                  >
                    <span>Visit Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => { setSelectedProjectModal(null); onNavigate('contact'); }}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5"
                >
                  <span>Build Similar Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
