import { motion } from 'framer-motion';
import { stats } from '../data/portfolioData';
import './Hero.css';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
});

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <motion.div className="hero-eyebrow" {...fadeUp(0.1)}>
        AI Automation & Agent Systems Specialist
      </motion.div>

      <motion.h1 className="hero-headline" {...fadeUp(0.2)}>
        I make <span className="ac">businesses <span className='dm'>run on</span> AI</span>
      </motion.h1>

      <motion.p className="hero-sub" {...fadeUp(0.35)}>
        AI automation systems, intelligent agents, and the web infrastructure that powers them — built for businesses that are tired of doing manually what AI should handle.
      </motion.p>

      <motion.div className="hero-actions" {...fadeUp(0.45)}>
        <a href="#projects" className="btn-primary">View my work</a>
        <a href="#contact" className="btn-ghost">Let's talk</a>
      </motion.div>

      <motion.div className="hero-stats" {...fadeUp(0.55)}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="stat-num">
              {stat.value}<span>{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
