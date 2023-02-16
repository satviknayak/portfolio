import React from 'react'
import {motion} from 'framer-motion'

type TitleProp = {
    name : String
}

const Title = (props:TitleProp) => {
    return (
        <div className='w-fit mx-auto'>
        <h1 className={`bg-gradient-to-t from-indigo-700 to-blue-600 bg-clip-text text-transparent text-center text-4xl sm:text-5xl font-medium mt-8 sm:mt-16`}>
            {props.name}
        </h1>
        <motion.div 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:1/2,delay:1/2}}
        className='w-full h-[3px] flex bg-slate-200 mt-2' />
        </div>
    )
}

export default Title