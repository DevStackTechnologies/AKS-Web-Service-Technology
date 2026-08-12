import React, { useState } from 'react';
import { AppProvider, Application } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CareersPage } from './pages/CareersPage';
import { InternshipsPage } from './pages/InternshipsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { CandidateDashboard } from './pages/candidate/CandidateDashboard';

import { AiCareerAssistantModal } from './components/ai/AiCareerAssistantModal';
import { OfferLetterModal } from './components/documents/OfferLetterModal';
import { InternshipCertificateModal } from './components/documents/InternshipCertificateModal';
import { AuthModal } from './pages/AuthModal';

import { CalendlyModal } from './components/tools/CalendlyModal';
import { WhatsAppWidget } from './components/tools/WhatsAppWidget';

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
        {activeTab === 'lifeAtAks' && (
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
      </main>

      {/* Footer */}
      <Footer setActiveTab={handleNavigate} />

      {/* Floating Global Contact Utilities */}
      <WhatsAppWidget />
      
      <CalendlyModal 
        isOpen={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
      />

      <AiCareerAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onNavigate={handleNavigate}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onNavigate={handleNavigate}
      />

      <OfferLetterModal
        isOpen={offerModalOpen}
        onClose={() => setOfferModalOpen(false)}
        candidateName={selectedOfferApp?.candidateName || 'Akash Kumar'}
        designation={selectedOfferApp?.offerDetails?.designation || selectedOfferApp?.jobTitle || 'AI Systems Engineer'}
        ctc={selectedOfferApp?.offerDetails?.ctc || '₹14,50,000 PA'}
        joiningDate={selectedOfferApp?.offerDetails?.joiningDate || '2026-08-16'}
      />

      <InternshipCertificateModal
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
      />

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
