import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import Computer from "../../img/computer 1.svg"
import Pen from "../../img/pen 1.svg"
import Trust from "../../img/certificate 1.svg"
import ServiceItem from "./ServiceItem"

const ServicesSection = ({ title, description }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }    
  }, [controls, inView])

  const services = [
    {
      icon: Computer,
      title: "Marketing Digital",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
      icon: Pen,
      title: "Identidade Visual",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
      icon: Trust,
      title: "Segurança",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
  ]

  return (
    <div id="services" className="mx-auto bg-black">
      <motion.div 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 0.75, delay: 0.35 }} 
        className="flex flex-col py-16 mx-auto max-w-screen-lg"
      >
        <p className="text-primary text-4xl text-center px-16">{title}</p>
        <p className="text-white text-2xl italic text-center px-16">{description}</p>

        <div className="flex flex-col md:flex-row mt-10">
          {services.map((service) => (
            <ServiceItem 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ServicesSection
