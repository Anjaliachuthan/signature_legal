import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ALL_PRACTICE_AREAS, PRACTICE_METHODOLOGY } from '../data/legalData';
import './PracticeAreasSection.css';

interface PracticeAreasProps {
  onSelectArea?: (areaTitle: string) => void;
  showMethodology?: boolean;
}

export const PracticeAreasSection: React.FC<PracticeAreasProps> = ({ 
  onSelectArea, 
  showMethodology = true 
}) => {
  return (
    <section className="practice-areas-section section-padding" id="practice-areas">
      <div className="container">
        {/* Section Heading */}
        <div className="practice-header">
          <h2 className="practice-main-title">Practice Areas</h2>
          <p className="practice-main-desc">
            A comprehensive overview of our specialized legal expertise and the matters we handle for our clients.
          </p>
        </div>

        {/* Clean Line-Item Row Layout Matching Wix Design */}
        <div className="practice-rows-list">
          {ALL_PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id} 
              className="practice-row-item"
              onClick={() => onSelectArea?.(area.title)}
            >
              <div className="practice-row-title-col">
                <h3 className="practice-row-title">{area.title}</h3>
              </div>

              <div className="practice-row-desc-col">
                <p className="practice-row-desc">{area.description}</p>
              </div>

              <div className="practice-row-action-col">
                <span className="practice-row-arrow" aria-label={`Learn more about ${area.title}`}>
                  <ArrowRight size={18} strokeWidth={1.8} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 01 Research | 02 Strategy | 03 Execution Methodology */}
        {showMethodology && (
          <div className="practice-methodology-section">
            <div className="methodology-grid">
              {PRACTICE_METHODOLOGY.map((step) => (
                <div key={step.number} className="method-step-col">
                  <span className="method-step-num">{step.number}</span>
                  <h4 className="method-step-title">{step.title}</h4>
                  <p className="method-step-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
