import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/navbar.css';
import MemoryIcon from '@mui/icons-material/Memory'; 
import { Link } from 'react-router-dom';

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
            FrontLab</span>

          {isDesktop ? (
            <>
              <div className="navbar-menu">
             <Link to="/" className="navbar-link">Home</Link>
             <Link to="/about" className="navbar-link">About</Link>
             <Link to="/contact" className="navbar-link">Contact</Link>
             <Link to="/services" className="navbar-link">Service</Link>
              </div>
            
            </>
          ) : (
            <>
              <div className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <MenuIcon className='menu-icon'style={{fontSize:'2.5rem'}} />
              </div>

              {isMobileMenuOpen && (
                <div className="navbar-menu mobile">
                 <Link to="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
<Link to="/about" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
<Link to="/services" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
<Link to="/contact" className='navbar-link' onClick={() => setIsMobileMenuOpen(false)}>
  <button className="navbar-cta">Contact Us</button>
</Link>  

</div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
