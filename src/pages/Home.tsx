import React from 'react'
import MainLayout from '../layouts/MainLayout'
import shape from '../assets/shape.svg'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <MainLayout className={'sm:flex justify-center items-center h-screen'}>
      <div className='w-full flex justify-center items-center'>
        <h1 className='ml-5 mt-5 max-w-xl text-5xl text-gray-700 font-bold text-center font-mono'>
          BIENVENIDO A MY TRIVIA APP 🚀
        </h1>
      </div>
      <div className='mt-10 w-full flex flex-col justify-around items-center'>
        {/* trivia container */}
        <div className='min-w-[15rem] max-w-[16rem] h-[14rem] pb-3 pr-3 bg-gray-400 rounded-2xl'>
          <div className='relative w-full h-full rounded-2xl bg-white shadow-md border border-gray-100 z-10'>
            {/* question */}
            <div className='w-full px-2'>
              <div className='w-full py-2  mt-4  rounded-md bg-gray-700'></div>
              <div className='w-5/6 py-2 mt-1 rounded-md bg-gray-700 mx-auto'></div>
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
        <button
          onClick={() => navigate('/explore')}
          className='mt-14 w-64 h-14 bg-sky-500 rounded-md text-xl font-bold text-white font-mono'
        >
          JUEGA AHORA
        </button>
      </div>
    </MainLayout>
  )
}

export default Home
