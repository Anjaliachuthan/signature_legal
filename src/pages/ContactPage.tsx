import React, { useState } from 'react';
import { OUR_SERVICES } from '../data/servicesData';
import { CheckCircle2, ChevronDown, Send } from 'lucide-react';
import './ContactPage.css';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService = '' }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: initialService || 'Legal Content Optimization',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        service: 'Legal Content Optimization',
        message: ''
      });
    }, 3500);
  };

  return (
    <div className="contact-page-root">
      {/* Top Section Header */}
      <div className="container contact-header-section">
        <span className="contact-eyebrow">Explore our services and get in touch</span>
        <h1 className="contact-main-heading">Our Services</h1>
      </div>

      {/* Services Cards (3-column layout matching screenshot) */}
      <div className="container">
        <div className="services-cards-grid">
          {OUR_SERVICES.map((srv) => (
            <div key={srv.id} className="service-item-card">
              <div className="service-image-box">
                <img src={srv.image} alt={srv.title} className="service-img" />
              </div>

              <div className="service-info-box">
                <span className="service-step-num">{srv.number}</span>
                <h3 className="service-title">{srv.title}</h3>
                
                <p className="service-desc">
                  {srv.description}
                  {expandedCard === srv.id && (
                    <span className="service-desc-more"> {srv.expandedDetails}</span>
                  )}
                </p>

                <button 
                  type="button"
                  className="show-more-toggle" 
                  onClick={() => toggleExpand(srv.id)}
                >
                  {expandedCard === srv.id ? 'Show less' : 'Show more'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Inquiry Form matching screenshot layout */}
        <div className="service-inquiry-container">
          <div className="inquiry-header">
            <h2 className="inquiry-title">Service Inquiry</h2>
            <p className="inquiry-subtitle">
              Fill in the form below to let us know which service you're interested in and how we can help - we'll get back to you as soon as possible.
            </p>
          </div>

          {submitted ? (
            <div className="inquiry-success-message">
              <CheckCircle2 size={48} className="success-icon" />
              <h3>Thank You for Reaching Out</h3>
              <p>Your request has been submitted successfully. Our practice coordinators will contact you shortly.</p>
            </div>
          ) : (
            <form className="service-inquiry-form" onSubmit={handleSubmit}>
              {/* Row 1: First name & Last name */}
              <div className="inquiry-form-row">
                <div className="inquiry-form-group">
                  <label htmlFor="firstName">First name *</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="inquiry-form-group">
                  <label htmlFor="lastName">Last name *</label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: Phone number */}
              <div className="inquiry-form-group">
                <label htmlFor="phoneNumber">Phone number *</label>
                <div className="phone-input-wrap">
                  <span className="phone-country-indicator">
                    🌐 <ChevronDown size={14} />
                  </span>
                  <input
                    id="phoneNumber"
                    type="tel"
                    required
                    placeholder="+91 88923 43289"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 3: Which service are you interested in? */}
              <div className="inquiry-form-group">
                <label htmlFor="serviceSelect">Which service are you interested in?</label>
                <div className="select-wrap">
                  <select
                    id="serviceSelect"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Legal Content Optimization">Legal Content Optimization</option>
                    <option value="Responsive Website Makeover">Responsive Website Makeover</option>
                    <option value="Legal Insights Publishing">Legal Insights Publishing</option>
                    <option value="Civil & Commercial Litigation">Civil & Commercial Litigation</option>
                    <option value="Arbitration & Insolvency Matters">Arbitration & Insolvency Matters</option>
                  </select>
                  <ChevronDown size={16} className="select-arrow" />
                </div>
              </div>

              {/* Row 4: Add a message */}
              <div className="inquiry-form-group">
                <label htmlFor="messageBox">Add a message or tell us more about what you need</label>
                <textarea
                  id="messageBox"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit CTA button */}
              <div className="inquiry-submit-row">
                <button type="submit" className="inquiry-submit-btn">
                  <span>Send Request</span>
                  <Send size={15} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
