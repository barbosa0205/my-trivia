import React, { useEffect, useState } from 'react'
import { trivia } from '../interfaces'
import Trivia from './Trivia'
import { question } from '../interfaces/'
interface Props {
  trivia: trivia
}

const TriviaGame = ({ trivia }: Props) => {
  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState<question[]>(trivia.questions)

  const shuffleQuestionArray = (array: question[]) => {
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random())
    return shuffledArray
  }

  useEffect(() => {
    // Randomize the order of questions array
    const shuffledQuestions = shuffleQuestionArray(questions)
    setQuestions(shuffledQuestions)
  }, [])

  return (
    <section className='w-full max-w-2xl mx-auto'>
      <h2 className='text-center font-bold text-3xl text-sky-700 my-5'>
        {trivia.trivia}
      </h2>
      {!start ? (
        <section className='min-h-[25rem] my-5 flex justify-center items-center'>
          <p
            onClick={() => setStart(true)}
            className='cursor-pointer border-2 border-sky-600 px-10 py-3 rounded-lg text-sky-600 font-bold'
          >
            PLAY
          </p>
        </section>
      ) : (
        <Trivia trivia={{ ...trivia, questions }} />
      )}
    </section>
  )
}

export default TriviaGame
