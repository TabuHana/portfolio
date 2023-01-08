import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Contact = () => {
  return (
    <div name='contact' className='w-full h-[4rem] grid grid-cols-3 text-gray-300 lg:hidden'>
      {/* <form method='POST' action='https://getform.io/f/8d287db0-59fb-448e-a90d-6d269c7c1afc' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-gray-300'>Contact</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='6' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#777] hover:border-[#777] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form> */}

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