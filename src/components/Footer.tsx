import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';
import { FOOTER_PRACTICE_AREAS, CONTACT_INFO } from '../data/legalData';
import './Footer.css';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <footer className="footer-root">
      {/* Pre-footer CTA banner */}
      <div className="footer-cta-section">
        <div className="container footer-cta-content">
          <h2 className="footer-cta-title">
            Have a legal matter?<br />
            <span className="footer-cta-sub">Let's talk.</span>
          </h2>
          <button className="footer-cta-btn" onClick={onOpenContact}>
            CONTACT US
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Col 1: Brand & Intro */}
          <div className="footer-col brand-col">
            <div className="footer-brand" onClick={() => onNavigate('home')}>
              <div className="brand-logo-icon">
                <Scale size={20} className="scale-icon" />
              </div>
              <div className="brand-titles">
                <span className="brand-name">SIGNATURE</span>
                <span className="brand-sub">LEGAL</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Advocacy that delivers. Signature Legal provides authoritative and modern legal solutions for high-stakes matters.
            </p>
          </div>

          {/* Col 2: Practice Areas */}
          <div className="footer-col">
            <h4 className="footer-col-title">PRACTICE AREAS</h4>
            <ul className="footer-links-list">
              {FOOTER_PRACTICE_AREAS.map((item, idx) => (
                <li key={idx}>
                  <button onClick={() => onNavigate('practice-areas')} className="footer-link-btn">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => onNavigate('home')} className="footer-link-btn">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="footer-link-btn">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('practice-areas')} className="footer-link-btn">
                  Practice Areas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('our-team')} className="footer-link-btn">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="footer-link-btn">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('legal')} className="footer-link-btn">
                  Legal & Insights
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="footer-link-btn">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">CONTACT DETAILS</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}>{CONTACT_INFO.phone}</a>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
              <div className="contact-item">
                <Clock size={18} className="contact-icon" />
                <span>Working Hours: {CONTACT_INFO.hours}</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook"><FacebookIcon size={16} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><InstagramIcon size={16} /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><TwitterIcon size={16} /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><LinkedinIcon size={16} /></a>
            </div>
          </div>
        </div>

        {/* Disclaimer per Bar Council of India */}
        <div className="footer-disclaimer-card">
          <p className="disclaimer-text">
            <strong>Bar Council of India Disclaimer:</strong> Under the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise. By accessing this website, the user acknowledges that: (1) the user wishes to know more about Signature Legal, its practice areas and its advocates, for their own information; (2) the information is provided only on the user's request and use of this site does not create an advocate-client relationship; (3) nothing on this website is legal advice or a legal opinion; (4) Signature Legal is not liable for any action taken in reliance on this website, and users must seek independent legal advice.
          </p>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Signature Legal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
