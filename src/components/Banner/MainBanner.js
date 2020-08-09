import React from "react"
import ExternalButton from "../Button/ExternalButton"
import { FaAngleDown } from 'react-icons/fa'
import './MainBanner.css'

const MainBanner = ({ overlay, imageSrc, title, subtitle, buttonText, buttonLink }) => {

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col justify-center items-center"
      style={{
        background: overlay ? `linear-gradient(180deg,rgba(0,0,0,.6) 0,rgba(0,0,0,.6)) ,url(${imageSrc})` : `url(${ imageSrc })`,
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'botton center',
        backgroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >

      <div className="flex flex-col px-10 mt-16 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-primary">Sua empresa já tem uma identidade?</h1>
        <p className="text-white text-2xl md:text-4xl my-8">A F6 tem a solução!</p>
      </div>

      <ExternalButton 
        text="Saiba Mais"
        link="https://www.google.com"
        primary
        border
        rounded
      />

      <a className="mt-10" href="#services">
        <FaAngleDown
          className="bounce h-16 w-16 text-primary"
        />
      </a>

    </div>
  )
}

export default MainBanner
