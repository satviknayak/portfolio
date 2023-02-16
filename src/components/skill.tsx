import React from 'react'
import Title from './Title'
import Navbar from './navbar'
import { stack } from '../../data/data'

export default function Skill() {

  return (
    <div id='skill' className='flex flex-col w-full pb-20 relative'>
      <Navbar name={'skill'}/>
      <Title name='Skills' />
      <div id='skilldiv' className='flex flex-col max-w-[800px] w-fit mx-auto mt-4 sm:mt-16 backdrop-blur-sm rounded-md bg-slate-500/20 z-10'>
        <div className='py-4 px-4 flex-col flex'>
          <h2 className='text-2xl text-slate-200'>Languages</h2>
          <div className='flex flex-wrap'>
            {stack.lan?.map((item,index)=>(
              <span key={index} className='border-2 m-1 text-slate-200 p-2 bg-transparent rounded-md hover:bg-gradient-to-t hover:from-indigo-500 hover:to-blue-500 transition-all duration-1000 ease-in-out cursor-pointer text-sm'>{item}</span>
            ))}
          </div>
        </div>
        <div className='py-4 px-4 flex-col flex'>
          <h2 className='text-2xl text-slate-200'>Frameworks and Libraries</h2>
          <div className='flex flex-wrap'>
            {stack.fr?.map((item,index)=>(
              <span key={index} className='border-2 m-1 text-slate-200 p-2 bg-transparent rounded-md hover:bg-gradient-to-t hover:from-indigo-500 hover:to-blue-500 transition-all duration-1000 ease-in-out cursor-pointer text-sm'>{item}</span>
            ))}
          </div>
        </div>
        <div className='py-4 px-4 flex-col flex'>
          <h2 className='text-2xl text-slate-200'>Tools</h2>
          <div className='flex flex-wrap'>
            {stack.tool?.map((item,index)=>(
              <span key={index} className='border-2 m-1 text-slate-200 p-2 bg-transparent rounded-md hover:bg-gradient-to-t hover:from-indigo-500 hover:to-blue-500 transition-all duration-1000 ease-in-out cursor-pointer text-sm'>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}