import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'

const SvgIcon = styled.svg`
  fill: currentColor;
  width: ${props => props.width};
  height: ${props => props.height};
`

const Icon = ({
  name,
  width = '16px',
  height = '16px',
}) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    $dataicon={name}
    role="img"
    width={width}
    height={height}
    className={`icon-svg icon-svg-${name}`}
  >
    <use xlinkHref={withPrefix(`icons.svg#${name}`)} />
  </SvgIcon>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Icon