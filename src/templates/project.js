import React from 'react'
import { graphql } from 'gatsby'

import {
  Button,
  Layout,
  ProjectIntro,
  ProjectHighlight,
  ProjectConclusion,
  ProjectPagination,
} from '@components'
import Banner from '@components/Banner'
import PageHead from '../components/PageHead'

export const Head = ({data: { project }}) => {
  const {
    title,
    body,
    path,
  } = project.frontmatter

  const introDetails = body.ProjectBodyIntro;

  return (
    <PageHead
        title= {title}
        description= {introDetails.content}
        location= {path}
    />
  )
}

const Projects = ({ data: { project }, pageContext }) => {

  const {
    title,
    tagline,
    completed,
    personalproject,
    client,
    role,
    website,
    source,
    body,
  } = project.frontmatter

  const {next, prev} = pageContext

  const introMeta = {
    completed,
    client,
    personalproject,
    role,
  }
  
  const conclusionMeta = {
    website,
    source,
  }

  const introDetails = body.ProjectBodyIntro
  const highlightDetails = body.ProjectBodyHighlight
  const conclusionDetails = body.ProjectBodyConclusion
 
  return (
    <Layout>
          <body className="vm-project-page" />
        <Banner title={title} spacing={150} variant="color">
          <h4>{tagline}</h4>
          {website && (
            <Button to={website.url} hasicon={true} linksOut>
            See Website
            </Button>
          )}
        </Banner>
        <ProjectIntro details={introDetails} meta={introMeta} />
        <ProjectHighlight details={highlightDetails} />
        <ProjectConclusion details={conclusionDetails} meta={conclusionMeta} />
        <ProjectPagination 
          prevSlug={prev.frontmatter.path}
          prevTitle={prev.frontmatter.title}
          nextSlug={next.frontmatter.path}
          nextTitle={next.frontmatter.title}
        /> 
    </Layout>
  )
}
export default Projects

export const projectQuery = graphql`
  query($pathContext: String!) {
    project: markdownRemark(frontmatter: { path: { eq: $pathContext } }) {
      html
      frontmatter {
        path
        title
        tagline
        completed(formatString: "YYYY")
        order
        client
        role
        personalproject
        website {
          url
        }
        source {
          url
        }
        tags
        featureImage {
          childImageSharp {
            gatsbyImageData(
              width: 1300
              quality: 80
            )
          }
        }
        body {
          ProjectBodyIntro {
            primary {
              title
              subtitle
              content
              image{
                childImageSharp {
                  gatsbyImageData(
                    width: 1300
                    quality: 80
                  )
                }
              }
            }
          }
          ProjectBodyHighlight {
            primary {
              title
              subtitle
              content
              image{
                childImageSharp {
                  gatsbyImageData(
                    width: 1300
                    quality: 80
                  )
                }
              }
            }
            tools
          }
          ProjectBodyConclusion {
            primary {
              title
              subtitle
              content
              image{
                childImageSharp {
                  gatsbyImageData(
                    width: 1300
                    quality: 80
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
