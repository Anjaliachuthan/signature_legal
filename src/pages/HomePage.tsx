import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AdvocacyIntro } from '../components/AdvocacyIntro';
import { PracticeAreasSection } from '../components/PracticeAreasSection';
import { ValuesSection } from '../components/ValuesSection';
import { AdvocatesSection } from '../components/AdvocatesSection';
import type { Advocate } from '../data/legalData';

interface HomePageProps {
  onOpenContact: () => void;
  onNavigateToTab: (tab: string) => void;
  onSelectAdvocate: (adv: Advocate) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onOpenContact, 
  onNavigateToTab, 
  onSelectAdvocate 
}) => {
  return (
    <main className="home-page-root">
      {/* Hero Section */}
      <HeroSection 
        onContactClick={onOpenContact}
        onLearnMoreClick={() => onNavigateToTab('about')}
      />

      {/* Advocacy with Integrity Section */}
      <AdvocacyIntro 
        onLearnMore={() => onNavigateToTab('about')}
      />

      {/* Practice Areas */}
      <PracticeAreasSection 
        onSelectArea={() => onNavigateToTab('practice-areas')}
      />

      {/* Our Values */}
      <ValuesSection />

      {/* Lead Advocates and Team */}
      <AdvocatesSection 
        onSelectAdvocate={onSelectAdvocate}
        onConsult={(adv) => {
          onSelectAdvocate(adv);
          onOpenContact();
        }}
      />
    </main>
  );
};
