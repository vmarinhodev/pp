---
path: '/summarize'
title: VMDev Summarize
tagline: Video Summary Generator
completed: "2024"
order: "9"
personalproject: true
client: ""
role: Full Stack Developer
website:
  url: 'https://summarize-nine.vercel.app/'
source:
  url: 'https://github.com/vmarinhodev/summarize'
featureImage: 'summarize_desktop.png'
tags:
  - Nextjs
  - Strapi
  - Render
  - Postgres
  - OpenAI
highlights:
  title: Seamless user authentication, efficient image storage, and real-time updates
  tagline: A user-friendly interface for uploading, displaying, and editing images
body:
  ProjectBodyIntro:
    primary:
      title: Video Summary Generator 
      subtitle: Video Summaries created with ease
      content: |
              The Video Summary Generator is a progressive web application that leverages the power of artificial intelligence (AI) to create concise, accurate summaries of YouTube videos. Using advanced natural language processing (NLP) techniques, the platform simplifies the process of extracting key insights from video content, saving users time and effort. This AI-driven approach ensures highly relevant summaries, enabling users to quickly grasp the essence of even the most complex or lengthy videos. Whether for education, marketing, or research, the tool transforms how video content is consumed and managed.
      image: summarize_top_hero.png
  ProjectBodyHighlight:
    primary:
      title: The Project
      subtitle: Main Features and Technologies
      content:  |
            At its core, the application uses Next.js for a dynamic and responsive frontend experience and Strapi, a headless CMS, to manage backend operations and RESTful API integration. User data and summaries are securely stored in a PostgreSQL database. The platform employs OpenAI's natural language processing (NLP) capabilities to analyze video content and generate coherent summaries.

            Additional features include user authentication via Strapi's built-in system, ensuring personalized data access, and real-time updates through WebSockets for instant feedback on summary activities. Deployment is managed via Render, providing robust hosting for seamless application performance.

            Users simply upload a YouTube video URL, and the platform retrieves content using the YouTube API. The NLP-powered algorithms process the video data, generate a summary, and securely store it. Authenticated users can view, edit, or delete their summaries, making it an all-in-one tool for video content management.
      image: 'summarize_hero_ii.png'
    tools:
      - React
      - Nextjs
      - Typescript
      - Strapi
      - Vercel
      - Render
      - PostgresSQL
  ProjectBodyConclusion:
    primary:
      title: Reflect
      subtitle: Conclusion
      content:  |
        The Video Summary Generator offers a powerful solution for summarizing and managing YouTube video content. Designed with creators, marketers, and researchers in mind, it simplifies the process of extracting insights from lengthy videos. Its integration of modern technologies like OpenAI, Next.js, and Strapi ensures a seamless, reliable, and user-friendly experience. As a forward-thinking tool, it holds the potential to transform how video summaries are generated and utilized in various professional and personal contexts.
      image: 'summarize_hero_i.png'
---

