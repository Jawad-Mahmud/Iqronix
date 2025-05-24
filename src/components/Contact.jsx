import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ShimmerText } from './ShimmerText'
import "../styles/Contact.css"
export const Contact=()=>{
  const [formdata, setformdata] = useState({
fullName:'',
email:'',
nationality:'',
  })
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setformdata((prev)=>({
     ...prev,
     [name]:value,

    })
  );
  }
    const handleSubmit=()=>{
     e.preventDefault();
     console.log('form submitted');
     alert('info submitted successfully',formdata);


    }




   return(
    <>
   <div className='container-1'>
     <h1>Contanct</h1>

   <div className='contact-container'>
    <form  onSubmit={handleSubmit}>
      <div className='input-item'>
        <label>Name</label>
        <br />
        <input type="text"
        value={formdata.fullName}
        onChange={handleChange}
        required
        />
      </div>

      <div  className='input-item'>
        <label>Email</label>
        <br />
           <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
   


      </div>
        <div  className='input-item'>
          <label>Nationality:</label>
          <br />
          <input
            type="text"
            name="nationality"
            value={formdata.nationality}
            onChange={handleChange}
            required
          />
        </div>
         <button type="submit">Submit</button>

    </form>
   

     

   </div>

   </div>
  
  </>
   );
};
