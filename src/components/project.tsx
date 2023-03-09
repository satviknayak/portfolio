import React,{ useState} from 'react'
import {AiFillGithub} from 'react-icons/ai'

import Title from './Title'
import Navbar from './navbar'

import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

import {projects} from '../../data/data';

export default function Project() {
  const [active,setActive] = useState(3);

  return (
    <div id='project' className='flex flex-col w-full pb-20 relative'>
      <Navbar name={'project'}/>
      <Title name='Projects' />
      <div className='max-w-5xl self-center mt-10'>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={(cur) => setActive(cur.realIndex)}
      loop={true}
      centeredSlides={true}
      speed={800}
      autoplay={{delay:3000,}}
      modules={[Autoplay]}
    >
      {projects.projects.map((item,i)=>(
          <SwiperSlide key={i}>
            <div className='h-[420px] flex'>
              <div className={`card ${active===i && 'card-active'} overflow-hidden backdrop-blur-md`}>
                <div className='relative bg-black'>
                  <img src={item.img} alt={item.title} className={`opacity-60`}/>
                  <h5 className='absolute bottom-0 p-6 text-3xl text-slate-100 font-medium bg-gradient-to-t from-black to-transparent w-full'>{item.title}</h5>
                </div>
                <p className='para'>{item.description}</p>
                <div className='tech-span'>
                  {item.tags.map((tag,i)=>(
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <a href={`https://github.com/${item.github}`} className={`github ${active===i&&'git-active'}`}><AiFillGithub/></a>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
    </div>
  )
}