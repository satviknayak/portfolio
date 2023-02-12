import Navbar from "./navbar"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {

    const words:Array<string> = ['Developer','Photgrapher']

    return (
        <div id="home" className="relative flex w-full min-h-screen bg-img">
            <Navbar name={'home'}/>
            <div className="mx-auto mt-[180px] justify-center text-center mb-auto cursor-pointer">
                <div className="overflow-hidden w-44 h-44 rounded-full border-2 border-slate-200 relative mx-auto"><img src="profile.jpg" alt="Profile Image" className="w-full h-full object-cover scale-[1.5] hover:scale-[1.6] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out" loading="eager" /></div>
                <h1 className="text-3xl text-slate-200 mt-[20px]">SATVIK S NAYAK</h1>
                <h3 className="text-xl mt-4 text-slate-200">I am a <Typewriter words={words} loop={0} cursor /></h3>
            </div>
        </div>
    )
}
export default Home