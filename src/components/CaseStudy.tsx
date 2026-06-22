import { useEffect } from 'react';
import type { CaseStudy } from '../data/portfolioData';
import propanalytixImg from '../assets/thumbnail-propanalytix.png';
import quikprintImg from '../assets/thumbnail-quikprint.png';
import quillImg from '../assets/thumbnail-quill.png';
import './CaseStudy.css';

const imageMap: Record<string, string> = {
  'src/assets/thumbnail-propanalytix.png': propanalytixImg,
  'src/assets/thumbnail-quikprint.png': quikprintImg,
  'src/assets/thumbnail-quill.png': quillImg,
};

interface Props {
  study: CaseStudy;
  onClose: () => void;
}

export default function CaseStudyPage({ study, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { sections } = study;
  const imageSrc = imageMap[study.imageSrc] || study.imageSrc;

  return (
    <div className="cs-page open" role="dialog" aria-modal="true">
      <nav className="cs-nav">
        <button className="cs-back" onClick={onClose}>
          ← Back to portfolio
        </button>
        <span style={{ fontSize: '0.8125rem', color: 'var(--text3)' }}>
          {study.eyebrow}
        </span>
      </nav>

      <div className="cs-content">
        <div className="cs-eyebrow">{study.eyebrow}</div>
        <h1 className="cs-title">{study.title}</h1>

        <div className="cs-meta">
          {study.meta.map((m) => (
            <div className="cs-meta-item" key={m.label}>
              <span className="cs-meta-label">{m.label}</span>
              <span className="cs-meta-val">{m.value}</span>
            </div>
          ))}
        </div>

        <div className="cs-video">
          <img src={imageSrc} alt={study.title} />
          <div className="cs-video-placeholder">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
              <path d="M20 16l14 8-14 8V16z" fill="currentColor" fillOpacity="0.4" />
            </svg>
            <p>Project demo image</p>
          </div>
        </div>

        {/* Overview */}
        {sections.overview && (
          <div className="cs-section">
            <h2 className="cs-section-label">Overview</h2>
            <p>{sections.overview}</p>
          </div>
        )}

        {/* Problem */}
        {sections.problem && (
          <div className="cs-section">
            <h2 className="cs-section-label">The problem</h2>
            <div className="cs-problem-box">
              <p>{sections.problem}</p>
            </div>
          </div>
        )}

        {/* Technical Decisions */}
        {sections.decisions && sections.decisions.length > 0 && (
          <div className="cs-section">
            <h2 className="cs-section-label">Technical decisions</h2>
            {sections.decisions.map((d) => (
              <div className="cs-decision" key={d.title}>
                <h4>{d.title}</h4>
                <p>{d.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Challenges */}
        {sections.challenges && sections.challenges.length > 0 && (
          <div className="cs-section">
            <h2 className="cs-section-label">Challenges</h2>
            {sections.challenges.map((c, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: c }} />
            ))}
          </div>
        )}

        {/* Pipeline */}
        {sections.pipeline && sections.pipeline.length > 0 && (
          <div className="cs-section">
            <h2 className="cs-section-label">How it works — the full pipeline</h2>
            {sections.pipeline.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        )}

        {/* Results */}
        {sections.metrics && sections.metrics.length > 0 && (
          <div className="cs-section">
            <h2 className="cs-section-label">Results</h2>
            <div className="cs-metrics">
              {sections.metrics.map((m) => (
                <div className="cs-metric" key={m.label}>
                  <div className="cs-metric-num">{m.value}</div>
                  <div className="cs-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stack */}
        {sections.stack && sections.stack.length > 0 && (
          <div className="cs-section">
            <h2 className="cs-section-label">Full stack</h2>
            <div className="cs-stack">
              {sections.stack.map((s) => (
                <span
                  key={s.label}
                  className={`cs-tag${s.highlighted ? ' hl' : ''}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="cs-cta">
          <h3>{study.cta.heading}</h3>
          <p>{study.cta.sub}</p>
          <a href="mailto:abrahamosas3@gmail.com" className="btn-primary">
            {study.cta.buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
