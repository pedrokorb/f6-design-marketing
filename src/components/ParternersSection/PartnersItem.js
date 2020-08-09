import React from "react"
import './Partners.css'

const PartnersItem = ({ link, name, imageSrc }) => {

  return (
    <a
      className="flex-1 mx-10"
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      <img className="mt-16 md:mt-0 grayscale mx-auto w-40" src={imageSrc} alt={name} />
    </a>
  )
}

export default PartnersItem
