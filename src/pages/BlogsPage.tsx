import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, BookOpen, Clock, User, ArrowRight, Tag, Sparkles, Cpu, Code2, 
  Smartphone, Server, ShieldCheck, Layers, Rocket, CheckCircle2, ChevronRight, 
  X, Share2, Mail, ExternalLink, TrendingUp, MessageSquare
} from 'lucide-react';

interface BlogsPageProps {
  onNavigate?: (tab: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Categories list
  const categories = [
    'All',
    'Case Studies',
    'AI & Machine Learning',
    'Web Development',
    'Mobile App Development',
    'Cloud & DevOps',
    'Cybersecurity',
    'UI/UX Design',
    'Software Development',
    'Career & Learning',
    'Company Updates'
  ];

  // Articles Knowledge Center Data
  const articles = [
    {
      id: 'ai-future-web',
      title: 'The Future of AI in Modern Web Development',
      category: 'AI & Machine Learning',
      readTime: '6 Min Read',
      author: 'Akash Kumar (CTO)',
      authorRole: 'Chief Technology Officer',
      date: 'Aug 2026',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      featured: true,
      summary: 'Artificial Intelligence is no longer a futuristic concept—it has become a practical tool that helps businesses automate processes, improve customer experiences, and build smarter digital products.',
      metaDesc: 'Discover how Artificial Intelligence is transforming website development, automation, user experience, and business growth.',
      content: `
Artificial Intelligence is fundamentally revolutionizing how digital applications are architected, developed, and scaled. At TecVor Technologies, we integrate cutting-edge LLMs and machine learning algorithms directly into business platforms.

### Key Pillars of AI-Driven Web Applications:
1. **Intelligent User Experience**: Personalizing layouts, recommendation engines, and dynamic user interfaces in real time.
2. **Autonomous Workflow Agents**: Leveraging LangChain and OpenAI APIs to handle customer support, document parsing, and automated logistics dispatches.
3. **Sub-Second Search & RAG**: Implementing Retrieval-Augmented Generation with vector databases like Pinecone and Milvus for instant data lookup.

### Real-World Business Impact:
Companies adopting AI-powered web applications report a **340% increase in user conversion rates** and a **65% reduction in manual operational overhead**.
      `,
      ctaText: 'Need an AI-powered web solution? Contact TecVor Technologies to discuss your project.'
    },
    {
      id: 'cs-kd-finserve',
      title: 'Case Study: How We Built a High-Performance Wealth Management Portal',
      category: 'Case Studies',
      readTime: '8 Min Read',
      author: 'Engineering Team',
      authorRole: 'Enterprise Solutions',
      date: 'Jul 2026',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      featured: false,
      summary: 'How AKS engineered an enterprise OAuth2 encrypted financial platform for KD Finserve, managing ₹85 Cr+ AUM for 45,000+ active investors with 100% compliance.',
      metaDesc: 'Case study detailing how TecVor Technologies built a secure wealth management portal for KD Finserve.',
      content: `
### Background & Challenges
KD Finserve required a bank-grade financial portal to streamline SIP mutual fund investments, automated e-KYC verification, and live portfolio rebalancing.

### Engineering Architecture
- **Frontend**: React 19 + TypeScript with glassmorphic dashboard components.
- **Backend**: Microservice REST APIs built on Node.js & PostgreSQL with AES-256 bank-grade encryption.
- **Outcome**: ₹85 Cr+ AUM managed smoothly with 99/100 Lighthouse performance score.
      `,
      ctaText: 'Want to engineer a secure fintech platform? Schedule a consultation today.'
    },
    {
      id: 'cs-lighthouse-optimization',
      title: 'Case Study: Optimizing Website Speed from 45 to 99+ Lighthouse Score',
      category: 'Case Studies',
      readTime: '5 Min Read',
      author: 'Frontend Lead',
      authorRole: 'Performance Architect',
      date: 'Jul 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      featured: false,
      summary: 'A step-by-step technical breakdown of how we eliminated render-blocking resources, optimized Web Vitals, and achieved sub-second page loads.',
      metaDesc: 'Learn how AKS optimized client website performance scores from 45 to 99+ on Google Lighthouse.',
      content: `
### Optimization Techniques Used:
1. Code Splitting & Dynamic Imports in Vite.
2. WebP Image Compression with AVIF fallbacks.
3. Server-side Caching & Edge CDN distribution.
      `,
      ctaText: 'Is your website slow? Get a free performance audit from AKS engineers.'
    },
    {
      id: 'react-vs-nextjs',
      title: 'React vs Next.js: Which Framework Should You Choose for Enterprise Apps?',
      category: 'Web Development',
      readTime: '7 Min Read',
      author: 'Siddharth Rao',
      authorRole: 'Principal Web Architect',
      date: 'Jun 2026',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
      featured: false,
      summary: 'An in-depth technical comparison of Client-Side Rendering (CSR) vs Server-Side Rendering (SSR), SSG, and Server Components in Next.js 15.',
      metaDesc: 'Compare React 19 and Next.js 15 to pick the best frontend framework for your business application.',
      content: `
When building modern web applications, choosing between vanilla React and Next.js depends on your SEO, performance, and scaling requirements.

- **Choose React**: For internal dashboards, complex SPA web applications, and single-sign-on administrative portals.
- **Choose Next.js**: For public corporate websites, D2C e-commerce stores, and SEO-critical web platforms.
      `,
      ctaText: 'Unsure about your tech stack? Talk with AKS technology architects.'
    },
    {
      id: 'flutter-vs-react-native',
      title: 'Flutter vs React Native: Building 60fps Cross-Platform Mobile Apps',
      category: 'Mobile App Development',
      readTime: '6 Min Read',
      author: 'Mobile Engineering Team',
      authorRole: 'Cross-Platform Specialists',
      date: 'Jun 2026',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      featured: false,
      summary: 'Compare Flutter and React Native in terms of native performance, UI customization, Bluetooth hardware sync, and development speed.',
      metaDesc: 'Flutter vs React Native mobile app development comparison guide for businesses.',
      content: `
Building cross-platform mobile apps allows businesses to launch simultaneously on iOS and Android while saving 40% in development costs.
      `,
      ctaText: 'Planning a mobile application? Request a free app proposal from AKS.'
    },
    {
      id: 'cloud-aws-vs-azure-gcp',
      title: 'AWS vs Azure vs Google Cloud: Enterprise Multi-Cloud Migration Strategy',
      category: 'Cloud & DevOps',
      readTime: '9 Min Read',
      author: 'DevOps Team',
      authorRole: 'Cloud Infrastructure',
      date: 'May 2026',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      featured: false,
      summary: 'A strategic guide for migrating legacy infrastructure to AWS, Azure, or GCP with zero downtime and automated CI/CD deployment pipelines.',
      metaDesc: 'Cloud migration strategy comparing AWS, Azure, and Google Cloud for scaling businesses.',
      content: `
Cloud migration is essential for business scalability, high availability, and disaster recovery.
      `,
      ctaText: 'Ready to migrate to the cloud? Contact AKS Cloud & DevOps experts.'
    },
    {
      id: 'api-security-jwt-oauth',
      title: 'Securing REST & GraphQL APIs: JWT, OAuth2, and OWASP Best Practices',
      category: 'Cybersecurity',
      readTime: '7 Min Read',
      author: 'Security Auditing Team',
      authorRole: 'Cybersecurity Specialists',
      date: 'May 2026',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      featured: false,
      summary: 'Essential API security protocols to protect customer data, prevent SQL injection, rate-limit brute force attacks, and achieve ISO compliance.',
      metaDesc: 'API security best practices guide featuring JWT, OAuth2, and OWASP top-10 protection.',
      content: `
Data protection is paramount. Protecting customer APIs requires multi-layered authentication and real-time threat detection.
      `,
      ctaText: 'Need a security audit for your software? Talk to AKS cybersecurity engineers.'
    },
    {
      id: 'fullstack-roadmap-2026',
      title: 'How to Become a Full-Stack Engineering Architect in 2026',
      category: 'Career & Learning',
      readTime: '10 Min Read',
      author: 'TecVor Academy Team',
      authorRole: 'Developer Mentorship',
      date: 'Apr 2026',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      featured: false,
      summary: 'A comprehensive roadmap covering React 19, Node.js, TypeScript, PostgreSQL, Docker, and AI LLM integrations for ambitious developers.',
      metaDesc: '2026 Full-Stack Developer Roadmap created by TecVor Technologies engineers.',
      content: `
Mastering full-stack development requires a structured learning path from core frontend fundamentals to cloud-native microservices.
      `,
      ctaText: 'Looking to launch your career? Explore openings on TecVor Careers Portal.'
    }
  ];

  const featuredBlog = articles.find(a => a.featured) || articles[0];

  const filteredArticles = activeCategory === 'All'
    ? articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.summary.toLowerCase().includes(search.toLowerCase()))
    : articles.filter(a => a.category === activeCategory && (a.title.toLowerCase().includes(search.toLowerCase()) || a.summary.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-[#FFF8F5] text-slate-900 space-y-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* 1. HERO & KNOWLEDGE CENTER TITLE */}
        <div className="text-center space-y-4 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <BookOpen className="w-4 h-4 text-sky-600 animate-pulse" />
            <span>Technology Knowledge Center & Engineering Insights</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            TecVor Engineering <span className="text-gradient">Blog & Case Studies</span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            In-depth technical research, architecture blueprints, AI automation guides, and real-world client case studies published by TecVor Technologies engineers.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-2 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search AI, React, Cloud, Case Studies, Security..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-sky-500 shadow-sm"
            />
          </div>
        </div>

        {/* 2. FEATURED ARTICLE SPOTLIGHT HERO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-10"
        >
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-sky-500 text-white text-[10px] font-black uppercase tracking-wider">
                  Featured Research 🚀
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sky-300 text-[10px] font-bold border border-white/20">
                  {featuredBlog.category}
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featuredBlog.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight hover:text-sky-300 transition-colors cursor-pointer" onClick={() => setSelectedArticle(featuredBlog)}>
                {featuredBlog.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                {featuredBlog.excerpt || featuredBlog.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-black text-xs">
                  AK
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">{featuredBlog.author}</h4>
                  <span className="text-[10px] text-slate-400 block">{featuredBlog.authorRole}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(featuredBlog)}
                className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-black text-xs shadow-md transition-all flex items-center gap-2"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 lg:h-auto rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <img src={featuredBlog.image} alt={featuredBlog.title} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* 3. CATEGORY PILLS FILTER */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  activeCategory === cat
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4. ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((art) => (
              <motion.div
                key={art.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedArticle(art)}
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold border border-white/20">
                      {art.category}
                    </span>
                    <span className="absolute bottom-4 right-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 text-slate-300 text-[10px] font-bold">
                      ⏱️ {art.readTime}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-extrabold text-sky-600 uppercase tracking-widest block">{art.date}</span>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-black text-sky-600">
                  <span className="text-slate-500 font-medium text-[11px]">By {art.author}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 5. NEWSLETTER & CONSULTATION CTA */}
        <section className="glass-card bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl border border-slate-800 text-center">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest">Engineering Newsletter</span>
            <h2 className="text-2xl sm:text-3xl font-black">Stay Updated with AKS Tech Insights</h2>
            <p className="text-xs text-slate-300">Get weekly technical articles, React architecture blueprints, and AI development trends delivered straight to your inbox.</p>
          </div>

          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your work email address..."
              className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
            />
            <button
              onClick={() => { setSubscribed(true); setNewsletterEmail(''); setTimeout(() => setSubscribed(false), 3000); }}
              className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-black text-xs shadow-md transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </div>
          {subscribed && (
            <p className="text-xs font-extrabold text-emerald-400 animate-pulse">
              ✓ Successfully subscribed to AKS Technology Insights Newsletter!
            </p>
          )}
        </section>

      </div>

      {/* ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full p-6 sm:p-10 space-y-6 shadow-2xl relative my-8 text-slate-900"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-black border border-sky-200">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{selectedArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-3 pt-1 border-b border-slate-200 pb-4">
                  <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-black text-xs">
                    AK
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">{selectedArticle.author}</h4>
                    <span className="text-[10px] text-slate-500 block">{selectedArticle.authorRole} • Published {selectedArticle.date}</span>
                  </div>
                </div>
              </div>

              <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-900">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <p className="font-semibold text-slate-900 text-sm bg-sky-50 p-4 rounded-2xl border border-sky-200">
                  {selectedArticle.summary}
                </p>

                <div className="whitespace-pre-line">
                  {selectedArticle.content}
                </div>
              </div>

              {selectedArticle.ctaText && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 text-white space-y-3 shadow-md">
                  <h4 className="text-sm font-black flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>AKS Engineering Services</span>
                  </h4>
                  <p className="text-xs text-sky-100 font-medium">{selectedArticle.ctaText}</p>
                  <button
                    onClick={() => { setSelectedArticle(null); onNavigate && onNavigate('contact'); }}
                    className="px-5 py-2.5 rounded-xl bg-white text-sky-800 font-black text-xs hover:bg-sky-50 transition-all flex items-center gap-1.5"
                  >
                    <span>Contact AKS Engineers</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
