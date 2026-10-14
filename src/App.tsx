import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { TeamPage } from './pages/TeamPage';
import { CareersPage } from './pages/CareersPage';
import { LegalBlogPage } from './pages/LegalBlogPage';
import { ContactPage } from './pages/ContactPage';
import type { Advocate } from './data/legalData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [selectedAdvocate, setSelectedAdvocate] = useState<Advocate | null>(null);

  const handleOpenContact = (adv?: Advocate) => {
    if (adv) {
      setSelectedAdvocate(adv);
    }
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
    setSelectedAdvocate(null);
  };

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage 
            onOpenContact={() => handleOpenContact()}
            onNavigateToTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectAdvocate={(adv) => handleOpenContact(adv)}
          />
        );
      case 'about':
        return <AboutPage onOpenContact={() => handleOpenContact()} />;
      case 'practice-areas':
        return <PracticeAreasPage onOpenContact={() => handleOpenContact()} />;
      case 'our-team':
        return (
          <TeamPage 
            onSelectAdvocate={(adv) => handleOpenContact(adv)}
            onOpenContact={() => handleOpenContact()}
          />
        );
      case 'careers':
        return <CareersPage onOpenContact={() => handleOpenContact()} />;
      case 'legal':
      case 'blog':
        return <LegalBlogPage onOpenContact={() => handleOpenContact()} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage 
            onOpenContact={() => handleOpenContact()}
            onNavigateToTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectAdvocate={(adv) => handleOpenContact(adv)}
          />
        );
    }
  };

  return (
    <div className="signature-legal-app">
      {/* Top Header & Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenContact={() => handleOpenContact()} 
      />

      {/* Dynamic View / Page Component */}
      {renderCurrentPage()}

      {/* Standard Footer with Bar Council Disclaimer & Quick Links */}
      <Footer 
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Global Interactive Consultation Modal */}
      <ContactModal 
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
        advocateName={selectedAdvocate?.name}
      />
    </div>
  );
}

export default App;
