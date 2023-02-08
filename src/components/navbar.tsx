import React from 'react'

type NavbarProp = {
  name:String
}

export default function Navbar(props:NavbarProp) {
  return (
    <nav className='absolute hidden sm:flex w-full py-4 px-8 justify-between z-[999]'>
      <div></div>
      <div className=''>
        <a className={`nav-link before:w-full ${props.name==='home'?'nav-active':''}`} href="/#home">Home</a>
        <a className={`nav-link before:w-full ${props.name==='about'?'nav-active':''}`} href="/#about">About</a>
        <a className={`nav-link before:w-full ${props.name==='skill'?'nav-active':''}`} href="/#skill">Skills</a>
        <a className={`nav-link before:w-full ${props.name==='project'?'nav-active':''}`} href="/#project">Projects</a>
        <a className={`nav-link before:w-full ${props.name==='contact'?'nav-active':''}`} href="/#contact">Contact</a>
      </div>
    </nav>
  )
}
