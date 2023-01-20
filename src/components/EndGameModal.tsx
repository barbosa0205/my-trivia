import React from 'react'
import useTriviaCtx from '../context/useTriviaCtx'
import { useNavigate } from 'react-router-dom'

const EndGameModal = () => {
  const triviaCtxt = useTriviaCtx()
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-gray-500 bg-opacity-50 px-5'>
      <section className='mx-auto w-full max-w-md flex flex-col items-center bg-white min-h-[15rem] rounded-3xl p-5'>
        <h2 className='text-2xl font-semibold text-gray-700'>
          Juego Terminado
        </h2>
        <div className='w-full flex flex-col items-center justify-center'>
          <p className='mt-5 text-3xl font-bold text-gray-700'>Has ganadoo</p>
          <p className='mb-5 text-3xl font-bold text-yellow-500'>
            {triviaCtxt?.pts && triviaCtxt.pts} pts!
          </p>
        </div>
        <p
          onClick={() => {
            triviaCtxt?.setPts(0)
            navigate('/explore')
          }}
          className='text-xl text-gray-700 underline underline-offset-1 cursor-pointer'
        >
          volver
        </p>
      </section>
    </div>
  )
}

export default EndGameModal
