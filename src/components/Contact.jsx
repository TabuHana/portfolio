import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Contact = () => {
  return (
    <div name='contact' className='w-full h-[4rem] grid grid-cols-3 text-gray-300 lg:hidden'>
      <a href='https://www.linkedin.com/in/nathaniel-marcellous/' className='flex justify-center items-center bg-[#0077B5]'>
        <FaLinkedin size={ 30 } className='mr-2' />
      </a>
      <a href='https://github.com/TabuHana' className='flex justify-center items-center bg-[#967BB6]'>
        <FaGithub size={ 30 } className='mr-2' />
      </a>
      <a href='https://twitter.com/Tabu_Hana9' className='flex justify-center items-center bg-[#1DA1F2]'>
        <FontAwesomeIcon icon={ faTwitter } fontSize={ 30 } className='mr-2' />
      </a>
    </div>
  );
};

export default Contact;