
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Copyright from './Components/Copyright';
import Header from './Components/Header/Header';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current ? heroRef.current.getBoundingClientRect().bottom : 0;
      if (window.scrollY > heroBottom) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {showNavbar ? <Navbar /> : <Header />}
      <Routes>
        <Route path="/" element={<Home heroRef={heroRef} />} />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;