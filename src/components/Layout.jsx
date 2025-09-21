import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
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
      {children}
      <Footer />
    </div>
  );
};

export default Layout;