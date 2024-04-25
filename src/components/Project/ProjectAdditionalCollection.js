import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, ProjectBasic } from '@components'

const ProjectAdditionalCollection = () => {
  const query = useStaticQuery(
    graphql`
      query ProjectsAdditionalQuery {
        basicProjects: allBasicProjectsYaml(
          sort: {completed: DESC}) {
          edges {
            node {
              title
              role
              personalproject
              completed
              client
              link {
                url
              }
              source {
                url
              }
            }
          }
        }
      }
    `
  )

  const { edges } = query.basicProjects
  return (
    <>
      <Container>
        {edges.map(({node: details }, index) => (
          <ProjectBasic key={`project-${index}`} details={details} />
        ))}
      </Container>
    </>
  )
}
export default ProjectAdditionalCollection