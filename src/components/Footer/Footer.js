import React from "react"
import { IoLogoFacebook, IoLogoInstagram, IoIosMail } from "react-icons/io"
import Logo from '../../img/logobranco.png'

const socialNetworks = [
  {
    name: 'Facebook',
    icon: 'facebook',
    link: 'https://www.facebook.com/pedro.korb',
    shortLink: 'pedro.korb'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.facebook.com/pedro.korb',
    shortLink: 'pedro.korb'
  },
  {
    name: 'E-mail',
    icon: 'email',
    link: 'pedro.korb@gmail.com',
    shortLink: 'pedro.korb@gmail.com'
  }
]

const getIcon = (icon) => {
  if(icon.includes('facebook')){
    return (<IoLogoFacebook className="w-16 h-16 mx-16 text-white" />)
  } else if(icon.includes('instagram')){
    return (<IoLogoInstagram className="w-16 h-16 mx-16 text-white" />)
  } else {
    return (<IoIosMail className="w-16 h-16 mx-16 text-white" />)
  }
}


const Footer = ({ title, description }) => {

  return (
    <div className="bg-black text-white text-center">
      <div className="max-w-screen-lg border-b border-white mx-auto py-16">
        <p className="text-primary text-4xl text-center px-16">{title}</p>
        <p className="text-white text-2xl italic text-center mb-10 px-16">{description}</p>
        <div className="flex flex-col md:flex-row justify-center">
          { socialNetworks.map((social) => (
            <a className="mx-auto mb-4 md:mb-0" href={social.link} key={social.name}>
              {getIcon(social.icon)}
              <p>{social.shortLink}</p>
            </a>
          ))
          }
        </div>
      </div>
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
