import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/navbar.css';
import MemoryIcon from '@mui/icons-material/Memory'; 

export  function Navbar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <span className="navbar-logo">
               <MemoryIcon style={{ fontSize: '2.5rem', marginRight: '0.5rem', verticalAlign: 'middle' }} />
            Iqronix</span>

          {isDesktop ? (
            <>
              <div className="navbar-menu">
                <a href="/" className="navbar-link">Home</a>
                <a href="/about" className="navbar-link">About</a>
                <a href="/contact" className="navbar-link">Contact</a>
              </div>
              <button className="navbar-cta">Get Started</button>
            </>
          ) : (
            <>
              <div className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <MenuIcon className='menu-icon'style={{fontSize:'2.5rem'}} />
              </div>

              {isMobileMenuOpen && (
                <div className="navbar-menu mobile">
                  <a href="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                  <a href="/about" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                  <a href="/contact" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                  <button className="navbar-cta" onClick={() => setIsMobileMenuOpen(false)}>Get Started</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
