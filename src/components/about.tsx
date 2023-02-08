import React from 'react'
import Title from './Title'
import Navbar from './navbar'

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
    <div
      id="about"
      className={`flex flex-col w-full pb-20 relative`}
    >
      <Navbar name={"about"} />
      <Title name="About" />
      <div className="about-grid">
        <div className="flex text-slate-200 my-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eum
          optio reprehenderit libero quibusdam deleniti, corporis nam doloremque
          tempora itaque expedita sint, rem a vel eius? Nostrum aliquid eos
          ipsam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eum
          optio reprehenderit libero quibusdam deleniti, corporis nam doloremque
          tempora itaque expedita sint, rem a vel eius? Nostrum aliquid eos
          ipsam.
        </div>
        <div className="flex flex-col">
          <h2 className='text-3xl font-medium text-slate-100 pl-8'>Education</h2>
          <div>
            {education?.map((item,index)=>(
              <div key={index} className={`mt-4 ml-2 border-l-2 pl-2 py-2`}>
                <h1 className='text-lg text-slate-200 m-0'>{item.name}</h1>
                <p className='w-full text-sm text-slate-400/50 gap-4 flex'><span>{item.timeline}</span><span>{item.percentage}</span><span>{item.designation}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}