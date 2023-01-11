import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { trivias } from '../data/trivias'
import ListContainer from '../components/ListContainer'
import TriviaItem from '../components/TriviaItem'
import { useNavigate } from 'react-router-dom'

const Explore = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <h1 className='font-bold text-3xl text-center my-5 text-gray-400'>
        Elige una categoria
      </h1>
      <ListContainer>
        {trivias &&
          trivias.map((trivia) => (
            <TriviaItem
              key={trivia.id}
              trivia={trivia}
              onClick={() => {
                navigate('/trivia/' + trivia.id)
              }}
            />
          ))}
      </ListContainer>
    </MainLayout>
  )
}

export default Explore
