import React from 'react'
import "../styles/Email.css"
export const Email = () => {
  return (
    <>
    <div className='email-container'>
        <h1>Ready to transform your <br /> buisness</h1>
        <input type="email" className='input-email' placeholder='Your Email Address'/>
        <div className='subscribe-button'>Subscribe</div>
    </div>
    
    </>
  )
}
