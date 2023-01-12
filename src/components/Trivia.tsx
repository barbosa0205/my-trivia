import React, { useState } from 'react'
import { trivia } from '../interfaces'

interface Props {
  trivia: trivia
}

const Trivia = ({ trivia }: Props) => {
  const [questionNumber, setQuestionNumber] = useState(0)
  return (
    <section className='flex flex-col items-center justify-center mx'>
      <h2 className='text-3xl font-bold my-4 text-gray-700'>
        {trivia.questions[questionNumber].question}
      </h2>
      <ul className='w-5/6 max-w-xl flex flex-col items-center justify-center'>
        {trivia.questions[questionNumber].answers.map((answer) => (
          <li
            className='w-full text-center max-w-md bg-gray-200 my-3 py-2 rounded-md shadow-inner shadow-gray-200 cursor-pointer hover:scale-105 hover:duration-150 duration-150 text-lg font-semibold text-gray-700'
            key={answer.answer}
          >
            {answer.answer}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Trivia
