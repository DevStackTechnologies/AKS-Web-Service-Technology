import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Laptop, Smartphone, Palette, ShoppingCart, Settings, Bot, Cloud, 
  Link, TrendingUp, Shield, Wrench, CheckCircle2, Rocket, ArrowRight, Sparkles, Zap, MessageSquare
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (tab: string) => void;
  onOpenCalendly?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenCalendly }) => {
  
  const allServices = [
    {
      id: 'website-dev',
      icon: Globe,
      emoji: '🌐',
      title: 'Website Development',
      subtitle: 'Professional Websites That Drive Results',
      desc: 'We create responsive, fast, and SEO-friendly websites tailored to your business goals. Whether it\'s a corporate website, portfolio, or landing page, we ensure exceptional performance and user experience.',
      badge: 'Web & CMS',
      color: 'from-sky-500 to-blue-600',
      features: [
        'Business Websites', 'Corporate Websites', 'Portfolio Websites', 'Landing Pages',
        'CMS Development', 'SEO Optimization', 'Responsive Design', 'High Performance'
      ]
    },
    {
      id: 'web-apps',
      icon: Laptop,
      emoji: '💻',
      title: 'Web Application Development',
      subtitle: 'Powerful & Scalable Web Applications',
      desc: 'We build secure and feature-rich web applications using modern technologies, ensuring scalability, reliability, and seamless performance for businesses of all sizes.',
      badge: 'SaaS & WebApps',
      color: 'from-[#0A4EDB] to-[#139EF8]',
      features: [
        'Custom Web Applications', 'ERP & CRM Systems', 'SaaS Platforms', 'Business Automation',
        'Dashboard Development', 'API Integration', 'Admin Panels'
      ]
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      emoji: '📱',
      title: 'Mobile App Development',
      subtitle: 'Android & iOS Applications',
      desc: 'Our team develops intuitive and high-performance mobile applications with a focus on usability, speed, and security across native and cross-platform frameworks.',
      badge: 'iOS & Android',
      color: 'from-blue-600 to-indigo-600',
      features: [
        'Android Apps', 'iOS Apps', 'Cross-Platform Apps', 'Flutter Development',
        'React Native Development', 'App Maintenance'
      ]
    },
    {
      id: 'ui-ux',
      icon: Palette,
      emoji: '🎨',
      title: 'UI/UX Design',
      subtitle: 'Designing Exceptional Digital Experiences',
      desc: 'We create user-focused interfaces that are visually appealing, easy to use, and optimized for conversions with scalable visual design systems.',
      badge: 'Luxury UX',
      color: 'from-purple-500 to-pink-600',
      features: [
        'UI Design', 'UX Research', 'Wireframing', 'Interactive Prototypes',
        'Design Systems', 'Mobile UI', 'Web UI'
      ]
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      emoji: '🛒',
      title: 'E-Commerce Development',
      subtitle: 'Grow Your Online Business',
      desc: 'Launch secure and scalable e-commerce platforms with advanced shopping experiences, multi-vendor capabilities, and seamless payment integration.',
      badge: 'High Conversion',
      color: 'from-emerald-500 to-teal-600',
      features: [
        'Online Stores', 'Multi-Vendor Marketplace', 'Product Management', 'Payment Gateway',
        'Inventory Management', 'Order Tracking', 'Customer Dashboard'
      ]
    },
    {
      id: 'custom-software',
      icon: Settings,
      emoji: '⚙️',
      title: 'Software Development',
      subtitle: 'Custom Software Solutions',
      desc: 'We design and develop enterprise-grade software tailored to meet unique business requirements and streamline operational workflows.',
      badge: 'Enterprise',
      color: 'from-amber-500 to-orange-600',
      features: [
        'Enterprise Software', 'Business Automation', 'Inventory Management', 'CRM Systems',
        'ERP Solutions', 'HRMS Platforms', 'Custom Dashboards'
      ]
    },
    {
      id: 'ai-automation',
      icon: Bot,
      emoji: '🤖',
      title: 'AI & Automation Solutions',
      subtitle: 'Smarter Business Through Artificial Intelligence',
      desc: 'Leverage AI-powered technologies to automate repetitive tasks, gain actionable data insights, and improve decision-making with custom LLMs.',
      badge: 'AI Powered',
      color: 'from-indigo-600 to-purple-700',
      features: [
        'AI Chatbots', 'Resume Screening', 'AI Recommendation Systems', 'Machine Learning Solutions',
        'Business Automation', 'Predictive Analytics'
      ]
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      emoji: '☁️',
      title: 'Cloud Solutions',
      subtitle: 'Secure & Scalable Cloud Infrastructure',
      desc: 'Optimize your business with reliable cloud deployment, high-availability hosting, multi-cloud migration, and infrastructure management.',
      badge: 'AWS & GCP',
      color: 'from-sky-600 to-cyan-600',
      features: [
        'Cloud Migration', 'AWS Infrastructure', 'Microsoft Azure', 'Google Cloud (GCP)',
        'Cloud Security', 'Backup Solutions'
      ]
    },
    {
      id: 'api-integration',
      icon: Link,
      emoji: '🔗',
      title: 'API Development & Integration',
      subtitle: 'Connect Everything Seamlessly',
      desc: 'We develop secure REST & GraphQL APIs and integrate third-party web services to streamline internal business processes and external integrations.',
      badge: 'Microservices',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'REST API Development', 'GraphQL API', 'Payment Gateway Integration', 'CRM Integration',
        'ERP Integration', 'Social Login', 'SMS & Email API'
      ]
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      emoji: '📈',
      title: 'Digital Marketing',
      subtitle: 'Increase Your Online Visibility',
      desc: 'Reach more targeted customers with data-driven digital marketing strategies that deliver measurable ROI and continuous brand growth.',
      badge: 'Growth Engine',
      color: 'from-rose-500 to-red-600',
      features: [
        'Search Engine Optimization (SEO)', 'Social Media Marketing', 'Google Ads Campaigns', 'Facebook Ads',
        'Content Marketing', 'Email Marketing', 'Performance Analytics'
      ]
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      emoji: '🛡️',
      title: 'Cybersecurity Services',
      subtitle: 'Protect Your Digital Assets',
      desc: 'Safeguard your business infrastructure with advanced security audits, penetration testing, firewall configurations, and proactive threat management.',
      badge: 'OWASP Top 10',
      color: 'from-slate-800 to-slate-900',
      features: [
        'Security Audits', 'Vulnerability Assessment', 'Penetration Testing', 'Firewall Configuration',
        'Data Protection', 'Compliance Support'
      ]
    },
    {
      id: 'maintenance-support',
      icon: Wrench,
      emoji: '🔧',
      title: 'Maintenance & Support',
      subtitle: 'Reliable Technical Support',
      desc: 'Ensure your applications remain secure, updated, and optimized 24/7 with our proactive ongoing maintenance and SLA support services.',
      badge: '24/7 SLA',
      color: 'from-teal-600 to-emerald-700',
      features: [
        'Performance Monitoring', 'Bug Fixes & Patches', 'Feature Enhancements', 'Security Updates',
        'Database Optimization', '24/7 Technical Support'
      ]
    }
  ];

  const whyChooseUsPillars = [
    'Experienced Technology Experts',
    'Custom Business Solutions',
    'Modern Tech Stack',
    'Secure & Scalable Development',
    'Agile Development Process',
    'On-Time Project Delivery',
    'Transparent Communication',
    'Dedicated Post-Launch Support',
    'Competitive Pricing',
    'Client-Centric Approach'
  ];

  const developmentSteps = [
    { num: '01', title: 'Requirement Analysis', desc: 'Understanding your business goals and project scope.' },
    { num: '02', title: 'Planning & Strategy', desc: 'Creating a roadmap with timelines and technical architecture.' },
    { num: '03', title: 'UI/UX Design', desc: 'Crafting intuitive and engaging user experiences.' },
    { num: '04', title: 'Development', desc: 'Building secure, scalable, and high-performance solutions.' },
    { num: '05', title: 'Testing & QA', desc: 'Ensuring quality, security, and reliability through rigorous testing.' },
    { num: '06', title: 'Deployment', desc: 'Launching your solution smoothly and efficiently.' },
    { num: '07', title: 'Ongoing Support', desc: 'Providing continuous maintenance, updates, and improvements.' }
  ];

  return (
    <div className="space-y-10 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* 1. SERVICES HERO SECTION */}
      <section className="text-center space-y-5 max-w-4xl mx-auto pt-4">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold uppercase tracking-wider"
        >
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>Services & Engineering Capabilities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
        >
          Innovative Technology Solutions <br />
          <span className="text-gradient">For Modern Businesses</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto"
        >
          At AKS Web Service Technologies, we provide end-to-end digital solutions that help businesses innovate, grow, and stay ahead in today's competitive market. From custom software development to AI-powered automation, our expert team delivers scalable, secure, and high-performance solutions tailored to your business needs.
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <button
            onClick={() => onOpenCalendly ? onOpenCalendly() : onNavigate('contact')}
            className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get a Free Consultation</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-full bg-white border border-slate-300 hover:border-sky-500 text-slate-800 font-extrabold text-xs shadow-sm transition-all flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </button>
        </motion.div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="glass-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 text-center space-y-2 shadow-sm">
        <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block">Services Overview</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 pt-1">Comprehensive Digital Solutions</h2>
        <p className="text-xs text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          We combine innovation, technology, and industry expertise to build digital products that enhance business performance, improve customer experiences, and accelerate growth.
        </p>
      </section>

      {/* 3. COMPREHENSIVE 12 SERVICES GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-500 shadow-sm space-y-4 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div className="space-y-3">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${svc.color} text-white shadow-md flex items-center gap-2`}>
                    <Icon className="w-5 h-5" />
                    <span className="text-base">{svc.emoji}</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                    {svc.badge}
                  </span>
                </div>

                {/* Service Titles */}
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                    {svc.title}
                  </h3>
                  <h4 className="text-xs font-bold text-sky-600 pt-0.5">
                    {svc.subtitle}
                  </h4>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {svc.desc}
                </p>

                {/* Features Bullet Pills */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Key Features</span>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.features.map((feat, fIdx) => (
                      <span 
                        key={fIdx} 
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-lg"
                      >
                        <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-sky-600 hover:text-blue-700 transition-colors"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Zap className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 4. WHY CHOOSE AKS WEB SERVICE TECHNOLOGIES */}
      <section className="glass-card bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-8 shadow-sm">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Why Choose Us</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">Why Choose AKS Web Service Technologies?</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">10 pillars of technology excellence, transparent communication, and post-launch support.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 max-w-4xl mx-auto">
          {whyChooseUsPillars.map((pillar, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all shadow-sm">
              <div className="p-1.5 rounded-lg bg-sky-600 text-white flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-extrabold text-slate-900">{pillar}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR DEVELOPMENT PROCESS (FROM IDEA TO LAUNCH) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Development Process</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 pt-1">How We Work (From Idea to Launch)</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">A structured 7-step engineering methodology for zero downtime and fast time-to-market.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {developmentSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 relative group hover:border-sky-500 transition-all"
            >
              <span className="text-2xl font-black text-slate-300 group-hover:text-sky-500 transition-colors">{step.num}</span>
              <h3 className="text-sm font-extrabold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
        <div className="space-y-2 max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black">Let's Build Your Next Digital Solution</h2>
          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed pt-1">
            Whether you're launching a startup, expanding your business, or modernizing your existing systems, AKS Web Service Technologies is ready to bring your vision to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-full bg-white text-sky-700 font-black text-xs hover:bg-sky-50 transition-all shadow-lg flex items-center gap-2"
          >
            <Rocket className="w-4 h-4 text-sky-600" />
            <span>Request a Free Quote</span>
          </button>
          
          <button
            onClick={() => onOpenCalendly ? onOpenCalendly() : onNavigate('contact')}
            className="px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-black text-xs border border-white/30 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Schedule a Consultation</span>
          </button>
        </div>
      </section>

    </div>
  );
};
