import React from 'react'
import PropTypes from 'prop-types'
import { SeoDetails, Footer } from '@components'

const Layout = ({ children, hasFooter }) => {
  return (
    <>
      <SeoDetails />
      {children}
      {hasFooter && <Footer />}
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasFooter: PropTypes.bool,
}
Layout.defaultProps = {
  hasFooter: true,
}

export default Layout