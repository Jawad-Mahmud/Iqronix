import React from "react"
import { Services } from "./components/Services"
import { About } from "./components/About"
import { Navbar } from "./components/Navbar"
import { Email } from "./components/Email"
import { Footer } from "./components/Footer"
import { FadeIn } from "./components/FadeIn"
import { Contact } from "./components/Contact"
import { Route,Routes, useLocation } from "react-router-dom"
import { Home } from "./components/Home"
export const App = () => {
  const location=useLocation();
  const hideFooter=location.pathname==="/contact";
  return (
    <>
      
    
      <Navbar/>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      
      <FadeIn>
        
          {!hideFooter && <Email />}
          <Footer/>
      </FadeIn>
    </>
  )
}
