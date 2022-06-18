import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex md:justify-center justify-end items-center px-4 bg-[#222] text-gray-300'>

      {/* Navbar */}
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#333]'}>

        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#0077B5]'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300'>
              <FaLinkedin size={30} />
              Linkedin
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#967BB6]'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300'>
              <FaGithub size={30} />
              Github
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#1DA1F2]'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300'>
              <FontAwesomeIcon icon={faTwitter} fontSize={30} />
              Twitter
            </a>
          </li>
        </ul>
      </div>

      {/* Pretty Scroll */}
      {/* <div className='lg:sticky top-0 w-1 h-screen lg:flex items-center'> */}
      {/* <div className='hidden snap-y snap-mandatory top-[40%] w-1 h-screen lg:flex items-center fixed flex-col left-[5%] '>
        <div className='grid grid-cols-1 h-full gap-2 lg:max-h-96 py-32 lg:py-0 section_nav'>
          <Link to='home' className='snap-start opacity-100 h-full rounded-sm relative' style={{ backgroundColor: 'rgb(255 199 203)' }}>' </Link>
          <Link to='projects' className='snap-start opacity-100 h-full rounded-sm relative' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}> </Link>
          <Link to='resume' className='snap-start opacity-100 h-full rounded-sm relative' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}> </Link>
          <Link to='contact' className='snap-start opacity-100 h-full rounded-sm relative' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}> </Link>
        </div>
      </div> */}


    </div>

  )
}

export default Navbar