import React from 'react'
import ProjectCard from './ProjectCard';



const works = [
    {
      imgSrc: '/images/project-1.jpeg',
      title: 'Weather App',
      tags: ['API', 'Javascript', 'Development'],
      projectLink: 'https://github.com/vijayverma4655/portfolio.git'
    },
    {
      imgSrc: '/images/project-2.jpeg',
      title: 'VegeTable Shop',
      tags: ['HTML', 'CSS'],
      projectLink: 'https://github.com/vijayverma4655/portfolio.git'
    },
    {
      imgSrc: '/images/project-3.webp',
      title: 'Shopping Now',
      tags: ['HTML', 'CSS'],
      projectLink: 'https://github.com/vijayverma4655/portfolio.git'
    },
    {
      imgSrc: '/images/project-4.webp',
      title: 'Ecommerce website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/vijayverma4655/portfolio.git'
    },
    {
      imgSrc: '/images/project-5.webp',
      title: 'Frontend Design',
      tags: ['React', 'Development'],
      projectLink: 'https://github.com/vijayverma4655/portfolio.git'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/vijayverma4655/portfolio.git'
    },
  ];

const Work = () => {
  return (
    <section className="section" id='work'>
         <div className='container'>

            <h2 className="headline-2 mb-8 reveal-up">
            My Portfolio Highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">{works.map(({imgSrc, title, tags, projectLink},key) => (
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                
                />
            ))}
            </div>
         </div>
    </section>
  )
}

export default Work
