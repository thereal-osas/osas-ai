import { useState, useCallback } from 'react';
import { caseStudies } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyPage from './components/CaseStudy';
import CustomCursor from './components/CustomCursor';

function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const openCaseStudy = useCallback((id: string) => {
    setActiveCaseStudy(id);
  }, []);

  const closeCaseStudy = useCallback(() => {
    setActiveCaseStudy(null);
  }, []);

  const activeStudy = caseStudies.find((cs) => cs.id === activeCaseStudy);

  return (
    <>
      <CustomCursor />

      {/* Case Study Overlay */}
      {activeStudy && (
        <CaseStudyPage study={activeStudy} onClose={closeCaseStudy} />
      )}

      {/* Main Portfolio */}
      <div id="main-portfolio">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Projects onOpenCaseStudy={openCaseStudy} />
        <Services />
        <Process />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
