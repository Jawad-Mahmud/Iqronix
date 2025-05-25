import React from 'react'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import "../styles/Footer.css"
import MemoryIcon from '@mui/icons-material/Memory'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FadeIn } from './fadeIn';
export const Footer = () => {
  return (
    <>
    <FadeIn>

    
    <div className='footer-container'>
      <div className='logo'>
           <MemoryIcon style={{ fontSize: '2.5rem', marginRight: '0.5rem', verticalAlign: 'middle' }} />
        Iqronix
        </div>  
        <div className='footer-s-navbar-links'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contact">Contact Us</Link>
        <Link className='link' to="/services">Services</Link>
        </div>
        <div className='footer-s-footer'>
         <p className='copyright'>@ 2025 Iqronix Inc.Copyright and rights reserved <br /></p>   
         <p className='privacy-policy'>Privacy Policy</p>
        </div>
    </div>
    </FadeIn>
    </>
  )
}
