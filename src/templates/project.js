import React from 'react'
import {HelmetProvider, Helmet} from 'react-helmet-async'
import { graphql } from 'gatsby'

import {
  Button,
  Layout,
  ProjectIntro,
  ProjectHighlight,
  ProjectConclusion,
  ProjectPagination,
  SEO,
} from '@components'
import Banner from '@components/Banner'

const Projects = ({ data: { project }, pageContext }) => {

  const {
    path,
    title,
    tagline,
    completed,
    personalproject,
    client,
    role,
    website,
    source,
    featureImage,
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
        <SEO
          type="Project"
          title={title}
          articleBody={introDetails.content}
          datePublished={completed}
          featureImage={featureImage.childImageSharp.fluid}
          location={path}
          description={introDetails.content}
        />
        <HelmetProvider>
        <Helmet>
          <body className="vm-project-page" />
        </Helmet>
        </HelmetProvider>
        <Banner title={title} spacing={150} variant="color">
          <h4>{tagline}</h4>
          {website && (
            <Button to={website.url} hasIcon={true} linksOut>
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
  query($path: String!) {
    project: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        tagline
        completed(formatString: "YYYY")
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
            fluid(maxWidth: 1300, quality: 80) {
              ...GatsbyImageSharpFluid
            }
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
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
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
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
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
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
