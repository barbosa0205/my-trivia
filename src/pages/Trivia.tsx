import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trivias } from '../data/trivias.js'
import { trivia } from '../interfaces/index.js'
const Trivia = () => {
  const params = useParams()
  const [trivia, setTrivia] = useState<trivia[] | null>(null)
  useEffect(() => {
    if (params.id) {
      const triviaFind = trivias.filter((trivia) => trivia.id === params.id)
      console.log(triviaFind)
    }
  }, [params])

  return <div>{}</div>
}

export default Trivia
