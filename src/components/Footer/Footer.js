import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import Logo from '../../img/logobranco.png'
import './Footer.css'

const Footer = ({ title, description, contacts }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  
  return (
    <div className="bg-black text-white text-center">
      <motion.div 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 0.75, delay: 0.35 }}
        className="max-w-screen-lg border-b border-white mx-auto py-16"
      >
        <p className="text-primary text-4xl text-center px-16">{title}</p>
        <p className="text-white text-2xl italic text-center mb-10 px-16">{description}</p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {contacts.map((contact) => (
            <a
              target="_blank"
              rel="noopener noreferrer" 
              className="mx-auto mb-10 md:mb-0" 
              href={contact.link} 
              key={contact.title}
            >
              <img className="mx-auto w-20 grayscale" src={contact.image.childImageSharp.fluid.src} alt={contact.title} />
            </a>
          ))}
        </div>
      </motion.div>
      <a 
        href="https://pedrokorb.com" 
        target="_blank" 
        rel="noreferrer" 
        className="py-2 text-white flex justify-center"
      >
        <p className="my-auto mx-2">© {new Date().getFullYear()}, desenvolvido por</p>
        <img src={Logo} alt="Logo" className="w-40"/>
        
      </a>
    </div>
  )
}

export default Footer
