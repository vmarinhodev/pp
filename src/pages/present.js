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

const PresentContainer = styled(Container)`
  a {
    ${linkCss}
    line-height: 1;
  }
`

const PresentGrid = styled(GridFlex)`
  padding-bottom: ${props => props.theme.spacing.section.md};
`
const AboutImageWrapper = styled.div`
  padding-bottom: ${props => props.theme.spacing.section.md};
`
const uwsLink = 'https://www.uw-s.nl'

const Present = ({ data }) => {
  const { present } = data
  const { title, tagline, intro, hobbies } = present
  console.log('hobbies', hobbies)
  return (
    <Layout>
      <SEO title="Present" description={tagline} />
      <Banner title={title} variant="mono">
        <h4>{tagline}</h4>
        <Button
          to={uwsLink}
          variant="color"
          hasIcon={false}
          linksOut
        >
          Company website
        </Button>
      </Banner>
      <Section>
        {intro.map((item, index) => {
          const { heading, title, content } = intro[index]
          return (
            <PresentContainer key={`intro-${index}`}>
              <PresentGrid justify="center">
                <GridFlexItem md="8">
                  <Title>{heading}</Title>
                     <h3>{title}</h3>
                     <p dangerouslySetInnerHTML={{ __html: paragraphs(content) }} />
                </GridFlexItem>
              </PresentGrid>
            </PresentContainer>
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
              <PresentContainer>
                <PresentGrid justify="center">
                  <GridFlexItem md="8">
                    <Title>{heading}</Title>
                     <h3>{title}</h3>
                     <p dangerouslySetInnerHTML={{ __html: paragraphs(content) }} />
                  </GridFlexItem>
                </PresentGrid>
              </PresentContainer>
            </div>
          )
        })}
      </Section>
    </Layout>
  )
}

export const presentQuery = graphql`
  query PresentQuery {
    present: presentYaml {
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

export default Present