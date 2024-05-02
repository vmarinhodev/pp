import PropTypes from 'prop-types'
import React from 'react'
import { Container, Title } from '@components'
import {
  BannerWrapper,
  BannerHeading,
  BannerContent,
} from '@styles/components/banner'

const renderSubTitle = subTitle => {
  if (subTitle) {
  return <Title>{subTitle}</Title>
  }
}

const Banner = ({
  title,
  subTitle,
  children,
  size = 'auto',
  variant = 'default',
  spacing = 180,
}) => {
  return (
    <BannerWrapper
      size={size}
      variant={variant}
      spacing={spacing}
    >
      <Container>
        {renderSubTitle(subTitle)}
        <BannerHeading dangerouslySetInnerHTML={{ __html: title, }} />
        <BannerContent>{children}</BannerContent>
      </Container>
    </BannerWrapper>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  spacing: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'inverse', 'color', 'mono']),
}

export default Banner