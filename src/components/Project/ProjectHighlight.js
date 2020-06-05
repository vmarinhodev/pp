import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import paragraphs from 'lines-to-paragraphs'

import { Container, GridFlex, GridFlexItem, Title } from '@components'
import Section from '@components/Section'

import linkCss from '@styles/links'

const HighlightSection = styled(Section)`
  position: relative;
  a {
    ${linkCss}
    line-height: 1;
  }
`

const ImageWrapper = styled.div`
  background-color: ${props => props.theme.colors.main};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  position: relative;
  ${props => props.theme.minMedia.md`
      box-shadow: 0 22px 44px rgba(0, 0, 0, 0.12);
  `}
`

const ImageContainer = styled(Container)`
  padding-bottom: ${props => props.theme.spacing.section.sm};
  ${props => props.theme.minMedia.sm`
    padding-bottom: ${props.theme.spacing.section.lg};
  `}
`

const Skill = styled.div`
  border-radius: 0.85rem;
  background: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.darkText};
  display: inline-flex;
  font-size: ${props => props.theme.mixins.remCalc(14)};
  font-weight: 600;
  line-height: 1.8;
  padding-left: ${props => props.theme.mixins.remCalc(14)};
  padding-right: ${props => props.theme.mixins.remCalc(14)};
  padding-bottom: 1px;
  text-transform: lowercase;
  &:not(:last-of-type) {
    margin-right: ${props => props.theme.mixins.remCalc(10)};
  }
`

const SkillContainer = styled(Container)`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.section.lg};
  h5 {
    margin-bottom: 1.125rem;
  }
  ${props => props.theme.maxMedia.sm`
    display: none;
  `}
`

const renderTools = ( tools, index ) => <Skill key={index}>{tools}</Skill>

const ProjectHighlight = ({ details, variant }) => {
  const { primary, tools } = details
  const { title, subtitle, content, image } = primary

  return (
    <HighlightSection variant="mono">
      <ImageContainer size="large">
        <ImageWrapper>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageWrapper>
      </ImageContainer>
      <SkillContainer>
        <h5>made with</h5>
        <GridFlex justify="center">{tools.map(renderTools)}</GridFlex>
      </SkillContainer>
      <Container>
        <GridFlex align="center" justify="center">
          <GridFlexItem md="7">
            <Title>{title}</Title>
            <h3>{subtitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: paragraphs(content) }} />
          </GridFlexItem>
        </GridFlex>
      </Container>
    </HighlightSection>
  )
}

ProjectHighlight.propTypes = {
  details: PropTypes.object.isRequired,
}

export default ProjectHighlight