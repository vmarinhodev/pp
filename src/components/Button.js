import PropTypes from 'prop-types'
import React from 'react'
import Icon from '@components/Icon'

import { ButtonA, ButtonLink } from '@styles/components/button'

const renderIcon = (hasicon, icon ) => {
  if (hasicon) {
    return <Icon name={icon} />
  }
}

const Button = ({
  to,
  children,
  variant = 'default',
  type = 'solid',
  icon = 'arrow-right',
  hasicon = 'false',
  linksOut = false,
  isEmail = false,
}) => {
  if ( linksOut || isEmail) {
    return (
      <ButtonA
        to={to}
        href={to}
        type={type}
        variant={variant}
        target={linksOut ? '_blank' : ''}
        hasicon={hasicon.toString()}
      >
        {children}
        {renderIcon(hasicon, icon)}
      </ButtonA>
    )
  } else {
    return (
      <ButtonLink
        to={to}
        variant={variant}
        type={type}
        hasicon={hasicon.toString()}
      >
        {children}
        {renderIcon(hasicon, icon)}
      </ButtonLink>
    )
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'inverse', 'color', 'colorInverse']),
  type: PropTypes.oneOf(['solid', 'ghost']),
  hasicon: PropTypes.bool,
  icon: PropTypes.string,
  linksOut: PropTypes.bool,
  isEmail: PropTypes.bool,
}

export default Button