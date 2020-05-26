import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Banner,
  Button,
  Container,
  Layout,
  GridFlex,
  GridFlexItem,
  Section,
  SEO,
  Title,
} from '@components'
import linkCss from '@styles/links'
import { socialLinks } from 'config/vars'

const AboutContainer = styled(Container)`
  a {
    ${linkCss}
    line-height: 1;
  }
`

const AboutGrid = styled(GridFlex)`
  padding-bottom: ${props => props.theme.spacing.section.md};
`
const AboutImageWrapper = styled.div`
  padding-bottom: ${props => props.theme.spacing.section.md};
`

const About = ({ data }) => {
  const { about, AboutImage } = data
  const { title, tagline, hobbies, intro } = about
  console.log(about)
  return (
    <Layout>
      <SEO title="About" description={tagline} />
      <Banner title={title} variant="mono">
        <h4>{tagline}</h4>
        <Button
          to={socialLinks.linkedin.link}
          variant="color"
          hasIcon={true}
          linksOut
        >
          LinkedIn Resume
        </Button>
      </Banner>
      <Section>
        {intro.map((item, index) => {
          const { heading, content } = intro[index]
          return (
            <AboutContainer key={`bio-${index}`}>
              <AboutGrid justify="center">
                <GridFlexItem md="8">
                  <Title>{heading}</Title>
                  <p>{content}</p>
                </GridFlexItem>
              </AboutGrid>
            </AboutContainer>
          )
        })}
      </Section>
      <Section variant="inverse">
        {hobbies.map((item, index) => {
          const { heading, content } = hobbies[index]
          return (
            <div key={`bio-${index}`}>
              <Container>
                <AboutImageWrapper>
                  <Img fluid={AboutImage.childImageSharp.fluid} alt="me myself and I" />
                </AboutImageWrapper>
              </Container>
              <AboutContainer>
                <AboutGrid justify="center">
                  <GridFlexItem md="8">
                    <Title>{heading}</Title>
                    <p>{content}</p>
                  </GridFlexItem>
                </AboutGrid>
              </AboutContainer>
            </div>
          )
        })}
      </Section>
    </Layout>
  )
}

export const aboutQuery = graphql`
  query AboutQuery {
    about: aboutYaml {
      title
      tagline
      hobbies {
        heading
        content
      }
      intro {
        heading
        content
      }
    }
      AboutImage: file (
        relativePath: { eq: "vitormar.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hobbyImage: file (
        relativePath: { eq: "vmhobby.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

export default About