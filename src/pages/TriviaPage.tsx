import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TriviaGame from '../components/TriviaGame.js'
import { trivias } from '../data/trivias.js'
import { trivia as triviaInterface } from '../interfaces/index.js'
import MainLayout from '../layouts/MainLayout.js'

const TriviaPage = () => {
  const params = useParams()
  const [trivia, setTrivia] = useState<triviaInterface | null | undefined>(null)

  const [loading, setLoading] = useState(true)

  // get trivia by id, if this return undefined set trivia value to null
  const getTriviaById = (id: string | undefined) => {
    if (id) {
      const triviaFind: triviaInterface | undefined = trivias.find(
        (trivia) => trivia.id === id
      )
      if (triviaFind === undefined) {
        setTrivia(null)
        setLoading(false)
      } else {
        setTrivia(triviaFind)
        setLoading(false)
      }
    }
    return
  }

  // when params changes call getTriviaById
  useEffect(() => {
    getTriviaById(params.id)
  }, [params])

  return (
    <main className='container mx-auto bg-white'>
      {!trivia && loading ? (
        <p>loading</p>
      ) : trivia ? (
        <TriviaGame trivia={trivia} />
      ) : (
        <h2>No encontramos la categoria</h2>
      )}
    </main>
  )
}

export default TriviaPage
