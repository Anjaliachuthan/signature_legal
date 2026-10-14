import React from 'react';
import { PracticeAreasSection } from '../components/PracticeAreasSection';
import { Shield, FileCheck, Award } from 'lucide-react';
import './PracticeAreasPage.css';

interface PracticeAreasPageProps {
  onOpenContact: (practiceArea?: string) => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({ onOpenContact }) => {
  return (
    <div className="practice-page-root">
      {/* Page Header */}
      <div className="page-hero-banner">
        <div className="container">
          <span className="section-eyebrow">COMPREHENSIVE LITIGATION & ADVISORY</span>
          <h1 className="page-hero-title">Practice Areas</h1>
          <p className="page-hero-desc">
            A comprehensive overview of our specialized legal expertise and the matters we handle for our clients.
          </p>
        </div>
      </div>

      {/* Main Practice Areas Row List with 01 Research, 02 Strategy, 03 Execution */}
      <PracticeAreasSection 
        onSelectArea={(areaTitle) => onOpenContact(areaTitle)}
        showMethodology={true}
      />

      {/* Standards & Excellence Section */}
      <section className="practice-standards-section section-padding">
        <div className="container">
          <div className="standards-card">
            <div className="standards-content">
              <span className="section-eyebrow">HIGH-STAKES ADVOCACY</span>
              <h2>Need Tailored Legal Counsel?</h2>
              <p>
                Whether initiating an urgent High Court writ petition, navigating insolvency before the NCLT, or executing high-value commercial arbitration, our senior counsel provides authoritative strategy from day one.
              </p>
              <button className="standards-btn" onClick={() => onOpenContact()}>
                Schedule A Confidential Case Review
              </button>
            </div>
            <div className="standards-badges">
              <div className="std-badge">
                <Shield size={24} className="badge-ico" />
                <div>
                  <strong>Advisory Rigor</strong>
                  <span>Precedent-grounded filings</span>
                </div>
              </div>
              <div className="std-badge">
                <FileCheck size={24} className="badge-ico" />
                <div>
                  <strong>NCLT & High Court</strong>
                  <span>Trial and appellate mastery</span>
                </div>
              </div>
              <div className="std-badge">
                <Award size={24} className="badge-ico" />
                <div>
                  <strong>Discreet & Client-Centric</strong>
                  <span>Institutional and private counsel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
