import path from 'path'
import { dirname }from 'path'
import {fileURLToPath} from 'url';
import { createFilePath } from "gatsby-source-filesystem"
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const queries = require("./src/queries/mainquery.js")
const __dirname = dirname(fileURLToPath(import.meta.url));

export const createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const projectsTemplate = path.resolve("./src/templates/project.js")
    const { data, errors } = await graphql(queries)
    const projects = data.projects.edges
    const length = projects.length
    
    // Create project pages
    projects.forEach(({ node }, index) => {
      const prev = index === 0 ? projects[length - 1].node : projects[index - 1].node
      const next = index === length - 1 ? projects[0].node : projects[index + 1].node
      createPage({
        path: node?.frontmatter?.path,
        component: projectsTemplate,
        context: {
          pathContext: node.frontmatter.path,
          slug: node.fields.slug,
          prev,
          next,
        }
      })
    })

    if (errors) {
      throw new Error(errors)
    }
  } catch (err) {
    console.log(err)
  }
}

export function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

export function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}