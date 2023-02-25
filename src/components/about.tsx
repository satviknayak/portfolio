import React,{useState,useRef,useEffect} from 'react'
import Title from './Title'
import Navbar from './navbar'
import {motion} from 'framer-motion'

type EducationProp = {
  timeline:string,
  name:string,
  percentage:string,
  designation:string
}

const education:Array<EducationProp>=[
  {
    timeline:'2007-2018',
    name:'Green Park Central School, Hiriadka',
    percentage:'81%',
    designation:'High-School'
  },{
    timeline:'2018-2020',
    name:'Mahatma Gandhi Memorial College, Udupi',
    percentage:'89.67%',
    designation:'Pre-University'
  },{
    timeline:'2020-Present',
    name:'NMAM Institute of Technology, Nitte',
    percentage:'CGPA - 9.42',
    designation:'B.E.'
  },
]

export default function About() {

  
  return (
    <div id="about" className={`flex flex-col w-full pb-20 relative`}>
      <Navbar name={"about"} />
      <Title name="About" />
      <div className="about-grid">
        <div className="flex text-slate-200 my-auto py-6 text-justify">
          Frontend Web Developer with a Passion for Technology situated in
          Karnataka, India. competent in the languages of HTML5, CSS3, and
          Javascript. capable of creating web applications using the Nextjs and
          Django frameworks. Imaginative, helpful, and interested in solving
          problems; team player. I'm currently a third-year student at
          N.M.A.M.I.T., where I'm studying computer science. I also enjoy taking
          and editing pictures. When I'm not working on a project, I'm probably
          watching a movie or an anime.
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-medium text-slate-100 pl-8">
            Education
          </h2>
          <div>
            {education?.map((item, index) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                key={index}
                className={`mt-4 ml-2 border-l-2 pl-2 py-2`}
              >
                <h1 className="text-lg text-slate-200 m-0">{item.name}</h1>
                <p className="w-full text-sm text-slate-400/50 gap-4 flex">
                  <span>{item.timeline}</span>
                  <span>{item.percentage}</span>
                  <span>{item.designation}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}