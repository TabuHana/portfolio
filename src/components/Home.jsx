import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#333] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline'> Hello World </p>
          </div>
          {/* <div></div> */}
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right font-bold'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, odit ab magnam repellat cumque dolor.</p>
          </div>
          <div>
            <p>Technology section:
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis sapiente provident numquam modi molestiae temporibus ab placeat. Veniam dolorem maiores quam quo fugit est laboriosam autem distinctio asperiores obcaecati.
            </p>
          </div>
        </div>
          <div className='pt-5'>
            <button className='text-white border-2  group px-6 py-3 my-2 flex items-center hover:bg-[#777]'>
              View Projects
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