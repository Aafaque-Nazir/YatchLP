import  { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
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
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="bg-navy-950 text-slate-50 font-sans min-h-screen">
        <Navbar onBook={openBookModal} />
        <EnquiryModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          prefillPackage={selectedPackage}
        />
        
        {/* Storytelling Flow */}
        <Hero onBook={openBookModal} />
        <About />
        <Packages onBook={openBookModal} />
        <Experience />
        <Gallery />
        <Testimonials dataId="testimonials"/>
        <FAQs />
        <Map />
        <CTA />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
