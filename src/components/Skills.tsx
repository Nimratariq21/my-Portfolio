import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
          <div>
            <h2  data-aos="zoom-in" className='text-4xl md:text-5xl'>Tecnologies I work with</h2>
            <p className='text-gray-400 pt-2'>
              I have a solid foundation in frontend web development.I work on HTML,CSS,Typescript,React,and Nextjs.
              i stay updated on latest tecnologies to enhance my Skill set and contribute effectivly to projects.
            </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-3xl sm:text-4xl'>
            <div className='space-y-2 font-bold '>
              <h2 data-aos="flip-left">HTML</h2>
              <h2 data-aos="flip-left">CSS</h2>
              <h2 data-aos="flip-left">Typescript</h2>
              <h2 data-aos="flip-left">javascript</h2>
              <h2 data-aos="flip-left">python</h2>
            </div>
            <div className='space-y-2 font-bold '>
              <h2 data-aos="flip-left">React</h2>
              <h2 data-aos="flip-left">Nextjs</h2>
              <h2 data-aos="flip-left">Tailwind CSS</h2>
              <h2 data-aos="flip-left">Nodejs</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
