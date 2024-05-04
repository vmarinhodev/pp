import React from 'react'
import { Button, Banner, Layout, ProjectPageContent, PageHead } from '@components'

const projectsTagline = 
  'Every project serves as a learning experience.'

  export const Head = () => {
    return (
      <PageHead title="Projects"  />
    )
  }

  const Projects = () => (
    <Layout>
      <Banner title="My web contribution" variant="mono">
        <h4>{projectsTagline}</h4>
        <Button
          to="mailto:vitor@vmarinho.dev?subject=Let's get working."
          hasicon={true}
          variant="color"
          isEmail
        >
          Working together
        </Button>
      </Banner>
      <ProjectPageContent />
    </Layout>
  )

  export default Projects