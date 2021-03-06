import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import PartnersItem from "./PartnersItem"

const PartnersSection = ({ title, description, partners }) => {
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
    <div className="mx-auto bg-black">
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

        <div className="flex flex-col md:flex-row items-center mt-10">
          {partners.map((partner) => (
            <PartnersItem 
              key={partner.name}
              link={partner.link}
              imageSrc={partner.image.childImageSharp.fluid.src}
              name={partner.name}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default PartnersSection
