import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react';
import "../styles/Service.css"
import { FadeIn } from './FadeIn';
import serviceImg from '../assets/IqronixServicePic.avif';
import { Fade } from './Fade';
import serviceImg2 from '../assets/IqronixServicePic2.avif'
import serviceImg3 from '../assets/IqronixServicePic3.avif'
export const Services = () => {
    const headingRef=useRef(null);
  
  const headingViewing=useInView(headingRef,{once:true});

  return (
    <>
    <div className='service-container-1'>
          
          
             <div className='service-sub-container'>
                 <motion.div
               layout
               ref={headingRef}
               initial={{opacity:0,y:100}}
               animate={headingViewing?{opacity:1,y:0}:{}}
               transition={{duration:.6,ease:"easeOut"}}
               className="about-heading"
               
               >What we do</motion.div>
             
                 <FadeIn as="h1" className="service-header">Services and solutions</FadeIn>
                 
                <FadeIn as="p" className="para1">
Discover how our tech solutions can transform your business. Explore our features <br /> and take your business to new heights.                </FadeIn>
             </div>
             
         
             </div>

             <div className="service-container-2">
                 <Fade direction='left' distance={250} as='div' className="service-pic-1">
                   <img src={serviceImg} alt="Service" className='service-image' /> 
                 </Fade>
                 <Fade direction="right" distance={250}as='div' className="service-container-2-child-1">
                
                   <h2>Integrated Software <br />Development</h2>
                  <p>Empower your business with comprehensive software solutions that adapt to your <br /> evolving needs. Our intuitive platform turns complexity into simplicity.</p>


                
                  
                  
            </Fade>
              
             </div>


                <div className="service-container-3">
                <Fade direction="left" distance={-250}as='div' className="service-container-3-child-1">
                
                   <h2>AI-Enhanced Marketing Solutions </h2>
                  <p>Let artificial intelligence become your competitive edge in marketing. Our intelligent tools are designed to maximize engagement and results.</p>


                
                  
                  
            </Fade>
              
              
                 <Fade direction='right' distance={-250} as='div' className="service-pic-2">
                   <img src={serviceImg2} alt="Service" className='service-image' /> 
                 </Fade>
              
              
             </div>





              <div className="service-container-4">
                 <Fade direction='left' distance={250} as='div' className="service-pic-3">
                   <img src={serviceImg3} alt="Service" className='service-image' /> 
                 </Fade>
                 <Fade direction="right" distance={250}as='div' className="service-container-4-child-1">
                
                   <h2>Flexible Cloud Solutions</h2>
                  <p>Leverage adaptable cloud-based solutions to scale operations, boost efficiency, drive productivity, and enhance team collaboration.</p>


                
                  
                  
            </Fade>
              
             </div>
      




    </>
  )
}
