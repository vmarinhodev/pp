import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import paragraphs from 'lines-to-paragraphs'
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
  const { about } = data
  const { title, tagline, intro, hobbies } = about
  console.log('hobbies', hobbies)
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
          LinkedIn Resumees
        </Button>
      </Banner>
      <Section>
        {intro.map((item, index) => {
          const { heading, title, content } = intro[index]
          return (
            <AboutContainer key={`intro-${index}`}>
              <AboutGrid justify="center">
                <GridFlexItem md="8">
                  <Title>{heading}</Title>
                     <h3>{title}</h3>
                     <p dangerouslySetInnerHTML={{ __html: paragraphs(content) }} />
                </GridFlexItem>
              </AboutGrid>
            </AboutContainer>
          )
        })}
      </Section>
      <Section variant="inverse">
        {hobbies.map((hobby, index) => {
          const { heading, title, content, image } = hobby
          return (
            <div key={`hobby-${index}`}>
              <Container>
                <AboutImageWrapper>
                <Img fluid={image.childImageSharp.fluid} />
                </AboutImageWrapper>
              </Container>
              <AboutContainer>
                <AboutGrid justify="center">
                  <GridFlexItem md="8">
                    <Title>{heading}</Title>
                     <h3>{title}</h3>
                     <p dangerouslySetInnerHTML={{ __html: paragraphs(content) }} />
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
      intro {
        heading
        title
        content
      }
      hobbies {
        heading
        title
        content
        image {
          childImageSharp {
            fluid(maxWidth: 1120, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About