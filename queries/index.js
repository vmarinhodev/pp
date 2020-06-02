module.exports = `
  {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___completed], order: DESC }
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
                fluid {
                  aspectRatio
                  originalImg
                  originalName
                  presentationHeight
                  presentationWidth
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                  tracedSVG
                }
              }
            }
            body {
              ProjectBodyIntro {
                primary {
                  title
                  content
                  image{
                    childImageSharp {
                      fluid {
                          aspectRatio
                          originalImg
                          originalName
                          presentationHeight
                          presentationWidth
                          sizes
                          src
                          srcSet
                          srcSetWebp
                          srcWebp
                          tracedSVG
                      }
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
                      fluid {
                          aspectRatio
                          originalImg
                          originalName
                          presentationHeight
                          presentationWidth
                          sizes
                          src
                          srcSet
                          srcSetWebp
                          srcWebp
                          tracedSVG
                      }
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
                      fluid {
                          aspectRatio
                          originalImg
                          originalName
                          presentationHeight
                          presentationWidth
                          sizes
                          src
                          srcSet
                          srcSetWebp
                          srcWebp
                          tracedSVG
                      }
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
