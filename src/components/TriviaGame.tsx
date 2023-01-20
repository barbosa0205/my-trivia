import React, { useEffect, useState } from 'react'
import { trivia } from '../interfaces'
import Trivia from './Trivia'
import { question } from '../interfaces/'
import useTriviaCtx from '../context/useTriviaCtx'
interface Props {
  trivia: trivia
}

const TriviaGame = ({ trivia }: Props) => {
  const triviaCtxt = useTriviaCtx()
  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState<question[]>(trivia.questions)
  // points correct = 10 pts, incorrect = 0 pts

  const isCorrect = (iscorrect: boolean) => {
    if (iscorrect) {
      triviaCtxt?.setPts(triviaCtxt?.pts + 10)
    }
  }

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
    <section
      className={`flex flex-col w-full items-center min-h-screen max-w-2xl mx-auto`}
      // style={{
      //   backgroundColor: trivia.color,
      // }}
    >
      <h2
        className='text-center font-bold font-mono text-5xl ml-5 py-5'
        style={{
          color: trivia.color,
        }}
      >
        {trivia.trivia}
      </h2>
      {!start && (
        <img
          className='my-14 w-full max-w-md'
          src={trivia.image}
          alt={trivia.trivia}
        />
      )}
      {!start ? (
        <section className='w-full my-10 flex justify-center items-center'>
          <p
            onClick={() => setStart(true)}
            className='flex items-center justify-center cursor-pointer border-2 bg-gray-700 border-none w-full max-w-md h-14 rounded-xl text-2xl font-bold text-gray-50 mx-5'
          >
            PLAY
          </p>
        </section>
      ) : (
        <Trivia trivia={{ ...trivia, questions }} isCorrect={isCorrect} />
      )}
    </section>
  )
}

export default TriviaGame
