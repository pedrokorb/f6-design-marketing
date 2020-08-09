import React from "react"
import './ImageBanner.css'

const ImageBanner = ({ imageSrc }) => {

  return (
    <div class="banner">
      <img 
        src={imageSrc} 
        alt="banner" 
        className="object-contain lg:object-cover lg:h-full w-full"
      />
    </div>
  )
}

export default ImageBanner
