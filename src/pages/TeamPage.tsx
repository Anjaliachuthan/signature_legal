import React from 'react';
import { AdvocatesSection } from '../components/AdvocatesSection';
import type { Advocate } from '../data/legalData';
import { Award, BookOpen, Users, CheckCircle } from 'lucide-react';
import './TeamPage.css';

interface TeamPageProps {
  onSelectAdvocate: (adv: Advocate) => void;
  onOpenContact: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onSelectAdvocate, onOpenContact }) => {
  return (
    <div className="team-page-root">
      {/* Page Header */}
      <div className="page-hero-banner">
        <div className="container">
          <span className="section-eyebrow">THE COUNSEL BEHIND SIGNATURE LEGAL</span>
          <h1 className="page-hero-title">Our Legal Team</h1>
          <p className="page-hero-desc">
            Decades of courtroom prowess, unmatched analytical depth, and dedicated client commitment across High Courts, NCLT, and Supreme Court jurisdictions.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="team-metrics-bar">
        <div className="container team-metrics-grid">
          <div className="team-metric-box">
            <Award className="metric-icon" size={24} />
            <div>
              <span className="metric-num">30+</span>
              <span className="metric-txt">Years Cumulative Experience</span>
            </div>
          </div>
          <div className="team-metric-box">
            <Users className="metric-icon" size={24} />
            <div>
              <span className="metric-num">1,200+</span>
              <span className="metric-txt">Matters Represented</span>
            </div>
          </div>
          <div className="team-metric-box">
            <BookOpen className="metric-icon" size={24} />
            <div>
              <span className="metric-num">100%</span>
              <span className="metric-txt">Fidelity to Bar Council Ethics</span>
            </div>
          </div>
          <div className="team-metric-box">
            <CheckCircle className="metric-icon" size={24} />
            <div>
              <span className="metric-num">High Court</span>
              <span className="metric-txt">Bengaluru & Pan-India Reach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Render Lead Advocates and Team */}
      <AdvocatesSection 
        onSelectAdvocate={onSelectAdvocate}
        onConsult={(adv) => {
          onSelectAdvocate(adv);
          onOpenContact();
        }}
      />
    </div>
  );
};
