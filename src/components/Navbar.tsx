import React, { useState } from 'react';
import { Scale, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'practice-areas', label: 'PRACTICE AREAS' },
    { id: 'our-team', label: 'OUR TEAM' },
    { id: 'careers', label: 'CAREERS' },
    { id: 'legal', label: 'LEGAL' },
    { id: 'blog', label: 'BLOG' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => handleNavClick('home')}>
          <div className="brand-logo-icon">
            <Scale size={24} strokeWidth={1.8} className="scale-icon" />
          </div>
          <div className="brand-titles">
            <span className="brand-name">SIGNATURE</span>
            <span className="brand-sub">LEGAL</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
            >
              {link.label}
              {activeTab === link.id && <span className="nav-indicator" />}
            </button>
          ))}
        </nav>

        {/* Contact CTA Button */}
        <div className="navbar-actions">
          <button className="nav-contact-btn" onClick={() => handleNavClick('contact')}>
            <span>CONTACT US</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`mobile-nav-link ${activeTab === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <button
              className="mobile-contact-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
