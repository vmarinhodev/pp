module.exports = `
  {
    projects: allMarkdownRemark(
      sort: {frontmatter: {order: DESC}},
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            path
            title
            tagline
            completed(formatString: "YYYY")
            order
            client
            role
            website {
              url
            }
            source {
              url
            }
            tags
            featureImage {
              childImageSharp {
                gatsbyImageData(
                  quality: 80
                )
              }
            }
            body {
              ProjectBodyIntro {
                primary {
                  title
                  content
                  image {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 80
                      )
                    }
                  }
                }
              }
              ProjectBodyHighlight {
                primary {
                  title
                  content
                  image{
                    childImageSharp {
                      gatsbyImageData(
                        quality: 80
                      )
                    }
                  }
                }
                tools
              }
              ProjectBodyConclusion {
                primary {
                  title
                  content
                  image{
                    childImageSharp {
                      gatsbyImageData(
                        quality: 80
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    tags: allTagsYaml {
      edges {
        node {
          title
        }
      }
    }
  }
`