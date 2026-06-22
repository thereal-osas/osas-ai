import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

interface Props {
  onOpenCaseStudy: (id: string) => void;
}

export default function Projects({ onOpenCaseStudy }: Props) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="projects">
      <motion.div
        ref={headerRef}
        className="projects-header"
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="section-label">Selected work</div>
          <h2 className="section-title">Things I've built</h2>
        </div>
        <a
          href="https://github.com/yourusername"
          className="btn-ghost"
          style={{ fontSize: '0.875rem', padding: '0.625rem 1.5rem' }}
        >
          View GitHub
        </a>
      </motion.div>

      {projects.map((project) => (
        <RevealCard key={project.num}>
          <ProjectCard project={project} onOpenCaseStudy={onOpenCaseStudy} />
        </RevealCard>
      ))}
    </section>
  );
}

function RevealCard({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
