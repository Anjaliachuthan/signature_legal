import React, { useState } from 'react';
import { X, Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, PRACTICE_AREAS } from '../data/legalData';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferredPracticeArea?: string;
  advocateName?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose,
  preferredPracticeArea = '',
  advocateName = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: preferredPracticeArea || 'Civil Litigation',
    message: advocateName ? `Inquiry regarding consultation with ${advocateName}: ` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <CheckCircle size={56} className="modal-success-icon" />
            <h3 className="modal-title">Consultation Requested</h3>
            <p className="modal-desc">
              Thank you for reaching out. A senior advocate from Signature Legal will review your submission and contact you securely within 24 hours.
            </p>
          </div>
        ) : (
          <div className="modal-grid">
            {/* Left Info Pane */}
            <div className="modal-info-pane">
              <span className="modal-eyebrow">CONFIDENTIAL COUNSEL</span>
              <h3 className="modal-info-title">Schedule a Consultation</h3>
              <p className="modal-info-desc">
                Share details of your legal matter. Our advocates evaluate all submissions with utmost confidentiality and strategic precision.
              </p>

              <div className="modal-contact-details">
                <div className="modal-info-item">
                  <MapPin size={18} className="modal-icon" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="modal-info-item">
                  <Phone size={18} className="modal-icon" />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="modal-info-item">
                  <Mail size={18} className="modal-icon" />
                  <span>{CONTACT_INFO.email}</span>
                </div>
              </div>

              <div className="modal-security-note">
                <small>All communications are protected by attorney-client privilege guidelines.</small>
              </div>
            </div>

            {/* Right Form Pane */}
            <form className="modal-form-pane" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Anand Murthy"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Contact Phone *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Primary Area of Inquiry</label>
                <select 
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                >
                  {PRACTICE_AREAS.map((p) => (
                    <option key={p.id} value={p.title}>{p.title}</option>
                  ))}
                  <option value="Arbitration & NCLT">Arbitration & Corporate Insolvency</option>
                  <option value="General Legal Advice">General Legal Advisory</option>
                </select>
              </div>

              <div className="form-group">
                <label>Brief Matter Summary</label>
                <textarea 
                  rows={4}
                  placeholder="Please describe the core points of your legal matter..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="modal-submit-btn">
                <span>Submit Matter for Review</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
