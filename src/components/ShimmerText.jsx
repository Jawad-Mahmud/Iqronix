import React, { useRef } from 'react'
import { motion, positionalKeys } from 'motion/react'
export const ShimmerText = ({ className,children,as="div" }) =>{
  const ref=useRef(null);
  const MotionTag=motion[as];
  return(
    <MotionTag
      ref={ref}
      className={className}
     style={{ position: "relative", display: "inline-block" }}
 >
       <span style={{ visibility: "hidden" }}>{children}</span>
   <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "4px",
          background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </MotionTag>
  ) 
};