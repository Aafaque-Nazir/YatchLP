import  { useEffect, useState } from 'react';
import Hero from '../pages/Hero.jsx';
import About from '../pages/About.jsx';
import Gallery from '../pages/Gallery.jsx';
import CTA from '../pages/CTA.jsx';
import Footer from '../pages/Footer.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import Service from '../pages/Service.jsx';
import Map from '../pages/Map.jsx';
import FAQs from '../pages/FAQs.jsx';
import Packages from '../pages/Packages.jsx';
import Amenities from '../pages/Amenities.jsx';
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
    <div className="bg-slate-950 text-slate-50 font-sans">
      <Navbar onBook={openBookModal} />
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        prefillPackage={selectedPackage}
      />
      
      <Hero />
      <Amenities />
      <About />
      <Packages onBook={openBookModal} />
      <Service />
      <Gallery />
      <Testimonials dataId="testimonials"/>
      <CTA />
      <Map />
      <FAQs />
      <Footer />
    </div>
  )
}

export default App
