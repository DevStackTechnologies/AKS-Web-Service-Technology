import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Target, Eye, ShieldCheck, Heart, Users, Award, Globe, 
  Sparkles, CheckCircle2, Code, Cpu, Layers, ArrowRight, Laptop, 
  Smartphone, Database, Server, Settings, Zap, Building2, Stethoscope, 
  GraduationCap, ShoppingBag, Home, Landmark, Factory, Truck, Coffee, 
  Store, Briefcase, ChevronRight, HelpCircle
} from 'lucide-react';

interface AboutPageProps {
  onNavigate?: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const coreValues = [
    {
      title: 'Innovation',
      desc: 'We embrace new technologies and creative thinking to deliver cutting-edge solutions.',
      icon: Sparkles,
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-600'
    },
    {
      title: 'Integrity',
      desc: 'We believe in transparency, honesty, and building long-term trust with our clients.',
      icon: ShieldCheck,
      color: 'from-[#0A4EDB] to-[#139EF8]',
      textColor: 'text-[#0A4EDB]'
    },
    {
      title: 'Quality',
      desc: 'Every project is developed with attention to detail, performance, and reliability.',
      icon: Award,
      color: 'from-[#139EF8] to-[#38BDF8]',
      textColor: 'text-[#139EF8]'
    },
    {
      title: 'Collaboration',
      desc: 'Strong partnerships and teamwork are the foundation of our success.',
      icon: Users,
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-600'
    },
    {
      title: 'Customer First',
      desc: 'Understanding client goals and exceeding expectations is our highest priority.',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-600'
    },
    {
      title: 'Continuous Learning',
      desc: 'Technology evolves every day, and so do we through continuous improvement and skill development.',
      icon: Zap,
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-600'
    }
  ];

  const expertiseList = [
    { title: 'Custom Website Development', icon: Laptop },
    { title: 'Enterprise Web Applications', icon: Layers },
    { title: 'Mobile App Development', icon: Smartphone },
    { title: 'UI/UX Design Systems', icon: Code },
    { title: 'E-Commerce Solutions', icon: ShoppingBag },
    { title: 'AI & Automation Solutions', icon: Cpu },
    { title: 'Cloud Integration', icon: Server },
    { title: 'API Development', icon: Database },
    { title: 'CRM & ERP Solutions', icon: Settings },
    { title: 'Software Maintenance & Support', icon: ShieldCheck },
    { title: 'Digital Transformation', icon: Rocket },
    { title: 'Technical Consulting', icon: Globe }
  ];

  const whyChooseUs = [
    'Experienced Development Team',
    'Modern Technologies & Best Practices',
    'Transparent Development Process',
    'Secure & Scalable Solutions',
    'SEO-Friendly Development',
    'Responsive Design',
    'On-Time Project Delivery',
    'Dedicated Technical Support',
    'Long-Term Business Partnership',
    'Client-Centric Approach'
  ];

  const developmentSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding business goals and project requirements.' },
    { num: '02', title: 'Planning', desc: 'Creating project strategy, wireframes, and technical architecture.' },
    { num: '03', title: 'Design', desc: 'Designing modern, user-friendly, and engaging interfaces.' },
    { num: '04', title: 'Development', desc: 'Building secure, scalable, and high-performance applications.' },
    { num: '05', title: 'Testing', desc: 'Comprehensive quality assurance and performance optimization.' },
    { num: '06', title: 'Deployment', desc: 'Launching the project with complete support and monitoring.' },
    { num: '07', title: 'Maintenance', desc: 'Continuous updates, improvements, and technical assistance.' }
  ];

  const industriesServed = [
    { name: 'Information Technology', icon: Laptop },
    { name: 'Healthcare', icon: Stethoscope },
    { name: 'Education', icon: GraduationCap },
    { name: 'E-Commerce', icon: ShoppingBag },
    { name: 'Real Estate', icon: Home },
    { name: 'Finance', icon: Landmark },
    { name: 'Manufacturing', icon: Factory },
    { name: 'Logistics', icon: Truck },
    { name: 'Hospitality', icon: Coffee },
    { name: 'Startups', icon: Rocket },
    { name: 'Retail', icon: Store },
    { name: 'Corporate Enterprises', icon: Building2 }
  ];

  const techStackBadges = [
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 
    'Tailwind CSS', 'WordPress', 'Spotify API', 'Shopify', 'Flutter', 'REST APIs', 
    'Cloud Services', 'AI Integration', 'DevOps'
  ];

  return (
    <div className="space-y-10 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* 1. HERO SECTION */}
      <section className="text-center space-y-6 max-w-4xl mx-auto pt-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold uppercase tracking-wider"
        >
          <Rocket className="w-4 h-4 text-sky-600" />
          <span>About TecVor Technologies</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight"
        >
          Innovating Today.<br />
          <span className="text-gradient">Building Tomorrow.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto"
        >
          At TecVor Technologies, we are passionate about transforming ideas into powerful digital solutions. We specialize in creating modern websites, scalable web applications, mobile apps, enterprise software, and AI-powered solutions that help businesses grow in the digital world. Our focus is on innovation, quality, and long-term partnerships, delivering technology that drives measurable business success.
        </motion.p>
      </section>

      {/* 2. COMPANY OVERVIEW (WHO WE ARE) */}
      <section className="glass-card bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-widest">
            <Globe className="w-4 h-4" />
            <span>Company Overview</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Who We Are</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <span>
              TecVor Technologies is a technology-driven company committed to delivering innovative digital products and software solutions. We work with startups, small businesses, and enterprises to build secure, scalable, and user-friendly applications that solve real-world challenges.
            </span>
            <br /><br />
            <span>
              From concept to deployment, our experienced team combines creativity, technical expertise, and industry best practices to ensure every project meets the highest standards of quality and performance.
            </span>
          </p>
        </div>
      </section>

      {/* 3 & 4. MISSION & VISION GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* MISSION */}
        <motion.div 
          whileHover={{ translateY: -4 }}
          className="glass-card p-8 sm:p-10 space-y-4 bg-white border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md">
            <Target className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">Mission</span>
          <h3 className="text-2xl font-black text-slate-900">Our Mission</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To empower businesses with innovative, reliable, and future-ready digital solutions while helping organizations achieve sustainable growth through technology, creativity, and continuous innovation.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div 
          whileHover={{ translateY: -4 }}
          className="glass-card p-8 sm:p-10 space-y-4 bg-white border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
            <Eye className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">Vision</span>
          <h3 className="text-2xl font-black text-slate-900">Our Vision</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To become a globally recognized technology company known for delivering world-class software solutions, exceptional customer experiences, and innovative digital transformation services.
          </p>
        </motion.div>

      </section>

      {/* 5. CORE VALUES */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest">Core Values</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Our Values</h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">The core principles that drive our engineering standards and client relationships.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${val.color} text-white flex items-center justify-center shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6. WHAT WE DO (OUR EXPERTISE) */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Our Expertise</h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">End-to-end technology solutions crafted for high scalability and modern performance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {expertiseList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3 hover:border-sky-400 transition-colors">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-slate-800">{item.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. WHY CHOOSE AKS */}
      <section className="glass-card bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl space-y-10 shadow-sm">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Why Choose AKS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 pt-2">Why Businesses Choose Us</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">10 core pillars of engineering quality, strategic transparency, and long-term partnership.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: 'Experienced Development Team',
              desc: 'Certified software engineers, full-stack architects, and UI/UX specialists with deep technical domain expertise.',
              icon: Users
            },
            {
              title: 'Modern Technologies & Best Practices',
              desc: 'Built using React 19, Next.js, Node.js, TypeScript, and cloud-native microservices.',
              icon: Code
            },
            {
              title: 'Transparent Development Process',
              desc: 'Real-time project tracking, agile sprint cycles, clear milestones, and weekly demo updates.',
              icon: Eye
            },
            {
              title: 'Secure & Scalable Solutions',
              desc: 'Enterprise-grade OWASP security standards, JWT authentication, and cloud auto-scaling infrastructure.',
              icon: ShieldCheck
            },
            {
              title: 'SEO-Friendly Development',
              desc: 'Optimized semantic HTML5, fast Core Web Vitals, dynamic meta tags, and sub-second load times.',
              icon: Rocket
            },
            {
              title: 'Responsive Design',
              desc: 'Flawless glassmorphic UI performance across mobile, tablet, desktop, and ultra-wide displays.',
              icon: Smartphone
            },
            {
              title: 'On-Time Project Delivery',
              desc: 'Committed timelines with strict milestone tracking and reliable sprint delivery schedules.',
              icon: Award
            },
            {
              title: 'Dedicated Technical Support',
              desc: '24/7 post-deployment maintenance, SLA support, server health monitoring, and rapid bug resolution.',
              icon: HelpCircle
            },
            {
              title: 'Long-Term Business Partnership',
              desc: 'Strategic technology roadmaps, post-launch scaling guidance, and feature upgrades.',
              icon: Target
            },
            {
              title: 'Client-Centric Approach',
              desc: 'Customized solutions aligned strictly with your unique business goals and revenue targets.',
              icon: Heart
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500 hover:bg-sky-50/50 transition-all shadow-sm">
                <div className="p-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white flex-shrink-0 mt-0.5 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. OUR DEVELOPMENT PROCESS */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest">Our Development Process</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">How We Work</h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">A structured 7-step engineering roadmap built for reliability and clarity.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {developmentSteps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
              <span className="text-2xl font-black text-slate-300">{step.num}</span>
              <h3 className="text-base font-extrabold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. INDUSTRIES WE SERVE */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Domain Expertise Across Sectors</h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">Delivering high-impact technology solutions tailored to diverse industries.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industriesServed.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:border-sky-500 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 mx-auto flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-slate-800 block">{ind.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. TECHNOLOGY STACK & COMMITMENT */}
      <section className="glass-card bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8 shadow-sm">
        <div className="space-y-3 text-center">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest">Technology Stack</span>
          <h2 className="text-3xl font-black text-slate-900">Built With Leading Technologies</h2>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {techStackBadges.map((tech, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-extrabold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 space-y-3">
          <h3 className="text-xl font-extrabold text-slate-900 text-center">Our Commitment</h3>
          <p className="text-xs sm:text-sm text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
            At TecVor Technologies, we believe technology should simplify business, improve productivity, and create new opportunities. Every solution we deliver is built with performance, security, scalability, and user experience at its core.
          </p>
        </div>
      </section>

      {/* 11. CALL TO ACTION */}
      <section className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-black">Ready to Build Something Exceptional?</h2>
        <p className="text-xs sm:text-sm text-sky-100 max-w-2xl mx-auto leading-relaxed">
          Partner with TecVor Technologies to turn your ideas into innovative digital solutions. Whether you're launching a startup, scaling your business, or modernizing existing systems, our team is here to help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="px-8 py-3.5 rounded-full bg-white text-sky-700 font-black text-xs hover:bg-sky-50 transition-all shadow-lg flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-black text-xs border border-white/30 transition-all flex items-center gap-2"
          >
            <span>Contact Our Team</span>
          </button>
        </div>
      </section>

    </div>
  );
};
