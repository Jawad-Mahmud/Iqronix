import React, { useRef } from 'react'
import { FadeIn } from './FadeIn'
import { motion, useInView } from 'motion/react'
import "../styles/Home.css"
import { Fade } from './Fade'
import homeImg1 from '../assets/HomePic1.avif'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import serviceImg from '../assets/IqronixServicePic.avif';

import serviceImg2 from '../assets/IqronixServicePic2.avif'
import serviceImg3 from '../assets/IqronixServicePic3.avif'


export const Home = () => {
   const headingRef=useRef(null);
  const headingViewing=useInView(headingRef,{once:true});
  
  return (
    <>
    <div className='home-container-1'>
             
             
                <div className='home-sub-container'>
                    <motion.div
                  layout
                  ref={headingRef}
                  initial={{opacity:0,y:100}}
                  animate={headingViewing?{opacity:1,y:0}:{}}
                  transition={{duration:.6,ease:"easeOut"}}
                  className="home-heading"
                  
                  >Next-Gen Solutions</motion.div>
                
                    <FadeIn as="h1" className="home-header">Full-Suit Software Solutions for Startups</FadeIn>
                    
                   <FadeIn as="p" className="para1">
   Discover how our tech solutions can transform your business. Explore our features <br /> and take your business to new heights.                </FadeIn>
                  <FadeIn as='div' className='freeTrial-button'>Start Free Trial</FadeIn>
              
              
                </div>
                



                </div>

              <Fade as='div' direction='right' distance={250} className="home-pic-1" >
                <img src={homeImg1} alt="home-img1" className='img-1'/>
              </Fade>
              <div className="home-container-2">
              <Fade as='div' direction='left' distance={250} className="home-container-2-child-1">
                <div className='home-heading-2'>text content</div>
                <div className='home-flex'>
                  <h2>Transform Your Startup's Growth</h2>
                   <p>Boost your business with powerful tools and services to make growth easier, faster, and more effective. <br /> 
                   From optimized software to expert support, we’ll help your startup thrive.</p>
                  <p>  <CheckCircleIcon style={{ color: 'green',  fontSize: 20 }} />No credit card required</p>
                  <p>  <CheckCircleIcon style={{ color: 'green',  fontSize: 20 }} />No prior knowledge needed</p>
                </div>
              </Fade>


              
              <Fade direction='left' distance={250} className="child 2">
  <h3>Products</h3>
 
  <p>Unlock innovative software to streamline your business and <br />drive results</p>
  <div className="property">View Product</div>
</Fade>


<Fade direction='left' distance={250} className="child 3">
  <h3>Resources</h3>
  <p>Access guides, tools, and insights to help you grow and <br />optimize your workflow</p>
  <div className="property">View Resources</div>
</Fade>

<Fade direction='left' distance={250} className="child 4">
  <h3>Services</h3>
  <p>Get expert support, custom solutions, and hands-on help <br />tailored to your business</p>
   <div className="property">View Services</div>
</Fade>


          
              </div>






<div className="home-container-3">
  <Fade direction="left" distance={250} as="div" className="home-pic-2">
    <img src={serviceImg} alt="Service" className="home-image" />
  </Fade>
  <Fade direction="right" distance={250} as="div" className="home-container-3-child-1">
    <h2>Integrated Software <br />Development</h2>
    <p>Empower your business with comprehensive software solutions that adapt to your <br /> evolving needs. Our intuitive platform turns complexity into simplicity.</p>
  </Fade>
</div>

<div className="home-container-4">
  <Fade direction="left" distance={250} as="div" className="home-container-4-child-1">
    <h2>AI-Enhanced Marketing Solutions</h2>
    <p>Let artificial intelligence become your competitive edge in marketing. Our intelligent tools are designed to maximize engagement and results.</p>
  </Fade>
  <Fade direction="right" distance={250} as="div" className="home-pic-3">
    <img src={serviceImg2} alt="Service" className="home-image" />
  </Fade>
</div>

<div className="home-container-5">
  <Fade direction="left" distance={250} as="div" className="home-pic-4">
    <img src={serviceImg3} alt="Service" className="home-image" />
  </Fade>
  <Fade direction="right" distance={250} as="div" className="home-container-5-child-1">
    <h2>Flexible Cloud Solutions</h2>
    <p>Leverage adaptable cloud-based solutions to scale operations, boost efficiency, drive productivity, and enhance team collaboration.</p>
  </Fade>
</div>
                           
                    
              
              
              
              
                  
              
              
              
    
    </>
  )
}
