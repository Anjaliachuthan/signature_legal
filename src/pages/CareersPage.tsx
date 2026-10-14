import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './CareersPage.css';

interface CareersPageProps {
  onOpenContact: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = () => {
  const [appliedRole, setAppliedRole] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const openings = [
    {
      title: 'Senior Associate – Commercial & NCLT Litigation',
      experience: '5–8 Years PQE',
      location: 'Bengaluru (Koramangala)',
      type: 'Full-time',
      desc: 'Seeking an advocate with proven track record in insolvency, company tribunal proceedings, and commercial contract disputes.'
    },
    {
      title: 'Associate Advocate – Civil & Property Disputes',
      experience: '2–4 Years PQE',
      location: 'Bengaluru (Koramangala)',
      type: 'Full-time',
      desc: 'Candidate must have courtroom experience in city civil courts, handling land title verifications, injunction suits, and recovery matters.'
    },
    {
      title: 'Legal Research & Judicial Clerkship Intern',
      experience: 'Final Year Law Student',
      location: 'Bengaluru',
      type: 'Internship (3–6 months)',
      desc: 'Assist senior counsel with case law research, drafting writ petitions, and case synopsis preparation for High Court matters.'
    }
  ];

  const handleApply = (title: string) => {
    setAppliedRole(title);
    setSuccess(false);
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setAppliedRole(null);
    }, 2800);
  };

  return (
    <div className="careers-page-root">
      <div className="page-hero-banner">
        <div className="container">
          <span className="section-eyebrow">JOIN OUR CHAMBERS</span>
          <h1 className="page-hero-title">Careers at Signature Legal</h1>
          <p className="page-hero-desc">
            We foster a culture of intellectual rigor, high ethical advocacy, and continuous mentorship for ambitious legal minds.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="careers-intro-box">
          <h2 className="serif-font">Grow With A Practice Dedicated to Excellence</h2>
          <p>
            At Signature Legal, our associates and interns work directly with lead advocates on substantive matters, gaining direct exposure to bench argument strategies, commercial negotiation, and high-stakes litigation.
          </p>
        </div>

        <div className="openings-list">
          <h3 className="openings-heading">Current Practice Openings</h3>

          {openings.map((job, idx) => (
            <div key={idx} className="job-card">
              <div className="job-info">
                <h4 className="job-title">{job.title}</h4>
                <div className="job-badges">
                  <span className="job-badge">{job.experience}</span>
                  <span className="job-badge">{job.location}</span>
                  <span className="job-badge">{job.type}</span>
                </div>
                <p className="job-desc">{job.desc}</p>
              </div>

              <div className="job-action">
                <button 
                  className="job-apply-btn"
                  onClick={() => handleApply(job.title)}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Modal */}
        {appliedRole && (
          <div className="job-modal-backdrop" onClick={() => setAppliedRole(null)}>
            <div className="job-modal-box" onClick={(e) => e.stopPropagation()}>
              {success ? (
                <div className="job-success">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3>Application Submitted</h3>
                  <p>Our recruitment committee has received your details for <strong>{appliedRole}</strong> and will reach out if shortlisted.</p>
                </div>
              ) : (
                <form onSubmit={submitApplication}>
                  <div className="job-modal-header">
                    <h3>Apply for Position</h3>
                    <p>{appliedRole}</p>
                  </div>
                  <div className="form-group">
                    <label>Candidate Name *</label>
                    <input type="text" required placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="name@domain.com" />
                  </div>
                  <div className="form-group">
                    <label>Bar Council Enrollment / Law University *</label>
                    <input type="text" required placeholder="e.g. KAR/1234/2020 or NLSIU" />
                  </div>
                  <div className="form-group">
                    <label>Brief Cover Note & LinkedIn / CV Link</label>
                    <textarea rows={3} required placeholder="Paste your CV link (Google Drive / LinkedIn) or summary of experience..." />
                  </div>
                  <div className="modal-actions">
                    <button type="button" className="btn-cancel" onClick={() => setAppliedRole(null)}>Cancel</button>
                    <button type="submit" className="btn-submit">Submit Application</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
