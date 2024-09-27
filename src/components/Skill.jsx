import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/images/html.png',
      label: 'HTML',
      desc: 'Structuring Web Pages'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    
    {
      imgSrc: '/images/bootstrap.svg',
      label: 'Bootstrap',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];


const Skill = () => {
  return (
   <section className="section " id='skill'>
    <div className="container">
        <h2 className="headline-2 reveal-up">
            Essential Tools I Use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]reveal-up">
        My expertise lies in building clean, efficient code that enhances both design and functionality. With a focus on user experience and performance optimization, I’m driven to create solutions that are both visually appealing and technically sound.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
                skillItem.map(({imgSrc, label, desc}, key) =>(
                    <SkillCard
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc} 
                    classes="reveal-up"
                    />
                )
                )
            }
        </div>
    </div>
   </section>
  )
}

export default Skill
