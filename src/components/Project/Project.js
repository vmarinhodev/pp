import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Button } from '@components'
import {
  ProjectCard,
  ProjectCardImage,
  ProjectCardImageWrapper,
  ProjectCardDetails,
  ProjectCardTitle,
} from './ProjectCard'
import {
  ProjectWide,
  ProjectWideDetails,
  ProjectWideTitle,
  ProjectWideExcerpt,
  ProjectWideImage,
  ProjectWideImageWrapper,
  ProjectButtonGroup,
} from './ProjectWide'


const Project = ({ details, index, type, excerpt }) => {
  
  const { title, path, website, featureImage} = details
  const { src } = featureImage.childImageSharp.fluid
  const isEven = index % 2 === 0

  if (type === 'card') {
    return (
      <ProjectCard>
        <ProjectCardImageWrapper>
          <Link to={`${path}`} aria-label={`${title} Project Page`}>
            <ProjectCardImage src={src} />
          </Link>
        </ProjectCardImageWrapper>
        <ProjectCardDetails>
          <ProjectCardTitle>{title}</ProjectCardTitle>
          <ProjectWideExcerpt>{excerpt}</ProjectWideExcerpt>
          <Button variant="color" to={`${path}`}>
            Read More
          </Button>
          {website && (
            <Button type="ghost" to={website.url} linksOut>
              View Site
            </Button>
          )}
        </ProjectCardDetails>
      </ProjectCard>
    )
  } else {
    const isOdd = isEven ? '' : 'is-odd'
    return (
      <ProjectWide startsOn="md" align="center" cols="12">
        <ProjectWideImageWrapper
          md={{ start: 5, end: -1 }}
          className={isOdd}
          isOdd={!isEven}
        >
          <Link to={`${path}`} aria-label={`${title} Project Page`}>
            <ProjectWideImage md={{ start: 1, end: -1 }} src={src} />
          </Link>
        </ProjectWideImageWrapper>
        <ProjectWideDetails md={{start: 1, end: 5 }} className={isOdd}>
          <ProjectWideTitle>{title}</ProjectWideTitle>
          <ProjectButtonGroup className={isOdd}>
            <Button variant="color" to={`${path}`} partiallyActive={true}>
              View Project
            </Button>
          </ProjectButtonGroup>
        </ProjectWideDetails>
      </ProjectWide>
    )
  }
}

Project.propTypes = {
  type: PropTypes.oneOf(['wide', 'card']),
}

Project.defaultProps = {
  type: 'wide',
}

export default Project