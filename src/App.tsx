import React, { useState, Suspense, lazy } from 'react';
import { AppProvider, Application } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { WhatsAppWidget } from './components/tools/WhatsAppWidget';

// Lazy loading secondary pages for code splitting & initial bundle optimization
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const InternshipsPage = lazy(() => import('./pages/InternshipsPage').then(m => ({ default: m.InternshipsPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const CandidateDashboard = lazy(() => import('./pages/candidate/CandidateDashboard').then(m => ({ default: m.CandidateDashboard })));

// Lazy loading interactive and heavy modals
const AiCareerAssistantModal = lazy(() => import('./components/ai/AiCareerAssistantModal').then(m => ({ default: m.AiCareerAssistantModal })));
const OfferLetterModal = lazy(() => import('./components/documents/OfferLetterModal').then(m => ({ default: m.OfferLetterModal })));
const InternshipCertificateModal = lazy(() => import('./components/documents/InternshipCertificateModal').then(m => ({ default: m.InternshipCertificateModal })));
const AuthModal = lazy(() => import('./pages/AuthModal').then(m => ({ default: m.AuthModal })));
const CalendlyModal = lazy(() => import('./components/tools/CalendlyModal').then(m => ({ default: m.CalendlyModal })));

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh] py-16">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-[#E84125] border-t-transparent rounded-full animate-spin"></div>
      <span className="text-sm font-medium text-slate-500">Loading TecVor...</span>
    </div>
  </div>
);

const MainLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedJobForDetail, setSelectedJobForDetail] = useState<string | undefined>(undefined);
  
  // Interactive Modals State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  
  // Document Modals state
  const [offerModalOpen, setOfferModalOpen] = useState(false);
  const [selectedOfferApp, setSelectedOfferApp] = useState<Application | null>(null);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);

  const handleNavigate = (tab: string, jobId?: string) => {
    setActiveTab(tab);
    if (jobId) {
      setSelectedJobForDetail(jobId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOfferModal = (app: Application) => {
    setSelectedOfferApp(app);
    setOfferModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F5] text-[#0F172A] font-sans antialiased selection:bg-[#E84125] selection:text-white">
      
      {/* Public Market Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      {/* Main Page Routing Container */}
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          {activeTab === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenAi={() => setAiModalOpen(true)}
              onOpenCalendly={() => setCalendlyOpen(true)}
            />
          )}
          {activeTab === 'about' && <AboutPage onNavigate={handleNavigate} />}
          {activeTab === 'services' && <ServicesPage onNavigate={handleNavigate} onOpenCalendly={() => setCalendlyOpen(true)} />}
          {activeTab === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} onOpenCalendly={() => setCalendlyOpen(true)} />}
          {(activeTab === 'careers' || activeTab === 'positions') && (
            <CareersPage
              initialJobId={selectedJobForDetail}
              onOpenAuth={() => setAuthModalOpen(true)}
              onNavigate={handleNavigate}
            />
          )}
          {activeTab === 'internships' && (
            <InternshipsPage
              onNavigate={handleNavigate}
              onOpenCertificateModal={() => setCertificateModalOpen(true)}
            />
          )}
          {activeTab === 'lifeAtTecvor' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenAi={() => setAiModalOpen(true)}
              onOpenCalendly={() => setCalendlyOpen(true)}
            />
          )}
          {activeTab === 'blogs' && <BlogsPage onNavigate={setActiveTab} />}
          {activeTab === 'contact' && <ContactPage />}
          
          {/* Candidate Portal Workspace */}
          {activeTab === 'candidate-dashboard' && (
            <CandidateDashboard
              onOpenOfferModal={handleOpenOfferModal}
              onOpenCertificateModal={() => setCertificateModalOpen(true)}
              onNavigate={handleNavigate}
            />
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer setActiveTab={handleNavigate} />

      {/* Floating Global Contact Utilities */}
      <WhatsAppWidget />
      
      <Suspense fallback={null}>
        {calendlyOpen && (
          <CalendlyModal 
            isOpen={calendlyOpen}
            onClose={() => setCalendlyOpen(false)}
          />
        )}

        {aiModalOpen && (
          <AiCareerAssistantModal
            isOpen={aiModalOpen}
            onClose={() => setAiModalOpen(false)}
            onNavigate={handleNavigate}
          />
        )}

        {authModalOpen && (
          <AuthModal
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            onNavigate={handleNavigate}
          />
        )}

        {offerModalOpen && (
          <OfferLetterModal
            isOpen={offerModalOpen}
            onClose={() => setOfferModalOpen(false)}
            candidateName={selectedOfferApp?.candidateName || 'Akash Kumar'}
            designation={selectedOfferApp?.offerDetails?.designation || selectedOfferApp?.jobTitle || 'AI Systems Engineer'}
            ctc={selectedOfferApp?.offerDetails?.ctc || '₹14,50,000 PA'}
            joiningDate={selectedOfferApp?.offerDetails?.joiningDate || '2026-08-16'}
          />
        )}

        {certificateModalOpen && (
          <InternshipCertificateModal
            isOpen={certificateModalOpen}
            onClose={() => setCertificateModalOpen(false)}
          />
        )}
      </Suspense>

    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
