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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        </div>
        <div className='footer-s-footer'>
         <p>@ 2025 Iqronix Inc.Copyright and rights reserved <br /></p>   
         <p className='Privacy-Policy'>Privacy Policy</p>
        </div>
    </div>
    </FadeIn>
    </>
  )
}
