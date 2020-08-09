import React from 'react'
import { graphql } from 'gatsby'

import Timeline from '../components/OptionalTimeline/Timeline'
import Content from '../components/Content/Content'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout'

export const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Hero
        title={post.frontmatter.title}
        imageSrc={post.frontmatter.image.childImageSharp.fluid.src}
        overlay
      />
      <Content>
        <h2 className="text-3xl px-8 italic text-center text-white mb-8">
          {post.frontmatter.subtitle}
        </h2>
        <Timeline
          events={post.frontmatter.eventos}
        />
      </Content>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        subtitle
        eventos {
          title
          local
          description
          date
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
        }
      }
    }
  }
`
