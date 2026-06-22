import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '../data/portfolioData';
import './Services.css';

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">What I do</div>
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          I work with startups, SMEs, and founders to build the digital
          infrastructure their business needs to grow.
        </p>
      </motion.div>

      <ServicesGrid />
    </section>
  );
}

function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="services-grid"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {services.map((service) => (
        <div className="service-item" key={service.title}>
          <div className="service-icon">{service.icon}</div>
          <div className="service-title">{service.title}</div>
          <p className="service-desc">{service.description}</p>
        </div>
      ))}
    </motion.div>
  );
}
