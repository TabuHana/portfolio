import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#333] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/8d287db0-59fb-448e-a90d-6d269c7c1afc' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-gray-300'>Contact</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='6' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#777] hover:border-[#777] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact