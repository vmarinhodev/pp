import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, Grid, Project } from '@components'

const ProjectCollection = () => {
  const query = useStaticQuery(
    graphql`
      query ProjectsQuery {
        allMarkdownRemark(
          sort: { frontmatter: {order: DESC } }
        ) {
          edges {
            node {
              frontmatter {
                path
                title
                tagline
                completed(formatString: "YYYY")
                order
                client
                role
                website {
                  url
                }
                tags
                featureImage {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 80
                    )
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const { edges } = query.allMarkdownRemark
  return (
    <Container>
    <Grid>
      {edges.map((project, index) => {
        const {
          title,
          path,
          featureImage,
          website,
          tagline,
        } = project.node.frontmatter
        
        const details = {
          title,
          featureImage,
          website,
          path,
        }
        return (
          <Project
            key={`project-${path}`}
            id={`project-${path}`}
            index={index}
            details={details}
            excerpt={tagline}
            type="card"
          />
        )
      })}
    </Grid>
    </Container>
  )
}

export default ProjectCollection