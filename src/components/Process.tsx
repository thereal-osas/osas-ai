import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { processSteps } from '../data/portfolioData';
import './Process.css';

export default function Process() {
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const listInView = useInView(listRef, { once: true, margin: '-60px' });

  return (
    <section>
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">How I work</div>
        <h2 className="section-title">My process</h2>
      </motion.div>

      <motion.div
        ref={listRef}
        className="process-list"
        initial={{ opacity: 0, y: 24 }}
        animate={listInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {processSteps.map((step) => (
          <div className="process-step" key={step.num}>
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
