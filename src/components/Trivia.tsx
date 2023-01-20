import React, { useEffect, useState } from 'react'

import { trivia as triviaInterface } from '../interfaces'
import TriviaChoice from './TriviaChoice'
import useTriviaCtx from '../context/useTriviaCtx'
import Timer from './Timer'
import EndGameModal from './EndGameModal'

interface Props {
  trivia: triviaInterface
  isCorrect: (isCorrect: boolean) => void
}

const Trivia = ({ trivia, isCorrect }: Props) => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [isSelected, setIsSelected] = useState(false)
  const [positionOfSelected, setPositionOfSelected] = useState<null | number>(
    null
  )
  const [endTrivia, setEndTrivia] = useState(false)

  const triviaCtxt = useTriviaCtx()

  useEffect(() => {
    triviaCtxt?.start()
  }, [])

  const answerSelected = (answerIsCorrect: boolean, id: number) => {
    //make isSelected true
    if (isSelected) return

    isCorrect(answerIsCorrect)

    // pause the timer
    triviaCtxt?.pause()
    setIsSelected(true)
    setPositionOfSelected(id)
  }

  const endGame = () => {
    // end game and show end info modal
    setEndTrivia(true)
    triviaCtxt?.reset()
  }

  const nextQuestion = () => {
    if (trivia.questions.length === questionNumber + 1) {
      endGame()
      return
    }
    setIsSelected(false)
    setPositionOfSelected(null)
    triviaCtxt?.reset()
    setQuestionNumber(() => questionNumber + 1)
    triviaCtxt?.start()
  }

  return (
    <>
      <section className='flex flex-col items-center justify-center mx'>
        <div className='relative'>
          <h2
            className='text-3xl font-bold my-4 text-gray-700 text-center bg-white border-8 px-2  py-5 rounded-lg mx-5'
            style={{
              borderColor: trivia.color,
            }}
          >
            {trivia.questions[questionNumber].question}
          </h2>
          <Timer />
        </div>
        <ul className='w-5/6 max-w-xl flex flex-col items-center justify-center'>
          {trivia.questions[questionNumber].answers.map((answer, index) => (
            // Select trivia Choice
            <TriviaChoice
              key={index}
              text={answer.answer}
              bgColor={
                isSelected && answer.correct
                  ? 'bg-emerald-500 shadow-emerald-600 text-white border boder-1 border-gray-300'
                  : positionOfSelected === index && !answer.correct
                  ? 'bg-red-500 shadow-red-600 text-white border boder-1 border-gray-300'
                  : 'bg-gray-200 shadow-gray-300'
              }
              onClick={() =>
                triviaCtxt?.time !== 0 && answerSelected(answer.correct, index)
              }
            />
          ))}
        </ul>
        {(triviaCtxt?.time === 0 || isSelected) && (
          <section className='w-full flex-col justify-center items-center'>
            <div
              onClick={nextQuestion}
              className='flex items-center justify-center mx-auto cursor-pointer px-5 rounded-lg mb-2 max-w-[20rem]'
              style={{
                background: trivia.color,
              }}
            >
              <p className='text-3xl text-white font-bold'>Siguiente</p>
              <i className='ri-arrow-right-line text-5xl mx-2 px-2 font-bold text-white cursor-pointer'></i>
            </div>
            <p
              onClick={endGame}
              className='text-center underline underline-offset-1 text-xl cursor-pointer mb-5'
            >
              Terminar partida
            </p>
          </section>
        )}
      </section>
      {endTrivia && <EndGameModal />}
    </>
  )
}

export default Trivia
