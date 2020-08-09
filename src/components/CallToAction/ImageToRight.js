import React, { useEffect } from 'react';
import InternalButton from "../Button/InternalButton"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

export default function ImageToRight({ title, description, image, overlay, backgroundImage }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div 
      className="py-8"
      style={
        backgroundImage ?
        {
          background: overlay ? `linear-gradient(180deg,rgba(0,0,0,.6) 0,rgba(0,0,0,.6)) ,url(${backgroundImage})` : `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'botton center',
          backgroundPositionX: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        } : 
        {
          backgroundColor: '#000'
        }
      }
    >

      <div className="flex flex-col items-center max-w-screen-lg mx-auto py-10 md:flex-row">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
          className="flex-1 mb-10 text-center"
        >
          <p className="text-primary text-4xl text-center mb-8 px-16">{title}</p>
          <p className="text-white text-2xl text-center mb-16 px-16">{description}</p>
          
          <InternalButton 
            text="Conferir Agora"
            path="fotos"
            primary
            rounded
          />
        </motion.div>

        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
          className="flex-1 my-auto mx-auto w-64"
          src={image}
          alt={title}
        />
      </div>

    </div>
  );
}