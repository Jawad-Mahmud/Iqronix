import { useInView,motion } from 'motion/react'
import React, { useRef } from 'react'


const getFadeVariants=({direction='right',distance=100, duration=0.6})=>{
    let x=0,y=0;
    switch(direction){
        case 'left':
            x=-distance;
            break;
            case 'right': 
            x=distance;
            break;
            case 'up':
            y = -distance;
            break;
            case 'down':
             y = distance;
            break;
            default:
            break;

    }
    return{
        hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    }
}
}
export const Fade= ({
  children,
  className,
  as = 'div',
  direction = 'right',
  distance = 100,
  duration = 0.6,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={getFadeVariants({ direction, distance, duration })}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </MotionTag>
  );
};

