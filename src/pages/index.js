import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import {
  Banner,
  Button,
  Container,
  Layout,
  Project,
  Section,
} from '@components'

const ProjectsHeader = styled.div`
  margin-bottom: ${props => props.theme.mixins.remCalc(60)};
  text-align: center;
  ${props => props.theme.minMedia.md`
    margin-bottom: ${props.theme.spacing.section.xl};
  `}
`

const Index = ({ data: { projectos }}) => {
  const projects = projectos.edges
  console.log(projects)
  return (
    <Layout>
      <Banner
        variant="mono"
        title="I am a front end web developer & <span>more</span>"
        subTitle="hello, world"
      >
        <h4>
          Frontend oriented fullstack web developer.
          Always in pursuit for efficiency through simplicity.
        </h4>
        <Button variant="color" to="/projects" hasIcon={true}>
          See Work
        </Button>
      </Banner>
      <Section>
        <Container>
          <ProjectsHeader>
            <h4 style={{ fontWeight: '900' }}>Featured Projects</h4>
          </ProjectsHeader>
          {projects.map((project, index) => {
            const { 
              title,
              path,
              featureImage,
            } = project.node.frontmatter
            
            const details = {
              title,
              featureImage,
              path,
            }
            return (
              <Project
                key={`project-${path}`}
                id={`project-${path}`}
                index={index}
                details={details}
              />
            )
          })}
          <div style={{ textAlign: 'center' }}>
            <Button to="/projects" type="ghost" hasIcon={true}>
              All Projects
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export const projectQuery = graphql`
  query IndexQuery {
    projectos: allMarkdownRemark(limit: 3, sort: { order: DESC, fields: [frontmatter___completed] }) {
      edges {
        node {
          frontmatter {
            path
            title
            tagline
            completed(formatString: "YYYY")
            client
            role
            website {
              url
            }
            tags
            featureImage {
              childImageSharp {
                fluid(maxWidth: 1260) {
                  ...GatsbyImageSharpFluid
                }
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

export default Index