import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trivias } from '../data/trivias.js'
import { trivia as triviaInterface } from '../interfaces/index.js'

const Trivia = () => {
  const params = useParams()
  const [trivia, setTrivia] = useState<triviaInterface | null | undefined>(null)

  const getTriviaById = (id: string | undefined) => {
    if (id) {
      const triviaFind: triviaInterface | undefined = trivias.find(
        (trivia) => trivia.id === id
      )
      if (triviaFind === undefined) {
        setTrivia(null)
      } else {
        setTrivia(triviaFind)
      }
    }
    return
  }

  useEffect(() => {
    getTriviaById(params.id)
  }, [params])

  return <main>{trivia ? <p>{trivia.id}</p> : ''}</main>
}

export default Trivia
