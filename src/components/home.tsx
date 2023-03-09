import Navbar from "./navbar"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

const Home = () => {

    const words:Array<string> = ['Developer','Photographer']

    return (
        <div id="home" className="relative flex w-full min-h-screen bg-img">
            <Navbar name={'home'}/>
            <motion.div
            animate={{y:[20,0],opacity:[0,1],repeatCount:1}}
            transition={{ delay: 6,duration:1/2 }}
            className="mx-auto my-auto sm:mt-[160px] justify-center text-center mb-auto">
                <div className="overflow-hidden w-44 h-44 rounded-full border-2 border-slate-200 relative mx-auto cursor-pointer"><img src="profile.jpg" alt="Profile Image" className="w-full h-full object-cover scale-[1.5] hover:scale-[1.6] sm:grayscale hover:grayscale-0 transition-all duration-500 ease-in-out" loading="eager" /></div>
                <h1 className="text-3xl text-slate-200 my-[20px] cursor-default">SATVIK S NAYAK</h1>
                <a href="https://drive.google.com/file/d/1x8E9CRewWPT_SDIfV5jld8vLB6xMnvxx/view?usp=share_link" className="text-white p-2 bg-gradient-to-tl from-indigo-600 to-blue-500 rounded-md">Download Resume</a>
                <h3 className="text-xl mt-4 text-slate-200 cursor-default">I am a <Typewriter words={words} loop={0} cursor /></h3>
            </motion.div>
        </div>
    )
}
export default Home