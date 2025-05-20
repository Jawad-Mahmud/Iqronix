import React from 'react'
import { motion,useInView } from 'motion/react';
import { useRef } from 'react';


const fadeUp={
   hidden: { opacity: 0, y: 200 },
   show:{
    opacity:1,
    y:0,
    transition:{
      duration:0.6,
      ease:"easeOut"
    }
   }
};



export const FadeIn = ({children,className,as="div"}) => {
 const ref=useRef(null);
 const viewing=useInView(ref,{once:true});
const MotionTag=motion[as];

  return (
   <MotionTag
   ref={ref}
   className={className}
   variants={fadeUp}
   initial="hidden"
   animate={viewing?"show":"hidden"}
   >
  {children}

   </MotionTag>
  )
}
