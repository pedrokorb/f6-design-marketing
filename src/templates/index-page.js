import React from 'react'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import MainBanner from '../components/Banner/MainBanner'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import ImageToRight from '../components/CallToAction/ImageToRight'
import PartnersSection from '../components/ParternersSection/PartnersSection'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'

import Computer from "../img/computer 1.svg"
import Pen from "../img/pen 1.svg"
import Trust from "../img/certificate 1.svg"

const IndexPage = ({ data }) => {
  const { 
    topBanner,
    servicesSection,
    collectionPatiSection,
    seo, 
    opengraph 
  } = data.markdownRemark.frontmatter

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
    <Layout
      seo={seo}
      opengraph={opengraph}
    >
      
      <MainBanner
        imageSrc={topBanner.bgImage.childImageSharp.fluid.src}
        overlay={topBanner.overlay}
        title={topBanner.title}
        subtitle={topBanner.subtitle}
        buttonText={topBanner.button.buttonText}
        buttonLink={topBanner.button.buttonLink}
      />

      <ServicesSection
        title={servicesSection.title}
        description={servicesSection.description}
        services={services} //tratar svg imagens
      />

      <ImageToRight
        title={collectionPatiSection.title}
        description={collectionPatiSection.description}
        image={collectionPatiSection.mainImage.image.childImageSharp.fluid.src}
        overlay={collectionPatiSection.overlay}
        backgroundImage={collectionPatiSection.bgImage.childImageSharp.fluid.src}
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

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        topBanner {
          title
          subtitle
          bgImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          overlay
          button {
            buttonText
            buttonLink
          }
        }
        servicesSection {
          title
          description
          services{
            title
            description
            icon{
              imageAlt
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        collectionPatiSection{
          title
          description
          mainImage{
            image{
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageAlt
          }
          overlay
          bgImage{
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        seo {
          title
          description
        }
        opengraph{
          title
          description
          image{
            imageAlt
            imageUrl{
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
