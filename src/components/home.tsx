import Navbar from "./navbar"

const Home = () => {
    return (
        <div className="relative flex w-full min-h-screen bg-img">
            <Navbar name={'home'}/>
            <div className="mx-auto mt-[180px] justify-center text-center mb-auto cursor-pointer">
                <div className="overflow-hidden w-44 h-44 rounded-full border-2 border-slate-200 relative"><img src="profile.jpg" alt="Profile Image" className="w-full h-full object-cover scale-[1.5] hover:scale-[1.6] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out" /></div>
                <h1 className="text-3xl text-slate-200 mt-[20px]">SATVIK S NAYAK</h1>
            </div>
        </div>
    )
}
export default Home