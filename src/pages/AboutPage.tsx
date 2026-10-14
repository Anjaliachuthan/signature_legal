import React from 'react';
import { AdvocacyIntro } from '../components/AdvocacyIntro';
import { ValuesSection } from '../components/ValuesSection';
import { Target, Compass, Award } from 'lucide-react';
import './AboutPage.css';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="about-page-root">
      {/* Page Header */}
      <div className="page-hero-banner">
        <div className="container">
          <span className="section-eyebrow">ABOUT SIGNATURE LEGAL</span>
          <h1 className="page-hero-title">Advocacy with Purpose & Integrity</h1>
          <p className="page-hero-desc">
            Founded with a commitment to redefining courtroom advocacy, Signature Legal combines rigorous legal scholarship with strategic, modern problem solving.
          </p>
        </div>
      </div>

      {/* Main Philosophy intro */}
      <AdvocacyIntro onLearnMore={onOpenContact} />

      {/* Our Mission and Vision */}
      <section className="mission-section section-padding">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-box">
              <div className="mission-icon"><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p>
                To provide client-centric, authoritative legal representation that demystifies complex legal procedures, secures rights, and crafts robust solutions for high-stakes corporate and personal disputes.
              </p>
            </div>

            <div className="mission-box">
              <div className="mission-icon"><Compass size={28} /></div>
              <h3>Our Vision</h3>
              <p>
                To stand as a hallmark of ethical lawyering and intellectual rigor in Indian jurisprudence, setting precedent-defining standards before trial courts, appellate tribunals, and High Courts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <ValuesSection />

      {/* Trust & Ethics Banner */}
      <section className="ethics-banner-section section-padding">
        <div className="container">
          <div className="ethics-banner-content">
            <Award size={40} className="ethics-seal-icon" />
            <h2>Unwavering Commitment to Bar Council Standards</h2>
            <p>
              We maintain meticulous compliance with all legal mandates governed by the Advocates Act, 1961, and Bar Council of India guidelines, safeguarding confidentiality, client privacy, and legal integrity at every step.
            </p>
            <button className="ethics-contact-btn" onClick={onOpenContact}>
              Consult Our Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
