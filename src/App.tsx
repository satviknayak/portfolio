import Home from './components/home'
import About from './components/about'
import Skill from './components/skill'
import Project from './components/project'
import Contact from './components/contact'
import Mobilenav from './components/mobilenav'

import {RiCloseFill} from 'react-icons/ri'
import {BiMenuAltLeft} from 'react-icons/bi'



import { useState,useRef } from 'react'

function App() {

  const [mobileNav,setMobileNav] =  useState(false);


  return (
    <div className='flex min-h-screen w-full bg-[#242424] relative'>
      <div className='sm:hidden fixed flex rounded-full w-[2.5rem] h-[2.5rem] bg-gradient-to-t from-indigo-600 to-blue-600 bottom-[1.5rem] left-[50%] translate-x-[-50%] z-[500] cursor-pointer hover:scale-[1.05] transition-all duration-[0.5s] ease-in-out active:scale-[0.8] text-white' onClick={()=>{setMobileNav(!mobileNav)}}>
        <BiMenuAltLeft className={`${mobileNav?'hidden opacity-0':'opacity-100'} text-[2rem] m-auto transition-all duration-[1s] ease-in-out `} />
        <RiCloseFill className={`${mobileNav?'opacity-100':'hidden opacity-0'} text-[2rem] m-auto transition-all duration-[1s] ease-in-out `}/>
      </div>
      <Mobilenav mobileNav={mobileNav} />
      <div className={`flex max-h-screen w-full overflow-y-auto flex-col scroll-hide ${mobileNav?'-translate-y-[150px] sm:translate-y-0':'translate-y-0'} transition-all duration-[1s] ease-in-out overflow-hidden`}>
        <Home/>
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App
