import React from 'react'
import amiibfo from "../assests/amiibfo.png";
import jsQuiz from "../assests/js-coding-quiz.png";
import passwordGen from "../assests/password-gen.png";
import quickCook from "../assests/quick-cook.png";
import weatherD from "../assests/weather-dash.png";
import cryptoFollower from "../assests/crypto-follower.png";

const Projects = () => {

  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#333]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-gray-300'>Projects</p>
        </div>
        {/* style={{ backgroundImage: `url(${})` }} */}

        {/* Projects */}

        {/* Container */}
        <div
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Project 1 */}
          
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${cryptoFollower})` }}>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Crypto Follower
              </span>
              <div className='pt-8 text-center'>
                <a href='https://cryptofollower-ca7ce.web.app/' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/TabuHana/crypto-follower' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}

          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${amiibfo})` }} >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Amiibo Locator
              </span>
              <div className='pt-8 text-center'>
                <a href='https://tabuhana.github.io/amiibo-info/' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/TabuHana/amiibo-info' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}

          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${jsQuiz})` }}>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JavaScript Quiz
              </span>
              <div className='pt-8 text-center'>
                <a href='https://tabuhana.github.io/JavaScript-Coding-Quiz/' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/TabuHana/JavaScript-Coding-Quiz' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}

          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${passwordGen})` }}>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Password Generator
              </span>
              <div className='pt-8 text-center'>
                <a href='https://tabuhana.github.io/Random-Password-Generator/' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/TabuHana/Random-Password-Generator' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}

          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${quickCook})` }}>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Quick Cook
              </span>
              <div className='pt-8 text-center'>
                <a href='https://bootcamp-project-2-quickcook.herokuapp.com' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/wreising/Week_8-Project_2-QuickCook' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}

          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${weatherD})` }}>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather Dashboard
              </span>
              <div className='pt-8 text-center'>
                <a href='https://tabuhana.github.io/Weather-Dashboard/' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/TabuHana/Weather-Dashboard' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )

}

export default Projects