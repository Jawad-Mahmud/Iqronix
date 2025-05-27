import React, { useEffect, useState,useRef } from 'react'
import { motion,useInView } from 'motion/react'
import { ShimmerText } from './ShimmerText'
import "../styles/Contact.css"
import { FadeIn } from './FadeIn'

export const Contact=()=>{
  const [formdata, setformdata] = useState({
fullName:'',
email:'',
nationality:'',
message:'',
  })
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setformdata((prev)=>({
     ...prev,
     [name]:value,

    })
  );
  }
    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log('form submitted');
     alert('info submitted successfully',formdata);


    }
      const headingRef = useRef(null);
      const headingViewing = useInView(headingRef);



   return(
    <>
       <div className='container-1'>
       
       
          <div className='contact-container'>
              <motion.div
            layout
            ref={headingRef}
            initial={{opacity:0,y:100}}
            animate={headingViewing?{opacity:1,y:0}:{}}
            transition={{duration:.6,ease:"easeOut"}}
            className="about-heading"
            
            >ABOUT US</motion.div>
          
              <FadeIn as="h1" className="contact-header">Get In Touch</FadeIn>
              
             <FadeIn as="p" className="para1">
                Feel free to reach out to us using the options below,<br /> and our dedicated team will respond to your inquiries promptly.
             </FadeIn>
          </div>
          
      
          </div>




        


   
     

   <div className='contact-container-2'>
    <h2 className='contact-header'>Contact us</h2>
    <form  onSubmit={handleSubmit} className='contact-form'>
      <FadeIn as='div' className='input-item'>
        <label>Name</label>
        <br />
        <input type="text"
        value={formdata.fullName}
        onChange={handleChange}
        required
        />
      </FadeIn>

      <FadeIn as='div'  className='input-item'>
        <label>Email</label>
        <br />
           <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
   


      </FadeIn>
        <FadeIn as='div'  className='input-item'>
          <label>Nationality:</label>
          <br />
          <input
            type="text"
            name="nationality"
            value={formdata.nationality}
            onChange={handleChange}
            required
          />
        </FadeIn>
         <FadeIn as='div'  className='input-item'>
          <label>Message:</label>
          <br />
          <input
            type="text"
            name="message"
            value={formdata.message}
            onChange={handleChange}
            required
            className='message-input'
          />
        </FadeIn>
        <FadeIn as='div'> <button type="submit">Send your message</button>
</FadeIn>
        

    </form>
   

     

   </div>

  
  
  </>
   );
};
