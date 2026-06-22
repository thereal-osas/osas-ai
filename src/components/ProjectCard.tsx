import { useRef } from 'react';
import type { Project } from '../data/portfolioData';
import propanalytixImg from '../assets/thumbnail-propanalytix.png';
import quikprintImg from '../assets/thumbnail-quikprint.png';
import quillImg from '../assets/thumbnail-quill.png';
import './ProjectCard.css';

const imageMap: Record<string, string> = {
  'src/assets/thumbnail-propanalytix.png': propanalytixImg,
  'src/assets/thumbnail-quikprint.png': quikprintImg,
  'src/assets/thumbnail-quill.png': quillImg,
};

interface Props {
  project: Project;
  onOpenCaseStudy: (id: string) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: Props) {
  const imageRef = useRef<HTMLImageElement>(null);
  const imageSrc = imageMap[project.imageSrc] || project.imageSrc;

  return (
    <div className="project-card">
      <div className={`project-inner${project.reverse ? ' reverse' : ''}`}>
        {/* Visual / Image side */}
        <div
          className="project-visual"
        >
          <div className="video-wrap">
            <img ref={imageRef} src={imageSrc} alt={project.title} />
          </div>

          <div className="live-badge">
            <div className="live-dot" />
            {project.liveBadge}
          </div>
          <div className="video-overlay" />
        </div>

        {/* Info side */}
        <div className="project-info">
          <div className="project-num">{project.num}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span
                key={tag.label}
                className={`tag${tag.featured ? ' featured' : ''}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.links.map((link) => {
              if (link.variant === 'case-study' && link.caseStudyId) {
                return (
                  <button
                    key={link.label}
                    className="project-link case-study"
                    onClick={() => onOpenCaseStudy(link.caseStudyId!)}
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`project-link${link.variant === 'ghost' ? ' ghost' : ''}`}
                >
                  {link.label}{' '}
                  {link.variant !== 'case-study' && (
                    <span className="link-arrow">↗</span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Placeholder Graphics ─────────────────────────── */
// function DashboardPlaceholder() {
//   return (
//     <div className="ph-dashboard">
//       <div className="ph-titlebar">
//         <div className="ph-dot red" />
//         <div className="ph-dot yellow" />
//         <div className="ph-dot green" />
//         <div className="ph-titlebar-url" />
//       </div>
//       <div className="ph-body">
//         <div className="ph-sidebar">
//           <div className="ph-bar accent" style={{ width: '70%' }} />
//           <div className="ph-bar" />
//           <div className="ph-bar" />
//         </div>
//         <div className="ph-main">
//           <div className="ph-cards-row">
//             <div className="ph-stat-card accent-card" />
//             <div className="ph-stat-card teal-card" />
//             <div className="ph-stat-card red-card" />
//           </div>
//           <div className="ph-chart">
//             <svg viewBox="0 0 100 40">
//               <polyline
//                 points="0,35 20,20 40,28 60,8 80,18 100,5"
//                 fill="none"
//                 stroke="#e8ff6b"
//                 strokeWidth="1.5"
//                 opacity="0.7"
//               />
//               <polyline
//                 points="0,35 20,20 40,28 60,8 80,18 100,5 100,40 0,40"
//                 fill="rgba(232,255,107,0.05)"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CrmPlaceholder() {
//   const rows = [
//     { color: 'var(--accent)', badgeBg: 'rgba(232,255,107,0.15)', badgeBorder: 'rgba(232,255,107,0.3)', highlight: true },
//     { color: 'var(--accent3)', badgeBg: 'rgba(107,255,212,0.1)', badgeBorder: 'rgba(107,255,212,0.3)', highlight: false },
//     { color: 'var(--accent2)', badgeBg: 'rgba(255,107,107,0.1)', badgeBorder: 'rgba(255,107,107,0.3)', highlight: false },
//     { color: 'var(--accent)', badgeBg: 'var(--border-h)', badgeBorder: 'transparent', highlight: false },
//   ];

//   return (
//     <div className="ph-crm">
//       <div className="ph-titlebar">
//         <div className="ph-dot red" />
//         <div className="ph-dot yellow" />
//         <div className="ph-dot green" />
//       </div>
//       <div className="ph-crm-rows">
//         {rows.map((row, i) => (
//           <div
//             key={i}
//             className={`ph-crm-row${row.highlight ? ' hl' : ''}`}
//             style={{ opacity: i === 3 ? 0.5 : 1 }}
//           >
//             <div
//               className="ph-avatar"
//               style={{ background: row.color }}
//             />
//             <div className="ph-crm-text">
//               <div className="ph-bar light" style={{ width: `${55 + i * 5}%`, marginBottom: 3 }} />
//               <div className="ph-bar" style={{ width: `${35 + i * 5}%` }} />
//             </div>
//             <div
//               className="ph-badge"
//               style={{
//                 background: row.badgeBg,
//                 borderColor: row.badgeBorder,
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function AiPlaceholder() {
//   return (
//     <div className="ph-ai">
//       <div className="ph-ai-header">
//         <div className="ph-ai-logo">
//           <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//             <circle cx="6" cy="6" r="4" stroke="#6bffd4" strokeWidth="1" />
//             <path d="M4 6h4M6 4v4" stroke="#6bffd4" strokeWidth="1" strokeLinecap="round" />
//           </svg>
//         </div>
//         <div className="ph-bar" style={{ flex: 1 }} />
//         <div className="ph-dot green" style={{ width: 8, height: 8 }} />
//       </div>
//       <div className="ph-ai-chat">
//         {/* User query */}
//         <div className="ph-bubble user">
//           <div className="ph-bar accent" style={{ marginBottom: 3 }} />
//           <div className="ph-bar accent-light" style={{ width: '80%' }} />
//         </div>
//         {/* Thinking */}
//         <div className="ph-bubble thinking">
//           <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//             <circle cx="5" cy="5" r="4" stroke="#6bffd4" strokeWidth="1" opacity="0.6" />
//             <path d="M3 5h4" stroke="#6bffd4" strokeWidth="1" strokeLinecap="round" />
//           </svg>
//           <div className="ph-bar teal" style={{ flex: 1 }} />
//         </div>
//         {/* AI response */}
//         <div className="ph-bubble ai">
//           <div className="ph-bar light" style={{ marginBottom: 4 }} />
//           <div className="ph-bar lighter" style={{ width: '90%', marginBottom: 4 }} />
//           <div className="ph-bar lightest" style={{ width: '70%', marginBottom: 6 }} />
//           <div className="ph-citation-chips">
//             <div className="ph-chip" style={{ width: 55 }} />
//             <div className="ph-chip" style={{ width: 45 }} />
//           </div>
//         </div>
//       </div>
//       <div className="ph-ai-input">
//         <div className="ph-input-bar" />
//         <div className="ph-send-btn" />
//       </div>
//     </div>
//   );
// }
