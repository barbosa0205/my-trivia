import React from 'react'
import useTriviaCtx from '../context/useTriviaCtx'

const Timer = () => {
  const triviaCtxt = useTriviaCtx()
  return (
    <>
      <span
        className={`absolute flex items-center justify-center top-0 right-2 w-12 h-12 text-white font-bold font-mono bg-gray-700 rounded-full border-4 border-emerald-500 ${
          triviaCtxt?.time !== 0 && 'animate-pulse'
        }`}
      >
        <p>{triviaCtxt?.time}</p>
      </span>
    </>
  )
}

export default Timer
