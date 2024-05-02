import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const PageHead = ({ description, lang, meta, keywords, title }) => {
  const query = useStaticQuery(
    graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            title
            altName
            description
            author
          }
        }
      }
    `
  )
  const { siteMetadata } = query.site
  const metaDescription =
          description || siteMetadata.description
const pageTitle = title
    ? `${title} | ${siteMetadata.altName}`
    : siteMetadata.altName

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {/* <meta property="" content={} /> */}
      {/* <meta property="" content={} /> */}

    </>
  )
}

export default PageHead

PageHead.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

PageHead.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}