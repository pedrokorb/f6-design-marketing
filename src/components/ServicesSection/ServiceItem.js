import React from "react"

const ServiceItem = ({ title, description, icon }) => {

  return (
    <div className="flex-1 px-4">
      <div className="mx-auto flex justify-center items-center bg-primary h-32 w-32 mb-4 rounded-full">
        <img src={icon.image.publicURL} alt="service" className="h-24 w-24 text-black" />
      </div>
      <p className="text-xl font-bold text-white text-center mb-4 uppercase">{title}</p>
      <p className="text-white text-center mb-10 font-light">{description}</p>
    </div>
  )
}

export default ServiceItem
