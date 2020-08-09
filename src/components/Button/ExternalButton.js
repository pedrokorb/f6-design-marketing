import React from "react"

const ExternalButton = ({ text, link, primary, border, rounded }) => {

  return (
    <a 
      className={
        ` 
          px-8 py-4 
          ${border && primary ? 'border-2 border-primary' : ''} 
          ${border && !primary ? 'border-2 border-black' : ''} 
          ${primary ? 'bg-black text-primary' : 'text-black bg-primary'} 
          ${rounded ? 'rounded-full' : 'rounded-lg'} 
          ${primary ? 'hover:bg-primary hover:text-black' : 'hover:bg-black hover:text-primary'}
        `
      }
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  )
}

export default ExternalButton
