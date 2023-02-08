import React from 'react'
import {FaHome,FaPhoneAlt} from 'react-icons/fa'
import {IoIosPerson} from 'react-icons/io'
import {AiOutlineProject} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'

type MobileNavProp = {
    mobileNav:boolean
}


function Mobilenav(props:MobileNavProp) {


  return (
    <div className={`sm:hidden z-[450] fixed w-full h-[150px] bg-[#181818] bottom-0 ${props.mobileNav?'translate-y-0 opacity-100':'translate-y-[150px] opacity-0'} transition-all ease-in-out duration-[1s]`}>
        <div className='flex mt-4 list-none justify-between w-full px-5'>
          <a href='/#home' className='text-[#ffffff50] hover:text-slate-50 cursor-pointer transition-all duration-100 ease-in-out flex flex-col text-center'>
            <FaHome className='text-[1.75rem] mx-auto' />
            <span className='text-[0.9rem]'>Home</span>
          </a>
          <a href='/#about' className='text-[#ffffff50] hover:text-slate-50 cursor-pointer transition-all duration-100 ease-in-out flex flex-col text-center'>
            <IoIosPerson className='text-[1.75rem] mx-auto' />
            <span className='text-[0.9rem]'>About</span>
          </a>
          <a href='/#skill' className='text-[#ffffff50] hover:text-slate-50 cursor-pointer transition-all duration-100 ease-in-out flex flex-col text-center'>
            <GiSkills className='text-[1.75rem] mx-auto' />
            <span className='text-[0.9rem]'>Skills</span>
          </a>
          <a href='/#project' className='text-[#ffffff50] hover:text-slate-50 cursor-pointer transition-all duration-100 ease-in-out flex flex-col text-center'>
            <AiOutlineProject className='text-[1.75rem] mx-auto' />
            <span className='text-[0.9rem]'>Projects</span>
          </a>
          <a href='/#contact' className='text-[#ffffff50] hover:text-slate-50 cursor-pointer transition-all duration-100 ease-in-out flex flex-col text-center'>
            <FaPhoneAlt className='text-[1.75rem] mx-auto' />
            <span className='text-[0.9rem]'>Contact</span>
          </a>
        </div>
      </div>
  )
}

export default Mobilenav