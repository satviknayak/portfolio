import React from 'react'
import Title from './Title'
import Navbar from './navbar'
import {BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {contact} from '../../data/data'

import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mwkjvbwq");

  return (
    <div id='contact' className='flex flex-col w-full min-h-screen relative'>
      <Navbar name={'contact'}/>
      <Title name='Contact' />
      <div className='contact'>
        <div className='hidden sm:flex'>
          <img className='h-96' src='/contact.svg' alt='contact image'/>
        </div>
          <form onSubmit={handleSubmit} className='p-4 grid text-slate-200'>
            <div>
              <input className='bg-slate-600/40 my-2 rounded-md h-12 w-full border-2 px-4'
              id="name"
              type="text" 
              name="name"
              placeholder='Name'
            /></div>
            <div>
              <input className='bg-slate-600/40 my-2 rounded-md h-12 w-full border-2 px-4'
              id="email"
              type="email" 
              name="email"
              placeholder='Email'
            /></div>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <div>
              <textarea className='bg-slate-600/40 my-2 rounded-md h-32 w-full border-2 px-4 pt-2'
              id="message"
              name="message"
              placeholder='Message'
            /></div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button className='bg-gradient-to-t from-indigo-700 to-blue-500 rounded-md text-lg font-semibold active:bg-violet-900 active:scale-[0.95] transition-all duration-100' type="submit" disabled={state.submitting}>Submit</button>
          </form>
      </div>
      <div className='contact-info'>
        <li>
          <a className=''><BsLinkedin className='text-3xl mx-auto text-slate-500/40 hover:text-slate-100 cursor-pointer transition-all duration-200 ease-in-out'/></a>
        </li>
        <li>
          <a className=''><BsGithub className='text-3xl mx-auto text-slate-500/40 hover:text-slate-100 cursor-pointer transition-all duration-200 ease-in-out'/></a>
        </li>
        <li>
          <a className=''><BsInstagram className='text-3xl mx-auto text-slate-500/40 hover:text-slate-100 cursor-pointer transition-all duration-200 ease-in-out'/></a>
        </li>
        <li className='col-span-3 text-center'><span className='text-slate-500/40 hover:text-slate-100 cursor-pointer transition-all duration-200 ease-in-out'><FiMail className='inline text-2xl mr-4'/>{contact.mail}</span></li>
      </div>
    </div>
  )
}