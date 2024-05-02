import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import linkCss from '@styles/links'

const StyledLink = styled(Link)`
  ${linkCss}
`

const CustomLink = styled.a`
  ${linkCss}
`

export const ALink = ({
  internal = true,
  href,
  children,
  linksOut = false
}) => {
  if (internal) {
    return <StyledLink to={href}>{children}</StyledLink>
  } else {
    return (
      <CustomLink
        href={href}
        target={linksOut ? '_blank' : ''}
        rel={linksOut ? 'noopener nofoloow' : ''}
      >
        {children}
      </CustomLink>
    )
  }
}

ALink.propTypes = {
  href: PropTypes.string.isRequired,
  internal: PropTypes.bool,
  linksOut: PropTypes.bool,
}

export default ALink
