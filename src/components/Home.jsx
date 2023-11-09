import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
      <div name="home" className='w-full h-screen bg-black'>
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-cyan-500 font-semibold">My Name is</p>
        
              <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Aditya Pohane</h1>
              <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">I am a Full Stack Developer</h2>
              <p className="text-[#8892b0] py-4 max-w-[700px]">I am a Full Stack Developer that thrives in both front-end and back-end realms,
              crafting interactive designs with <span className="text-cyan-300"> HTML , CSS , BootSrap</span> and <span className="text-cyan-300">Tailwind CSS</span> at the helm.
              With JavaScript as my toolbox, I bring functionality to life,
              creating seamless experiences, mitigating user strife.
              In the server realm, Node.js empowers my domain,
              data flows effortlessly, efficiency is my gain.
             From databases to user interfaces.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white  hover:text-black">
            View Work <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3" /></span>
          </button>
        </div>
         
      </div> 
     
    </div>
    
  )
}

export default Home;
