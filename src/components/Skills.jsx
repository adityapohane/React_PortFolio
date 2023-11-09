import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from "../assets/javascript.png";
import Tailwind from '../assets/tailwind.png';
import Reactimg from '../assets/react.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';
import Mongo from '../assets/mongo.png';



const Skills = () => {
  return (
      <div name="skills" className='bg-black text-gray-300 w-full h-screen '>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
        <p className='text-4xl font-bold inline border-b-4 border-cyan-600'>Skills</p>
        <p className='py-4 font-normal'>This are the Technologies I have worked with</p>
    </div>
      
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white p-2 hover:border-cyan-300'>
        <img className='w-20 mx-auto' src={HTML}  alt="html image" />
        <p className='my-4'>HTML</p>
      </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white p-2 hover:border-cyan-300'>
         <img className='w-20 mx-auto' src={CSS}  alt="CSS image" />
        <p className='my-4'>CSS</p>
      </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white p-2 hover:border-cyan-300'>
        <img className='w-20 mx-auto' src={JavaScript}  alt="JavaScript image" />
        <p className='my-4'>JavaScript</p>
      </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white p-2 hover:border-cyan-300'>
        <img className='w-20 mx-auto' src={Reactimg}  alt="React image" />
        <p className='my-4'>REACT JS</p>
      </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white p-2 hover:border-cyan-300'>
        <img className='w-20 mx-auto' src={Tailwind}  alt="Tailwind image" />
        <p className='my-4'>TAILWIND CSS</p>
          </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white p-2 hover:border-cyan-300'>
        <img className='w-20 mx-auto' src={Node}  alt="Node image" />
        <p className='my-4'>NODE JS</p>
      </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white p-2 hover:border-cyan-300'>
        <img className='w-20 mx-auto' src={Mongo}  alt="Mongo image" />
        <p className='my-4'>MONGO DB</p>
      </div>


        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-white p-2 hover:border-cyan-300'>
        <img className='w-20 mx-auto' src={Github}  alt="Github image" />
        <p className='my-4'>GITHUB</p>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Skills