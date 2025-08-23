import  { useEffect } from 'react';
import Hero from '../pages/Hero.jsx';
import About from '../pages/About.jsx';
import Gallery from '../pages/Gallery.jsx';
import CTA from '../pages/CTA.jsx';
import Footer from '../pages/Footer.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import Service from '../pages/Service.jsx';
import Map from '../pages/Map.jsx';
import FAQs from '../pages/FAQs.jsx';

function App() {
  useEffect(() => {
window.scrollTo(0, 0);
}, []);
  return (
    <div className="bg-gray-950 text-white font-sans">
      <Hero/>
      <About/>
      <Service/>
      <Gallery/>
      <Testimonials dataId="testimonials"/>
      <CTA/>
      <Map/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default App
