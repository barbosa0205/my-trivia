import React from 'react'
import MainLayout from '../layouts/MainLayout'
import shape from '../assets/shape.svg'
const Home = () => {
  return (
    <MainLayout>
      <h1 className='ml-5 mt-5 max-w-xl text-5xl text-gray-700 font-bold'>
        WELCOME TO MY TRIVIA WEB APP 🚀
      </h1>

      <div className='mt-10 w-full flex justify-center items-center'>
        {/* trivia container */}
        <div className='relative min-w-[13rem] h-[12rem] max-w-[15rem] rounded-2xl bg-white shadow-md border border-gray-100 z-10'>
          {/* question */}
          <div className='w-full px-2'>
            <div className='w-full py-1  mt-4  rounded-md bg-gray-700'></div>
            <div className='w-5/6 py-1 mt-1 rounded-md bg-gray-700 mx-auto'></div>
          </div>
          {/* answers */}
          <ul className='w-full p-2 flex flex-col items-center mt-2 py-1'>
            {/* answer */}
            <li className='px-3 w-11/12 py-3 my-1 shadow-sm bg-emerald-500'></li>
            <li className='px-3 w-11/12 py-3 my-1 shadow-sm bg-gray-200'></li>
            <li className='px-3 w-11/12 py-3 my-1 shadow-sm bg-red-500'></li>
            <li className='px-3 w-11/12 py-3 my-1 shadow-sm bg-gray-200'></li>
          </ul>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
