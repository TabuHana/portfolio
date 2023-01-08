import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import resume from '../assests/nathanielMResume.pdf'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[60px] flex md:justify-center justify-end items-center px-4 bg-[#222] text-gray-300'>

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
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
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
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#0077B5]'>
            <a href='https://www.linkedin.com/in/nathaniel-marcellous/' className='flex justify-between items-center w-full text-gray-300'>
              <FaLinkedin size={30} />
              Linkedin
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#967BB6]'>
            <a href='https://github.com/TabuHana' className='flex justify-between items-center w-full text-gray-300'>
              <FaGithub size={30} />
              Github
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#1DA1F2]'>
            <a href='https://twitter.com/Tabu_Hana9' className='flex justify-between items-center w-full text-gray-300'>
              <FontAwesomeIcon icon={faTwitter} fontSize={30} />
              Twitter
            </a>
          </li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar