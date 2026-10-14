import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './HeroSection.css';

interface HeroSectionProps {
  onContactClick: () => void;
  onLearnMoreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onLearnMoreClick }) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Headline Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Premier Legal Counsel & Strategic Litigation</span>
          </div>
          
          <h1 className="hero-headline">
            Counsel you<br />
            can trust.<br />
            <span className="hero-headline-italics">Advocacy that delivers.</span>
          </h1>
          
          <p className="hero-subtext">
            Strategic legal solutions crafted with precision and integrity for high-stakes matters.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn" onClick={onContactClick}>
              <span>CONTACT US</span>
              <ArrowRight size={16} />
            </button>
            <button className="hero-secondary-btn" onClick={onLearnMoreClick}>
              Learn About Our Firm
            </button>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} className="highlight-icon" />
              <span>Decades of Court Experience</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} className="highlight-icon" />
              <span>Integrity & Discretion</span>
            </div>
          </div>
        </div>

        {/* Right Architectural Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Signature Legal modern law firm architecture" 
              className="hero-image"
            />
            <div className="hero-image-overlay"></div>
          </div>
          <div className="hero-stat-badge">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years of Collective Advocacy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
