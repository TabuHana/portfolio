import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#333] text-gray-300'>
      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-2xl font-bold inline'>
              Hello, my name is
            </p>
            <h1 className='text-4xl sm:text-4xl font-bold text-blue-400'>
              Nathaniel Marcellous
            </h1>
            <h1 className='text-4xl sm:text-3xl font-bold text-gray-500'>
              I am a Full Stack Developer.
            </h1>
          </div>
          {/* <div></div> */}
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right font-bold'>
            <p>
              My aim is to deepen my understanding in various areas of tech and product development. Currently, I am focused on building responsive full-stack web applications.
              </p>
          </div>
          <div>
            <p>Technology section:
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis sapiente provident numquam modi molestiae temporibus ab placeat. Veniam dolorem maiores quam quo fugit est laboriosam autem distinctio asperiores obcaecati.
            </p>
          </div>
        </div>
        <div className='pt-5'>
          <button className='text-white border-2  group px-6 py-3 my-2 flex items-center hover:bg-[#f5e1e0] hover:text-black hover:border-black'>
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home