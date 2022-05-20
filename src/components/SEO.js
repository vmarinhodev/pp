import React from 'react'
import PropTypes from 'prop-types'
import {HelmetProvider, Helmet }from 'react-helmet-async'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ pathname, description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={`${detailsQuery}`}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const pageTitle = title
          ? `${title} | ${data.site.siteMetadata.altName}`
          : data.site.siteMetadata.altName
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
                content: data.site.siteMetadata.author,
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
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
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
