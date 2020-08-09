import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import NavBar from './Navbar/NavBar'
import './all.sass'
import './layout.css'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children, seo, opengraph, contactSection }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="pt" />
        <title>{seo? seo.title : title}</title>
        <meta name="description" content={seo ? seo.description : description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={opengraph ? opengraph.title : title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={opengraph ? `${withPrefix('')}${opengraph.image.imageUrl.childImageSharp.fluid.src}` : `${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <NavBar />
      <div>{children}</div>
      <Footer 
        title={contactSection.title}
        description={contactSection.description}
        contacts={contactSection.contacts}
      />
    </div>
  )
}

export default TemplateWrapper
