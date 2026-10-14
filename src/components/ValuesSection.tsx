import React from 'react';
import { VALUES } from '../data/legalData';
import './ValuesSection.css';

export const ValuesSection: React.FC = () => {
  return (
    <section className="values-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">GUIDING PRINCIPLES</span>
          <h2 className="section-title">Our Values</h2>
          <div className="values-divider"></div>
        </div>

        <div className="values-grid">
          {VALUES.map((val) => (
            <div key={val.number} className="value-card">
              <div className="value-number-wrapper">
                <span className="value-number">{val.number}</span>
                <span className="value-number-line"></span>
              </div>
              <h3 className="value-card-title">{val.title}</h3>
              <p className="value-card-desc">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
