import React from 'react';
import { Calendar, User, ArrowRight, Scale } from 'lucide-react';
import './LegalBlogPage.css';

interface LegalBlogPageProps {
  onOpenContact: () => void;
}

export const LegalBlogPage: React.FC<LegalBlogPageProps> = ({ onOpenContact }) => {
  const articles = [
    {
      id: 1,
      title: 'Deciphering IBC Section 9 Pre-Existing Disputes in Corporate Insolvency',
      category: 'Insolvency & Bankruptcy',
      date: 'October 12, 2026',
      author: 'Tahura Anzar, Advocate',
      readTime: '6 min read',
      excerpt: 'An in-depth statutory review of recent Supreme Court pronouncements concerning demand notice defenses and threshold conditions under the Insolvency and Bankruptcy Code.'
    },
    {
      id: 2,
      title: 'Specific Performance Suits: Navigating Readiness and Willingness under Section 16(c)',
      category: 'Property & Civil Litigation',
      date: 'September 28, 2026',
      author: 'Chandana Gururaj, Advocate',
      readTime: '8 min read',
      excerpt: 'Analyzing the mandatory procedural evidentiary thresholds for plaintiffs asserting contract enforceability in high-value Bengaluru commercial and residential realty disputes.'
    },
    {
      id: 3,
      title: 'Quashing Criminal Proceedings under Section 482 of CrPC / BNSS in Commercial Breaches',
      category: 'Criminal Jurisprudence',
      date: 'September 15, 2026',
      author: 'Fredrick Richardson, Advocate',
      readTime: '10 min read',
      excerpt: 'Judicial precedents demarcating genuine civil defaults from culpable criminal breach of trust, and the invocation of inherent High Court powers to prevent abuse of process.'
    }
  ];

  return (
    <div className="blog-page-root">
      <div className="page-hero-banner">
        <div className="container">
          <span className="section-eyebrow">LEGAL THOUGHT & PRECEDENT REVIEWS</span>
          <h1 className="page-hero-title">Legal Insights & Blog</h1>
          <p className="page-hero-desc">
            Perspectives, case commentaries, and statutory analyses authored by Signature Legal advocates on evolving landmark jurisprudence.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="blog-grid">
          {articles.map((item) => (
            <article key={item.id} className="blog-card">
              <div className="blog-top-meta">
                <span className="blog-category">{item.category}</span>
                <span className="blog-readtime">{item.readTime}</span>
              </div>

              <h2 className="blog-title">{item.title}</h2>
              <p className="blog-excerpt">{item.excerpt}</p>

              <div className="blog-footer">
                <div className="blog-author-meta">
                  <div className="author-row">
                    <User size={14} className="author-icon" />
                    <span>{item.author}</span>
                  </div>
                  <div className="author-row">
                    <Calendar size={14} className="author-icon" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <button className="read-full-link" onClick={onOpenContact}>
                  <span>Inquire on Topic</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="legal-notice-box">
          <Scale size={24} className="notice-scale" />
          <div>
            <h4>Informational Content Only</h4>
            <p>
              The articles and insights published here are provided strictly for educational purposes and academic discourse. They do not constitute legal advice or formal attorney-client engagement under Bar Council of India norms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
