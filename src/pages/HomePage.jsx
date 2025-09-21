import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Eyes from '../components/Eyes';
import Featured from '../components/Featured';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const HomePage = () => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const initializeScroll = () => {
      if (scrollRef.current) {
        // Destroy existing instance if it exists
        if (scrollInstance.current) {
          scrollInstance.current.destroy();
        }
        
        // Create new instance
        scrollInstance.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed'
        });
      }
    };

    // Small delay to ensure DOM is ready after route change
    const timer = setTimeout(initializeScroll, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]); // Reinitialize on route change

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default HomePage;