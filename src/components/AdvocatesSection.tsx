import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';
import { LEAD_ADVOCATES, ASSOCIATES } from '../data/legalData';
import type { Advocate } from '../data/legalData';
import './AdvocatesSection.css';

interface AdvocatesSectionProps {
  onSelectAdvocate?: (advocate: Advocate) => void;
  onConsult?: (advocate: Advocate) => void;
}

export const AdvocatesSection: React.FC<AdvocatesSectionProps> = ({ onSelectAdvocate, onConsult }) => {
  return (
    <section className="advocates-section section-padding" id="our-team">
      <div className="container">
        {/* Lead Advocates Section */}
        <div className="section-header text-center">
          <span className="section-eyebrow">PARTNERS & COUNSEL</span>
          <h2 className="section-title">Lead Advocates</h2>
          <p className="section-subtitle">
            Our senior advocates bring over a decade of authoritative practice and a commitment to delivering modern, client-focused legal solutions.
          </p>
        </div>

        {/* Lead Advocates 3-Column Cards */}
        <div className="lead-advocates-grid">
          {LEAD_ADVOCATES.map((adv) => (
            <div key={adv.id} className="advocate-card">
              <div className="advocate-photo-frame">
                <img src={adv.image} alt={adv.name} className="advocate-photo" />
                <div className="advocate-badge">{adv.role}</div>
              </div>

              <div className="advocate-content">
                <h3 className="advocate-name">{adv.name}</h3>
                <span className="advocate-exp">{adv.experience}</span>

                <div className="specialties-box">
                  <span className="specialties-label">Focus Areas:</span>
                  <ul className="specialties-list">
                    {adv.specialties.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>

                {adv.bio && (
                  <p className="advocate-bio">{adv.bio}</p>
                )}

                <div className="advocate-contact-row">
                  <a href={`mailto:${adv.email}`} className="advocate-email-link">
                    <Mail size={15} />
                    <span>{adv.email}</span>
                  </a>
                </div>

                <div className="advocate-card-bottom">
                  {/* Social links */}
                  <div className="advocate-socials">
                    <a href="#" aria-label="Facebook" className="adv-social-btn"><FacebookIcon size={14} /></a>
                    <a href="#" aria-label="Instagram" className="adv-social-btn"><InstagramIcon size={14} /></a>
                    <a href="#" aria-label="Twitter" className="adv-social-btn"><TwitterIcon size={14} /></a>
                    <a href="#" aria-label="LinkedIn" className="adv-social-btn"><LinkedinIcon size={14} /></a>
                  </div>

                  <button 
                    className="consult-advocate-btn"
                    onClick={() => onConsult ? onConsult(adv) : onSelectAdvocate?.(adv)}
                  >
                    <MessageSquare size={14} />
                    <span>Schedule</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Associates / Our Advocates Section */}
        <div className="associates-header">
          <span className="section-eyebrow">PRACTICING TEAM</span>
          <h2 className="section-title">Our Advocates</h2>
          <p className="section-subtitle">
            We are committed to providing authoritative legal advocacy through a team of dedicated professionals who bring a modern, client-focused approach to every matter.
          </p>
        </div>

        <div className="associates-grid">
          {ASSOCIATES.map((assoc, idx) => (
            <div key={idx} className="associate-card">
              <div className="associate-photo-wrap">
                <img src={assoc.image} alt={assoc.name} className="associate-photo" />
              </div>
              <div className="associate-info">
                <h4 className="associate-name">{assoc.name}</h4>
                <span className="associate-role">{assoc.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
