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
  variant,
  type,
  icon,
  hasicon,
  linksOut,
  isEmail,
}) => {
  if ( linksOut || isEmail) {
    return (
      <ButtonA
        to={to}
        href={to}
        type={type}
        variant={variant}
        target={linksOut ? '_blank' : ''}
        hasicon={hasicon}
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
        hasicon={hasicon}
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

Button.defaultProps = {
  variant: 'default',
  type: 'solid',
  hasicon: false,
  icon: 'arrow-right',
  linksOut: false,
  isEmail: false,
}

export default Button