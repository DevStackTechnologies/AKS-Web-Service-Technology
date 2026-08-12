import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Clock, ChevronRight, Sparkles, ArrowRight, Mail, X, BookOpen
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
      image: '/images/ai-web-development.png',
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
      summary: 'How TecVor engineered an enterprise OAuth2 encrypted financial platform for KD Finserve, managing ₹85 Cr+ AUM for 45,000+ active investors with 100% compliance.',
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
      metaDesc: 'Learn how TecVor optimized client website performance scores from 45 to 99+ on Google Lighthouse.',
      content: `
### Optimization Techniques Used:
1. Code Splitting & Dynamic Imports in Vite.
2. WebP Image Compression with AVIF fallbacks.
3. Server-side Caching & Edge CDN distribution.
      `,
      ctaText: 'Is your website slow? Get a free performance audit from TecVor engineers.'
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
      ctaText: 'Unsure about your tech stack? Talk with TecVor technology architects.'
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
      ctaText: 'Planning a mobile application? Request a free app proposal from TecVor.'
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
      ctaText: 'Ready to migrate to the cloud? Contact TecVor Cloud & DevOps experts.'
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
      ctaText: 'Need a security audit for your software? Talk to TecVor cybersecurity engineers.'
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

  const renderInlineFormatted = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-extrabold text-slate-900 bg-sky-50 px-1 py-0.5 rounded border border-sky-100">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  const renderDocumentContent = (content: string) => {
    if (!content) return null;
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: { num?: string; text: string }[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <div key={`list-${elements.length}`} className="space-y-2.5 my-3">
            {currentList.map((item, lIdx) => (
              <div
                key={lIdx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-extrabold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  {item.num || '•'}
                </div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
                  {renderInlineFormatted(item.text)}
                </div>
              </div>
            ))}
          </div>
        );
        currentList = [];
      }
    };

    lines.forEach((rawLine, idx) => {
      const line = rawLine.trim();
      if (!line) {
        flushList();
        return;
      }
      if (line.startsWith('### ')) {
        flushList();
        const headerText = line.replace('### ', '');
        elements.push(
          <div key={`h3-${idx}`} className="flex items-center gap-2.5 pt-5 pb-1 border-b border-slate-100 mb-2">
            <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-sky-500 to-blue-600"></span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              {headerText}
            </h3>
          </div>
        );
        return;
      }
      const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
      if (numMatch) {
        currentList.push({ num: numMatch[1], text: numMatch[2] });
        return;
      }
      const bulletMatch = line.match(/^[-*]\s+(.*)$/);
      if (bulletMatch) {
        currentList.push({ text: bulletMatch[1] });
        return;
      }
      flushList();
      elements.push(
        <p key={`p-${idx}`} className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal my-2">
          {renderInlineFormatted(line)}
        </p>
      );
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-[#FFF8F5] text-slate-900 space-y-12">
      <div className="max-w-7xl mx-auto space-y-12">

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="bg-white rounded-3xl border border-slate-200 hover:border-sky-500 transition-all overflow-hidden flex flex-col justify-between shadow-sm group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="space-y-4">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-[10px]">
                      {article.author.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{article.author}</span>
                  </div>
                  <span className="text-xs font-black text-sky-600 flex items-center gap-1">
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <section className="glass-card bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl border border-slate-800 text-center">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest">Engineering Newsletter</span>
            <h2 className="text-2xl sm:text-3xl font-black">Stay Updated with TecVor Tech Insights</h2>
            <p className="text-xs text-slate-300">Get weekly technical articles, React architecture blueprints, and AI development trends delivered straight to your inbox.</p>
          </div>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your work email address..."
              className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-base sm:text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
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
              ✓ Successfully subscribed to TecVor Technologies Insights Newsletter!
            </p>
          )}
        </section>

      </div>

      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/75 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-auto max-h-[90vh] flex flex-col text-slate-900 transform-gpu will-change-transform"
            >
              {/* Modal Sticky Header with Prominent Close Button */}
              <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/95 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2 pr-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[10px] sm:text-xs font-black border border-sky-200">
                    {selectedArticle.category}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-semibold">{selectedArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200/90 hover:bg-slate-300 active:scale-95 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all flex-shrink-0 shadow-sm"
                  title="Close Article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Article Content Body */}
              <div className="p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto overflow-x-hidden">
                <div className="space-y-2.5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center gap-2.5 pt-1 border-b border-slate-200 pb-3">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                      {selectedArticle.author.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900">{selectedArticle.author}</h4>
                      <span className="text-[10px] text-slate-500 block">{selectedArticle.authorRole} • Published {selectedArticle.date}</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-44 sm:h-64 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-md flex-shrink-0">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-4 text-slate-800">
                  <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed shadow-sm">
                    {selectedArticle.summary}
                  </div>
                  <div className="space-y-3 pt-1">
                    {renderDocumentContent(selectedArticle.content)}
                  </div>
                </div>

                {selectedArticle.ctaText && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 text-white space-y-2.5 shadow-md">
                    <h4 className="text-sm font-black flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>TecVor Engineering Services</span>
                    </h4>
                    <p className="text-xs text-sky-100 font-medium">{selectedArticle.ctaText}</p>
                    <button
                      onClick={() => { setSelectedArticle(null); onNavigate && onNavigate('contact'); }}
                      className="px-5 py-2.5 rounded-xl bg-white text-sky-800 font-black text-xs hover:bg-sky-50 transition-all flex items-center gap-1.5"
                    >
                      <span>Contact TecVor Engineers</span>
                      <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
