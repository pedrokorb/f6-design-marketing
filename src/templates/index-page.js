import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import background from './../img/mainbackground.jpg'

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import MainBanner from '../components/Banner/MainBanner'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import bgImage from '../img/backgroundSection.jpg'
import shirts from '../img/shirts.png'
import ImageToRight from '../components/CallToAction/ImageToRight'
import PartnersSection from '../components/ParternersSection/PartnersSection'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'

import Computer from "../img/computer 1.svg"
import Pen from "../img/pen 1.svg"
import Trust from "../img/certificate 1.svg"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    {/* <MainBanner 
      imageSrc={background}
      overlay
    />

    <ServicesSection 
      title="Serviços"
      description="Nós oferecemos todos esses serviços para você"
    />

    <ImageToRight 
      title="Coleção by Pati Ribeiro Design"
      description="Uma coleção que vai deixar você doido para clicar no botão abaixo!"
      image={shirts}
      overlay
      backgroundImage={bgImage}
    />

    <PortfolioSection 
      title="Portfólio"
      description="Conheça alguns dos trabalhos já realizados"
    />

    <PartnersSection 
      title="Parceiros"
      description="Essas empresas confiaram no nosso trabalho e hoje colhem os resultados"
    /> */}

    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
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
    <Layout>
      {/* <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      /> */}
      <MainBanner
        imageSrc={background}
        overlay
        title="Sua empresa já tem uma identidade?"
        subtitle="A F6 tem a solução!"
        buttonText="Saiba Mais"
        buttonLink="https://google.com"
      />

      <ServicesSection
        title="Serviços"
        description="Nós oferecemos todos esses serviços para você"
        services={services}
      />

      <ImageToRight
        title="Coleção by Pati Ribeiro Design"
        description="Uma coleção que vai deixar você doido para clicar no botão abaixo!"
        image={shirts}
        overlay
        backgroundImage={bgImage}
      />

      <PortfolioSection
        title="Portfólio"
        description="Conheça alguns dos trabalhos já realizados"
      />

      <PartnersSection
        title="Parceiros"
        description="Essas empresas confiaram no nosso trabalho e hoje colhem os resultados"
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
