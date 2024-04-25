import React from 'react'
import PropTypes from 'prop-types'
import {HelmetProvider, Helmet }from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'

const SeoDetails = ({ description, lang, meta, keywords, title }) => {
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
    <HelmetProvider>
      <Helmet
            htmlAttributes={{
              lang,
            }}
            title={pageTitle}
            titleTemplate={`%s`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: pageTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: pageTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
    </HelmetProvider>
  )
}

export default SeoDetails

SeoDetails.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SeoDetails.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}