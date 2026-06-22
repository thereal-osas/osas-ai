import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { socialLinks } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact">
      <motion.div
        ref={ref}
        className="contact-wrapper"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-glow" />
        <div className="section-label">Let's work together</div>
        <h2 className="contact-title">
          Got a project<br />in mind?
        </h2>
        <p className="contact-sub">
          I'm currently taking on freelance projects and retainer clients.
          Response time under 24 hours.
        </p>
        <a
          href="mailto:abrahamosas3@gmail.com"
          className="btn-primary"
          style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
        >
          abrahamosas3@gmail.com
        </a>
        <div className="contact-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="social-link">
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
