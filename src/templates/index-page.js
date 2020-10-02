import React from 'react'
import { graphql } from 'gatsby'

import PortfolioSection from '../components/PortfolioSection/PortfolioSection'
import PartnersSection from '../components/ParternersSection/PartnersSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import ImageToRight from '../components/CallToAction/ImageToRight'
import MainBanner from '../components/Banner/MainBanner'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  const { 
    topBanner,
    servicesSection,
    collectionPatiSection,
    partnersSection,
    contactSection,
    seo, 
    opengraph
  } = data.markdownRemark.frontmatter

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
        services={servicesSection.services}
      />

      <ImageToRight
        title={collectionPatiSection.title}
        description={collectionPatiSection.description}
        image={collectionPatiSection.mainImage.image.childImageSharp.fluid.src}
        overlay={collectionPatiSection.overlay}
        backgroundImage={collectionPatiSection.bgImage.childImageSharp.fluid.src}
      />

      <PartnersSection
        title={partnersSection.title}
        description={partnersSection.description}
        partners={partnersSection.partners}
      />

      <Footer
        title={contactSection.title}
        description={contactSection.description}
        contacts={contactSection.contacts}
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
                publicURL
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
        partnersSection{
          title
          description
          partners{
            name
            link
            image{
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        contactSection{
          title
          description
          contacts{
            title
            link
            image{
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
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