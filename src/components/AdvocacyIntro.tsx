import React from 'react';
import { ArrowRight, Award, ShieldCheck, Clock } from 'lucide-react';
import './AdvocacyIntro.css';

interface AdvocacyIntroProps {
  onLearnMore?: () => void;
}

export const AdvocacyIntro: React.FC<AdvocacyIntroProps> = ({ onLearnMore }) => {
  return (
    <section className="advocacy-section section-padding">
      <div className="container">
        <div className="advocacy-grid">
          {/* Left Text Column */}
          <div className="advocacy-text-col">
            <span className="section-eyebrow">OUR PHILOSOPHY</span>
            <h2 className="advocacy-heading">
              Advocacy with Integrity
            </h2>
            
            <p className="advocacy-para lead">
              We believe that law should be a tool for empowerment, not a source of anxiety.
            </p>
            
            <p className="advocacy-para">
              At Signature Legal, we combine decades of collective experience with a modern, client-focused approach to ensure your legal journey is handled with the precision and care it deserves.
            </p>

            <div className="advocacy-features">
              <div className="advocacy-feature-card">
                <ShieldCheck size={22} className="feat-icon" />
                <div>
                  <h4>Ethical Rigor</h4>
                  <p>Uncompromising adherence to professional ethics and legal fidelity.</p>
                </div>
              </div>
              <div className="advocacy-feature-card">
                <Clock size={22} className="feat-icon" />
                <div>
                  <h4>Swift Resolution</h4>
                  <p>Minimizing prolonged litigation with targeted, actionable strategy.</p>
                </div>
              </div>
            </div>

            <button className="advocacy-link-btn" onClick={onLearnMore}>
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Image Composition */}
          <div className="advocacy-image-col">
            <div className="advocacy-main-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=900" 
                alt="Advocacy with Integrity - Legal Consultation" 
                className="advocacy-main-img"
              />
            </div>
            <div className="advocacy-accent-card">
              <Award size={32} className="card-accent-icon" />
              <div>
                <h5>Client-First Protocol</h5>
                <p>Personalized representation crafted for institutional and private clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
