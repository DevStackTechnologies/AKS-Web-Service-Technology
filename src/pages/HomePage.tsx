import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuickAccessDock } from '../components/tools/QuickAccessDock';
import { 
  Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Cpu, Code, Server, 
  Database, Layers, Smartphone, Bot, CheckCircle2, Star, Play, 
  HelpCircle, ChevronDown, Calculator, MessageSquare, TrendingUp, 
  Award, Users, Clock, Mail, Phone, ExternalLink, RefreshCw,
  Search, Target, Rocket, Layout, Laptop, ChevronLeft, ChevronRight,
  User, Send, Folder
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string, jobId?: string) => void;
  onOpenAi: () => void;
  onOpenCalendly: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenAi, 
  onOpenCalendly 
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [topNotchImgIdx, setTopNotchImgIdx] = useState<number>(0);
  const [isHoveredDeck, setIsHoveredDeck] = useState<boolean>(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSent, setNewsletterSent] = useState<boolean>(false);
  const [isTestimonialsHovered, setIsTestimonialsHovered] = useState<boolean>(false);

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
      role: 'Product Manager, QuickRide India',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'QuickRide Driver Dispatch App',
      review: 'Live driver tracking and battery-efficient geolocation modules engineered by AKS reduced dispatch drop-offs by 42%.'
    },
    {
      name: 'Lucas Rossi',
      role: 'CEO, BellaCasa Italy',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'BellaCasa Furniture AR Studio',
      review: 'Customers can place 3D photorealistic Italian furniture inside their living rooms using our AKS-built WebXR app. Incredible conversion lift!'
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Director, MedPulse Diagnostics',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'MedPulse Diagnostic Report Portal',
      review: 'Automated WhatsApp PDF report delivery and barcode patient tracking built by AKS delivered a 100% paperless clinic workflow.'
    },
    {
      name: 'Ethan Hunt',
      role: 'VP Tech, CyberGuard SaaS',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'CyberGuard SOC Compliance Tool',
      review: 'Automated SOC2 audit logs and IAM role-based permission matrices developed by AKS passed external security audits with flying colors.'
    },
    {
      name: 'Tanvi Agarwal',
      role: 'Founder, OrganicRoot Superfoods',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'OrganicRoot Hyperlocal Grocery App',
      review: 'Ultra-fast 30-minute hyperlocal delivery app with live inventory sync built by AKS enabled us to scale across 12 cities profitably.'
    }
  ];

  const topNotchShowcaseImages = [
    {
      id: 0,
      title: 'Top-Notch Web Solutions & Full-Stack Apps',
      tag: '01 / 10 • Web Engineering',
      src: '/images/top-notch-solutions.png',
      badge: 'React & Next.js 15'
    },
    {
      id: 1,
      title: 'Real-Time SaaS Metrics & Dark Analytics',
      tag: '02 / 10 • SaaS Dashboards',
      src: '/images/card-metrics-dark.png',
      badge: '2.1M Live Metrics'
    },
    {
      id: 2,
      title: 'High-Impact Brand Identity & Growth Deck',
      tag: '03 / 10 • Brand & Scale',
      src: '/images/card-brand-red.png',
      badge: '+240% Growth'
    },
    {
      id: 3,
      title: 'Strategic Market Opportunity & AI Blueprint',
      tag: '04 / 10 • Digital Architecture',
      src: '/images/card-opportunity-light.png',
      badge: '2.06M Engagement'
    },
    {
      id: 4,
      title: 'Native & Flutter Mobile App Development',
      tag: '05 / 10 • iOS & Android',
      src: '/images/showcase-mobile.png',
      badge: '60fps Native Apps'
    },
    {
      id: 5,
      title: 'Scalable E-Commerce & Stripe Storefronts',
      tag: '06 / 10 • E-Commerce Platforms',
      src: '/images/showcase-ecommerce.png',
      badge: 'Shopify Plus & Stripe'
    },
    {
      id: 6,
      title: 'Custom AI Agents & OpenAI LLM Pipelines',
      tag: '07 / 10 • AI & Neural Workflows',
      src: '/images/showcase-ai.png',
      badge: 'Autonomous AI RAG'
    },
    {
      id: 7,
      title: 'Luxury UI/UX Design Systems & Micro-Interactions',
      tag: '08 / 10 • UI/UX Luxury Design',
      src: '/images/showcase-uiux.png',
      badge: 'Glassmorphism Design'
    },
    {
      id: 8,
      title: 'AWS Cloud Clusters & DevOps Infrastructure',
      tag: '09 / 10 • DevOps & Cloud',
      src: '/images/showcase-devops.png',
      badge: '99.99% Uptime SLA'
    },
    {
      id: 9,
      title: 'Agile Strategy & Technical Engineering Meeting',
      tag: '10 / 10 • Dedicated IT Team',
      src: '/images/why-choose-us.png',
      badge: '3+ Years Experience'
    }
  ];

  // Auto-cycle deck images every 3.5s when not hovered
  useEffect(() => {
    if (isHoveredDeck) return;
    const interval = setInterval(() => {
      setTopNotchImgIdx((prev) => (prev + 1) % topNotchShowcaseImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHoveredDeck, topNotchShowcaseImages.length]);

  const deckCards = [
    {
      id: 0,
      badge: '01. PROCESS & METRICS',
      title: 'DISCOVER, DIRECTION & DESIGN',
      desc: 'Next-Gen Agile Engineering & Full-Stack Cloud Architecture',
      theme: 'dark',
      bgGradient: 'from-slate-950 via-slate-900 to-slate-950',
      textColor: 'text-white',
      borderColor: 'border-slate-700/80 shadow-2xl',
      image: '/images/card-metrics-dark.png',
      accent: 'text-sky-400',
      badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
      stats: [
        { label: 'METRICS', val: '2.1M' },
        { label: 'QUERIES', val: '55K' },
        { label: 'LATENCY', val: '12ms' }
      ],
      tags: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      id: 1,
      badge: '02. BRAND & SCALE',
      title: 'ENTERPRISE PRODUCTION LAUNCH',
      desc: 'High-Impact Brand Identity & Global Conversion Engineering',
      theme: 'red',
      bgGradient: 'from-rose-600 via-red-600 to-rose-700',
      textColor: 'text-white',
      borderColor: 'border-rose-400/80 shadow-2xl shadow-rose-900/30',
      image: '/images/card-brand-red.png',
      accent: 'text-amber-300',
      badgeBg: 'bg-white/20 text-white border-white/30',
      stats: [
        { label: 'GROWTH', val: '+240%' },
        { label: 'LOAD TIME', val: '0.4s' },
        { label: 'CONVERSION', val: '4.8x' }
      ],
      tags: ['E-Commerce', 'Stripe', 'Microservices', 'GraphQL']
    },
    {
      id: 2,
      badge: '03. OPPORTUNITY & GAP',
      title: 'STRATEGIC DIGITAL POSITIONING',
      desc: 'Autonomous AI Workflows, Analytics & Scalable SaaS Systems',
      theme: 'light',
      bgGradient: 'from-white via-slate-50 to-slate-100',
      textColor: 'text-slate-900',
      borderColor: 'border-slate-200 shadow-2xl',
      image: '/images/card-opportunity-light.png',
      accent: 'text-teal-600',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      stats: [
        { label: 'ENGAGEMENT', val: '2.06M' },
        { label: 'ACTIVE SESSIONS', val: '160K' },
        { label: 'GLOBAL REACH', val: '100%' }
      ],
      tags: ['OpenAI LLM', 'Vector DB', 'AWS Cloud', 'Docker']
    }
  ];

  const clientLogos = [
    { name: 'Google', color: 'text-[#4285F4]', bg: 'bg-[#4285F4]/10 border-[#4285F4]/30' },
    { name: 'Microsoft', color: 'text-[#00A4EF]', bg: 'bg-[#00A4EF]/10 border-[#00A4EF]/30' },
    { name: 'AWS', color: 'text-[#FF9900]', bg: 'bg-[#FF9900]/10 border-[#FF9900]/30' },
    { name: 'WordPress', color: 'text-[#21759B]', bg: 'bg-[#21759B]/10 border-[#21759B]/30' },
    { name: 'Spotify', color: 'text-[#1DB954]', bg: 'bg-[#1DB954]/10 border-[#1DB954]/30' },
    { name: 'Shopify', color: 'text-[#96BF48]', bg: 'bg-[#96BF48]/10 border-[#96BF48]/30' },
    { name: 'Stripe', color: 'text-[#635BFF]', bg: 'bg-[#635BFF]/10 border-[#635BFF]/30' },
    { name: 'Vercel', color: 'text-slate-900', bg: 'bg-slate-900/10 border-slate-900/30' },
    { name: 'Meta', color: 'text-[#0668E1]', bg: 'bg-[#0668E1]/10 border-[#0668E1]/30' },
    { name: 'Netflix', color: 'text-[#E50914]', bg: 'bg-[#E50914]/10 border-[#E50914]/30' },
  ];

  const services = [
    { id: 'web', title: 'Website Development', icon: Globe, desc: 'Ultra-fast Next.js & React web applications optimized for conversions.', count: '120+ Built' },
    { id: 'mobile', title: 'Mobile App Development', icon: Smartphone, desc: 'Native & Flutter iOS/Android apps with offline sync and 60fps performance.', count: '85+ Apps' },
    { id: 'uiux', title: 'UI/UX Luxury Design', icon: Layers, desc: 'High-converting light glassmorphic visual design systems & micro-interactions.', count: '200+ Audits' },
    { id: 'ai', title: 'AI Solutions & LLMs', icon: Bot, desc: 'Custom AI agents, RAG document pipelines, and OpenAI API automation models.', count: '45+ Deployed' },
    { id: 'automation', title: 'Workflow Automation', icon: Zap, desc: 'Zapier, Make, and custom python backend automation pipelines.', count: '300+ Flows' },
    { id: 'ecommerce', title: 'E-commerce Platforms', icon: TrendingUp, desc: 'Scalable Shopify Plus, WooCommerce, and headless Stripe custom storefronts.', count: '₹400 Cr+ Sales' },
    { id: 'cloud', title: 'Cloud Infrastructure', icon: Server, desc: 'AWS, GCP, Vercel & Docker DevOps clusters with 99.99% uptime SLAs.', count: 'Zero Downtime' },
    { id: 'api', title: 'API Integration & GraphQL', icon: Code, desc: 'Robust RESTful & GraphQL microservice APIs engineered for enterprise scale.', count: '5M+ Calls/day' },
    { id: 'consulting', title: 'IT Strategy Consulting', icon: ShieldCheck, desc: 'CTO-as-a-Service, architecture reviews, and cybersecurity compliance audits.', count: '50+ Advisors' },
  ];

  const processSteps = [
    { step: '01', icon: Search, title: 'Discovery & Audit', desc: 'In-depth analysis of your business goals, competitors, and technical requirements.' },
    { step: '02', icon: Target, title: 'Strategy & Research', desc: 'Creating product blueprints, user personas, and data architecture maps.' },
    { step: '03', icon: Layout, title: 'UX/UI Wireframing', desc: 'Designing luxury glassmorphic prototypes with interactive motion flows.' },
    { step: '04', icon: Code, title: 'Agile Engineering', desc: 'Clean, type-safe Next.js/Node code built with automated CI/CD pipelines.' },
    { step: '05', icon: ShieldCheck, title: 'QA & Security Testing', desc: 'Vulnerability penetration testing, load testing, and Core Web Vitals audit.' },
    { step: '06', icon: Rocket, title: 'Global Launch & SLA', desc: 'Zero-downtime deployment on cloud CDN with 24/7 proactive monitoring.' },
  ];

  const techStack = [
    { name: 'React', icon: Code, color: 'text-sky-600' },
    { name: 'Next.js', icon: Globe, color: 'text-slate-800' },
    { name: 'Node.js', icon: Server, color: 'text-emerald-600' },
    { name: 'Express', icon: Code, color: 'text-slate-700' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'Firebase', icon: Zap, color: 'text-amber-600' },
    { name: 'Flutter', icon: Smartphone, color: 'text-sky-500' },
    { name: 'WordPress', icon: Layers, color: 'text-blue-600' },
    { name: 'Laravel', icon: Code, color: 'text-rose-600' },
    { name: 'AWS Cloud', icon: Server, color: 'text-orange-600' },
    { name: 'Docker', icon: Layers, color: 'text-blue-600' },
    { name: 'AI Models', icon: Bot, color: 'text-purple-600' },
  ];

  const faqs = [
    { q: 'How long does a typical custom web platform take to develop?', a: 'Standard web applications take between 3 to 6 weeks, while complex enterprise SaaS portals take 8 to 12 weeks. We also offer express 2-week sprints.' },
    { q: 'What tech stack do you use for high-performance apps?', a: 'Our core stack includes Next.js, React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and AWS/Vercel cloud infrastructure.' },
    { q: 'Do you provide post-launch maintenance and SLA support?', a: 'Yes! We offer 24/7 proactive monitoring, security patch updates, daily cloud backups, and dedicated developer hours.' },
    { q: 'Can you sign a non-disclosure agreement (NDA) before starting?', a: 'Absolutely. We enforce strict confidentiality with mutual legally binding NDAs prior to reviewing proprietary project assets.' },
  ];

  return (
    <div className="space-y-10 pb-8 bg-[#FFF8F5] text-slate-900 overflow-hidden">

      {/* LANDING PAGE HERO WITH 100% CRYSTAL CLEAR BACKGROUND */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800 shadow-2xl">
        
        {/* 100% Ultra-Sharp 4K Background Image (Hardware Accelerated Pixel Clarity) */}
        <motion.div 
          animate={{ scale: [1, 1.02, 1], y: [0, -6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          <img 
            src="/images/hero-innovative-solutions.png" 
            alt="Hero Innovative Solutions Background" 
            className="w-full h-full object-cover object-center opacity-100 image-4k-crisp"
          />
        </motion.div>

        {/* Minimal Subtle Tint to preserve maximum 4K visual sharpness */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/70 pointer-events-none z-0" />
        
        {/* Floating Futuristic Ambient Light Orbs */}
        <motion.div 
          animate={{ y: [0, -25, 0], scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-400/20 to-[#0A4EDB]/25 rounded-full blur-[100px] pointer-events-none z-0" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-[#139EF8]/25 to-indigo-500/25 rounded-full blur-[90px] pointer-events-none z-0" 
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto relative z-10 text-center space-y-8"
        >
          
          {/* Animated Badge with Glowing Ring */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-sky-400/50 text-sky-300 text-xs font-black uppercase tracking-widest shadow-2xl backdrop-blur-md hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8] animate-pulse" />
            <span>Next-Gen Enterprise Web & AI Engineering Agency</span>
          </motion.div>

          {/* Original Headline with Crisp White & Electric Blue Gradient */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-5xl mx-auto text-white drop-shadow-2xl"
          >
            We Build <span className="bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-lg">Premium Digital Experiences</span> That Grow Businesses.
          </motion.h1>

          {/* Original Subheadline with High Readability */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-md"
          >
            TecVor Technologies crafts ultra-fast web platforms, mobile apps, and autonomous AI systems designed for category leaders and high-growth enterprises.
          </motion.p>

          {/* Original CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCalendly}
              className="px-9 py-4 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] hover:shadow-2xl transition-all flex items-center gap-2.5 shadow-xl shimmer-btn uppercase tracking-wider"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>

        </motion.div>
      </section>

      {/* INFINITE CLIENT LOGOS MARQUEE (BELOW HERO SECTION) */}
      <section className="py-4 bg-[#FFF8F5]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-4 relative px-4"
        >
          <p className="text-center text-xs font-black uppercase tracking-widest text-slate-500">
            Trusted by tech pioneers & Fortune 500 enterprises worldwide
          </p>
          
          {/* Outer Container with Gradient Mask */}
          <div className="overflow-hidden relative py-6 bg-white border border-slate-200 shadow-sm rounded-3xl">
            {/* Left Fog Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
            
            {/* Framer Motion Seamless Infinite Scroll Loop */}
            <motion.div
              className="flex items-center gap-6 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 22,
                  ease: 'linear',
                },
              }}
            >
              {clientLogos.concat(clientLogos).concat(clientLogos).concat(clientLogos).map((client, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.12, y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`px-6 py-2.5 rounded-2xl border text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-sm flex-shrink-0 cursor-pointer ${client.color} ${client.bg}`}
                >
                  {client.name}
                </motion.span>
              ))}
            </motion.div>

            {/* Right Fog Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* WHAT WE PROVIDE - TOP-NOTCH WEB SOLUTIONS SECTION (With 10-Image 3D Stacked Deck Inside Box) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-14 relative">
          {/* Subtle Decorative Background Elements */}
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border border-sky-100/80 pointer-events-none -z-0" />
          <div className="absolute -left-28 -bottom-28 w-96 h-96 rounded-full border border-sky-100/50 pointer-events-none -z-0" />
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-sky-50 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch relative z-10">
            {/* Left Column: 10-Image 3D Stacked & Cascading Deck Showcase inside Box */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative flex flex-col justify-center"
              onMouseEnter={() => setIsHoveredDeck(true)}
              onMouseLeave={() => setIsHoveredDeck(false)}
            >
              {/* 3D Stack Container strictly inside Box */}
              <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 flex items-center justify-center p-3 sm:p-5 perspective-[1000px]">
                
                {/* 3D Background Stacked Layer Cards (Like sample.mp4) */}
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Layer Card 3 (Bottom Depth) */}
                  <motion.div
                    animate={{
                      rotateX: 14,
                      rotateY: -8,
                      rotateZ: 6,
                      y: 35,
                      x: 20,
                      scale: 0.88,
                      opacity: 0.45,
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute inset-2 sm:inset-4 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl pointer-events-none"
                  >
                    <img
                      src={topNotchShowcaseImages[(topNotchImgIdx + 2) % topNotchShowcaseImages.length].src}
                      alt="Layer 3"
                      className="w-full h-full object-cover blur-[1px]"
                    />
                  </motion.div>

                  {/* Layer Card 2 (Mid Depth) */}
                  <motion.div
                    animate={{
                      rotateX: 12,
                      rotateY: -6,
                      rotateZ: -4,
                      y: 18,
                      x: -12,
                      scale: 0.94,
                      opacity: 0.75,
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute inset-2 sm:inset-4 rounded-2xl overflow-hidden border-2 border-slate-600 bg-slate-900 shadow-2xl pointer-events-none"
                  >
                    <img
                      src={topNotchShowcaseImages[(topNotchImgIdx + 1) % topNotchShowcaseImages.length].src}
                      alt="Layer 2"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Active Main Card (Top Focused with 3D Slide & Flip) */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={topNotchImgIdx}
                      initial={{ opacity: 0, scale: 0.92, rotateY: 15, y: -20 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, rotateY: -15, y: 20 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-20 w-full h-full rounded-2xl overflow-hidden border-2 border-white/40 shadow-2xl group cursor-pointer"
                      onClick={() => setTopNotchImgIdx((prev) => (prev + 1) % topNotchShowcaseImages.length)}
                    >
                      <img 
                        src={topNotchShowcaseImages[topNotchImgIdx].src} 
                        alt={topNotchShowcaseImages[topNotchImgIdx].title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Gradient Ambient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent pointer-events-none" />

                      {/* 3+ Years Of Experience Ribbon Badge */}
                      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-br-2xl shadow-xl flex items-center gap-2 border-b-2 border-r-2 border-white/40 backdrop-blur-md z-30">
                        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                        <span>3+ Years Of Experience</span>
                      </div>

                      {/* Image Chip Category Badge (Top Right) */}
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 z-30 shadow-md">
                        {topNotchShowcaseImages[topNotchImgIdx].badge}
                      </div>

                      {/* Bottom Floating Info Glass Bar inside Box */}
                      <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-lg flex items-center justify-between z-30">
                        <div>
                          <p className="text-white text-xs font-black tracking-tight">{topNotchShowcaseImages[topNotchImgIdx].title}</p>
                          <p className="text-sky-300 text-[10px] font-bold">{topNotchShowcaseImages[topNotchImgIdx].tag}</p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          {topNotchImgIdx + 1} / {topNotchShowcaseImages.length}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                </div>

                {/* Left / Right Arrow Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTopNotchImgIdx((prev) => (prev === 0 ? topNotchShowcaseImages.length - 1 : prev - 1));
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/30 backdrop-blur-md shadow-lg transition-all"
                  title="Previous Image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTopNotchImgIdx((prev) => (prev + 1) % topNotchShowcaseImages.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/30 backdrop-blur-md shadow-lg transition-all"
                  title="Next Image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* 10 Mini Thumbnail / Dot Navigators at Bottom */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 py-1">
                  {topNotchShowcaseImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTopNotchImgIdx(dotIdx);
                      }}
                      className={`transition-all rounded-full ${
                        topNotchImgIdx === dotIdx 
                          ? 'w-6 h-1.5 bg-sky-400' 
                          : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      title={`Slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

              </div>

              {/* Background Decorative Gradient Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/20 via-[#0A4EDB]/20 to-blue-600/20 rounded-[32px] -z-10 blur-md" />
            </motion.div>

            {/* Right Column: Content & Checkmarks */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 flex flex-col justify-center"
            >
              <div className="space-y-2">
                <div className="inline-block border-b-2 border-[#0A4EDB] pb-0.5">
                  <span className="text-[#0A4EDB] text-sm font-extrabold uppercase tracking-wider">What we provide</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  We Provide Top-notch <br />
                  <span className="text-gradient">Web Solutions & Digital Growth</span>
                </h2>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                TecVor Technologies was established specializing in Web app development, Mobile App Development, E-commerce, Branding, SEO & Digital Marketing, and high-performance cloud hosting services. We also deliver end-to-end CRM Solutions, HRM Solutions, ERP Systems, and customized software products tailored for modern growth.
              </p>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                During these years, the company has built up an impressive list of successful clients. We work with our partners to build stronger value-added relationships by helping them increase the profitability and digital reach of their business. Our success is entirely the success of our clients.
              </p>

              {/* 3 Key bullet points */}
              <div className="space-y-3 pt-2">
                {[
                  'We deliver exceptional web solutions every time',
                  'Your go-to provider for premium web & software services',
                  'Quality web solutions tailored to your unique business needs'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                    <div className="w-5 h-5 rounded-full bg-sky-50 border border-sky-200 text-[#0A4EDB] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 rounded-2xl text-xs font-black text-white bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenCalendly}
                  className="px-6 py-3 rounded-2xl text-xs font-black text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  Contact Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (Matching Template Design) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-900 via-cyan-950 to-slate-900 rounded-3xl text-white shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 flex flex-col justify-center"
            >
              <div className="space-y-2">
                <div className="inline-block border-b-2 border-teal-400 pb-0.5">
                  <span className="text-teal-400 text-xs font-extrabold uppercase tracking-wider">
                    TecVor Technologies
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  See why you should <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-sky-300">
                    choose TecVor Technologies
                  </span>
                </h2>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                As a website and software development company, we ensure each project is completed with precision, maintaining a smooth and efficient workflow. Our approach ensures steady progress and timely, high-quality results.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-1.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">One Stop Destination</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    In this busy world, everyone needs to get all digital services—design, development, AI & cloud—under one roof.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-1.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Technical Expertise</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    We specialize in Web apps, Mobile apps, E-commerce, Branding, SEO, Digital Marketing & custom software engineering.
                  </p>
                </div>

                <div className="sm:col-span-2 p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-1.5">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Innovation & Ideas</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    The success of every company depends on transforming new ideas into modern, scalable digital products that lead the market.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative flex flex-col"
            >
              <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group flex flex-col">
                <img 
                  src="/images/why-choose-us.png" 
                  alt="TecVor Technologies Team Strategy Meeting" 
                  className="w-full h-full flex-1 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
                  <p className="text-xs font-bold text-white">3+ Years of Delivering Digital Excellence</p>
                  <p className="text-[10px] text-teal-300">Over 150+ Enterprise Projects Deployed</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT US & STATISTICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
              Company Mission & Vision
            </div>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight text-slate-900">
              Pioneering <span className="text-gradient">Digital Architecture</span> Since 2020.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded on the principles of engineering precision and aesthetic perfection, TecVor Technologies bridges complex backend infrastructure with mesmerizing frontend user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <motion.div whileHover={{ y: -4 }} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase">Mission</span>
                <p className="text-xs text-slate-600">Empower global businesses with high-converting, scalable software.</p>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <span className="text-xs font-bold text-blue-600 uppercase">Vision</span>
                <p className="text-xs text-slate-600">To be the #1 rated full-stack digital transformation agency globally.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {[
              { num: '150+', label: 'Projects Delivered', desc: 'Web, Mobile & AI platforms' },
              { num: '99.4%', label: 'Client Satisfaction', desc: '5-Star average rating' },
              { num: '3+ Years', label: 'Years of Experience', desc: 'Proven engineering excellence' },
              { num: '24/7', label: 'Enterprise SLA', desc: 'Round-the-clock support' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05, translateY: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 transition-all shadow-md space-y-2 cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-black text-gradient">{stat.num}</div>
                <div className="text-xs font-bold text-slate-800">{stat.label}</div>
                <div className="text-[11px] text-slate-500">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </section>

      {/* SERVICES HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            End-to-End Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            Our Enterprise <span className="text-gradient">Services & Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-sm">
            Custom engineered software services tailored for modern scalability, bulletproof security, and seamless user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => onNavigate('services')}
                className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xl transition-all duration-300 cursor-pointer space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors">{s.title}</h3>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{s.count}</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-sky-600 pt-2">
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Agile Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            Our 6-Step <span className="text-gradient">Engineering Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((p, idx) => {
            const StepIcon = p.icon;
            return (
              <motion.div 
                key={p.step} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 relative overflow-hidden group hover:border-sky-400 transition-all shadow-sm"
              >
                <span className="text-4xl font-black text-slate-300 group-hover:text-sky-500/40 transition-colors absolute top-4 right-4 select-none">
                  {p.step}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                  <StepIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{p.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TECHNOLOGIES ECOSYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Our Technology <span className="text-gradient">Stack & Matrix</span>
          </h2>
          <p className="text-slate-600 text-xs">Battle-tested tools and modern frameworks we master.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 text-center space-y-2 transition-all shadow-sm group cursor-default"
              >
                <Icon className={`w-8 h-8 mx-auto ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-bold text-slate-800 block">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CLIENT TESTIMONIALS (Continuous Smooth Infinite Marquee matching Portfolio Page) */}
      <section className="max-w-7xl mx-auto space-y-8 px-4 pause-hover">
        <div className="text-center space-y-2">
          <div className="inline-block border-b-2 border-sky-500 pb-0.5">
            <span className="text-sky-600 text-xs font-black uppercase tracking-widest">
              Verified Client Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            What Category Leaders <span className="text-gradient">Say About Our Engineering</span>
          </h2>
          <p className="text-slate-600 text-xs max-w-xl mx-auto">
            Real feedback from founders, enterprise CTOs, and product directors who scaled with TecVor Technologies.
          </p>
        </div>

        {/* Dual-Row Marquee Container */}
        <div className="space-y-6 pt-4">
          
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

        </div>
      </section>

      {/* REACH US & QUICK MESSAGE INQUIRY (Candidate Portal Blue Palette) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <div className="space-y-1 text-center">
            <div className="inline-block border-b-2 border-[#0A4EDB] pb-0.5">
              <span className="text-[#0A4EDB] text-xs font-black uppercase tracking-wider">Reach Us</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
              Send a message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Have an idea or need custom software development? Tell us about your project requirements and our team will get back to you within 24 hours.
            </p>
          </div>

            {inquirySent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-2"
              >
                <CheckCircle2 className="w-10 h-10 text-[#0A4EDB] mx-auto" />
                <h4 className="text-lg font-black text-slate-900">Thank You! Your Message is Received.</h4>
                <p className="text-xs text-slate-600">Our engineering lead will connect with you in less than 24 hours.</p>
                <button
                  onClick={() => {
                    setInquirySent(false);
                    setInquiryForm({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-3 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white hover:brightness-110 shadow-md"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0A4EDB]" /> Your Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0A4EDB] focus:ring-2 focus:ring-sky-400/20 text-xs bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#0A4EDB]" /> Your Email *
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="Enter Your Email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0A4EDB] focus:ring-2 focus:ring-sky-400/20 text-xs bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#0A4EDB]" /> Phone Number
                    </label>
                    <input 
                      type="tel"
                      placeholder="Enter Your Number"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0A4EDB] focus:ring-2 focus:ring-sky-400/20 text-xs bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Folder className="w-3.5 h-3.5 text-[#0A4EDB]" /> Subject
                    </label>
                    <input 
                      type="text"
                      placeholder="Enter Your Subject"
                      value={inquiryForm.subject}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0A4EDB] focus:ring-2 focus:ring-sky-400/20 text-xs bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#0A4EDB]" /> Your Message (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Enter Your Message"
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0A4EDB] focus:ring-2 focus:ring-sky-400/20 text-xs bg-slate-50/50 resize-none"
                  />
                </div>

                {/* Candidate Portal Electric Blue Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-xs text-white bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] hover:opacity-95 shadow-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Submit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
        </div>
      </section>

      {/* CAREER OPPORTUNITIES BANNER (Candidate Portal Blue Gradient) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#0A4EDB] to-slate-950 text-white p-8 sm:p-12 text-center space-y-4 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="space-y-1">
            <span className="text-sky-300 text-xs font-black uppercase tracking-widest">Start Here</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Career Opportunities in TecVor Technologies
            </h3>
          </div>
          <p className="text-sky-100 text-xs sm:text-sm max-w-xl mx-auto">
            Join our high-performing team of software engineers, AI developers, and UI/UX designers building global tech products.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('careers')}
              className="px-8 py-3 rounded-full font-black text-xs text-[#0A4EDB] bg-white hover:bg-sky-50 shadow-lg transition-all"
            >
              Explore Openings / Apply
            </button>
          </div>
        </div>
      </section>

      {/* JOIN OUR MAILING LIST NEWSLETTER (Candidate Portal Electric Blue) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1A2031] via-[#0A4EDB] to-[#139EF8] text-white p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="border-l-4 border-[#38BDF8] pl-4 space-y-1 text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white">Join Our Mailing List</h4>
            <p className="text-xs text-[#CDD2DA]">For receiving our news and updates in your inbox directly.</p>
          </div>

          {newsletterSent ? (
            <div className="px-6 py-3 rounded-xl bg-white text-[#0A4EDB] text-xs font-bold shadow-md">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSent(true);
              }}
              className="flex w-full md:w-auto max-w-md bg-white rounded-xl overflow-hidden shadow-lg p-1"
            >
              <input 
                type="email"
                required
                placeholder="Your Email Address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-2 text-xs text-slate-800 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider rounded-lg transition-all flex-shrink-0"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-slate-600 text-xs">Everything you need to know about working with us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-sm font-bold text-slate-900"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-sky-600 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-slate-600 pt-3 border-t border-slate-100 mt-3 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 text-white shadow-2xl text-center space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black text-white relative z-10">
            Ready to Build Your Next Masterpiece?
          </h2>
          <p className="max-w-2xl mx-auto text-sky-100 text-sm relative z-10">
            Schedule your complimentary 30-minute technical architecture consultation today. No obligations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCalendly}
              className="px-8 py-4 rounded-2xl font-black text-xs text-slate-900 bg-white hover:bg-sky-50 transition-all flex items-center gap-2 shadow-lg"
            >
              <CalendarIcon className="w-4 h-4 text-sky-600" /> Book Consultation Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-2xl font-black text-xs text-white bg-white/20 hover:bg-white/30 transition-all border border-white/30"
            >
              Contact Engineering Team
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Floating Quick Access Dock - Exclusively for Home Page Hero Area */}
      <QuickAccessDock 
        onNavigate={onNavigate} 
        onOpenCalendly={onOpenCalendly} 
      />

    </div>
  );
};

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

