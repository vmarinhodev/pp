import React from 'react'
import PropTypes from 'prop-types'
import { PageHead, Footer } from '@components'

const Layout = ({ children, hasFooter = true }) => {
  return (
    <>
      <PageHead />
      {children}
      {hasFooter && <Footer />}
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasFooter: PropTypes.bool,
}

export default Layout