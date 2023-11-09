import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll'



const Navbar = () => {
  const [nav, setNav] = useState(false);



  const handleToggle = () => {
    setNav(!nav);
  }

  

  return (

      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
      <div className=' m-2 border border-white p-2 rounded-full'>
       <Link to='home' smooth={true} duration={1000}><h1 className='text-2xl '>AP</h1></Link>
      </div>
      {/*menu*/}
        <ul className='hidden md:flex'>
        <li>
        <Link  to="home"  smooth={true} duration={500} >
          Home
        </Link> 
          </li>
        <li>
        <Link  to="about"  smooth={true} duration={500} >
          About
        </Link>   
        </li>
        <li>
        <Link  to="skills"  smooth={true} duration={500} >
          Skills
        </Link> 
          </li>
        <li>
        <Link  to="work"  smooth={true} duration={500} >
          Work
        </Link> 
          </li>
        <li>
        <Link  to="contact"  smooth={true} duration={500} >
          Contact
        </Link> 
          </li>
        </ul>
      {/*icons-menu*/}
      <div className='md:hidden z-10' onClick={handleToggle}>
      {!nav ? <FaBars />:<FaTimes />}
      </div>
      {/*Mobile menu's*/}
   
      <ul className={!nav? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center' }>
     
        <li className='py-6 text-4xl'>
        <Link onClick={handleToggle}  to="home"  smooth={true} duration={500} >
          Home
        </Link> 
          </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleToggle}  to="about"  smooth={true} duration={500} >
          About
        </Link>   
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleToggle}  to="skills"  smooth={true} duration={500} >
          Skills
        </Link> 
          </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleToggle}  to="work"  smooth={true} duration={500} >
          Work
        </Link> 
          </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleToggle}  to="contact"  smooth={true} duration={500} >
          Contact
        </Link> 
          </li>
  
      </ul>
      {/*Social Icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 border rounded-r-full '>
            <a className='flex justify-between text-lg items-center w-full text-gray-300' href="https://www.linkedin.com/in/aditya-pohane-485545229/">
              LinkedIn<FaLinkedinIn size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-800 border rounded-r-full'>
            <a className='flex justify-between text-xl items-center w-full text-gray-300' href="https://github.com/adityapohane">
              Github<FaGithub size={30}/>
            </a>
          </li>
          <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 border rounded-r-full'>
            <a className='flex justify-between text-xl items-center w-full text-gray-300' href="/">
              Email<HiOutlineMail size={30}/>
            </a>
          </li>
          <li onClick={()=> window.open("https://drive.google.com/file/d/1cgJvuhd2SJ9c7mRk6c6D73nxW9wr7unw/view?usp=sharing")}  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-900 border rounded-r-full'>
            <a className='flex justify-between text-xl items-center w-full text-gray-300' href="/">
              Resume<BsFillPersonLinesFill size={30}/>
            </a>
          </li>

      </ul>
      </div>
    </div>

  )
}

export default Navbar;


