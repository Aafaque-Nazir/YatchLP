import { useEffect, useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import Hero from '../pages/Hero.jsx';
import About from '../pages/About.jsx';
import Packages from '../pages/Packages.jsx';
import Experience from '../pages/Experience.jsx';
import Gallery from '../pages/Gallery.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import FAQs from '../pages/FAQs.jsx';
import Map from '../pages/Map.jsx';
import CTA from '../pages/CTA.jsx';
import Footer from '../pages/Footer.jsx';
import EnquiryModal from './components/EnquiryModal.jsx';
import Navbar from './components/Navbar.jsx';
import FloatingConcierge from './components/FloatingConcierge.jsx';

function AnchorScroller() {
  const lenis = useLenis();
  useEffect(() => {
    const handleHashClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis?.scrollTo(el, { offset: -90 });
        }
      }
    };
    
    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, [lenis]);
  
  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const openBookModal = (pkgName = "") => {
    setSelectedPackage(pkgName);
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <AnchorScroller />
      <div className="bg-slate-50 text-slate-900 font-sans min-h-screen overflow-x-hidden">
        <Navbar onBook={openBookModal} />
        <EnquiryModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          prefillPackage={selectedPackage}
        />
        <FloatingConcierge />
        
        {/* Main Content Flow */}
        <Hero onBook={openBookModal} />
        <About />
        <Experience />
        <Packages onBook={openBookModal} />
        <Gallery />
        <Testimonials dataId="testimonials"/>
        <FAQs />
        <Map />
        <CTA />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
