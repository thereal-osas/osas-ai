import { marqueeItems } from '../data/portfolioData';
import './Marquee.css';

export default function Marquee() {
  // Duplicate the list so it can loop seamlessly
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-item marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
