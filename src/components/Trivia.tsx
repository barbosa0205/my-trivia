import React, { useState } from 'react'
import { trivia as triviaInterface } from '../interfaces'
import TriviaChoice from './TriviaChoice'

interface Props {
  trivia: triviaInterface
}

const Trivia = ({ trivia }: Props) => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [isSelected, setIsSelected] = useState(false)

  const [selected, setSelected] = useState<null | number>(null)
  const [positionOfSelected, setPositionOfSelected] = useState<null | number>(
    null
  )
  const answerSelected = (isCorrect: boolean, id: number) => {
    //make isSelected true
    if (isSelected) return
    setIsSelected(true)
    setPositionOfSelected(id)
  }

  return (
    <section className='flex flex-col items-center justify-center mx'>
      <h2 className='text-3xl font-bold my-4 text-gray-700 text-center'>
        {trivia.questions[questionNumber].question}
      </h2>
      <ul className='w-5/6 max-w-xl flex flex-col items-center justify-center'>
        {trivia.questions[questionNumber].answers.map((answer, index) => (
          // Select trivia Choice
          <TriviaChoice
            key={index}
            text={answer.answer}
            bgColor={
              isSelected && answer.correct
                ? 'bg-emerald-400 shadow-emerald-500'
                : positionOfSelected === index && !answer.correct
                ? 'bg-red-400 shadow-red-500'
                : 'bg-gray-200 shadow-gray-300'
            }
            onClick={() => answerSelected(answer.correct, index)}
          />
        ))}
      </ul>
    </section>
  )
}

export default Trivia
