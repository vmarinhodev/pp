import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import paragraphs from 'lines-to-paragraphs'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Banner,
  Button,
  Container,
  Layout,
  GridFlex,
  GridFlexItem,
  Section,
  PageHead,
  Title,
} from '@components'
import linkCss from '@styles/links'
import { socialLinks } from 'config/vars'

export const Head = (data) => {
  return (
    <PageHead 
      title="About"
      description={data.tagline}
    />
  )
}

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

  return (
    <Layout>
      <Banner title={title} variant="mono">
        <h4>{tagline}</h4>
        <Button
          to={socialLinks.linkedin.link}
          variant="color"
          hasicon={true}
          linksOut
        >
          LinkedIn Resume
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
          const image = getImage(hobby.image)
          const { heading, title, content } = hobby
          return (
            <div key={`hobby-${index}`}>
              <Container>
                <AboutImageWrapper>
                {/* <Img fluid={image.childImageSharp} /> */}
                <GatsbyImage image={image} alt={"alt text"} />
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
            gatsbyImageData(
              width: 1300
              quality: 80
            )
          }
        }
      }
    }
  }
`

export default About