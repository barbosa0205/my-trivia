import React from 'react'
import { TriviaContext } from './context/TriviaContextProvider'
import { MainRoutes } from './routers/MainRoutes'

const App = () => {
  return (
    <TriviaContext>
      <MainRoutes />
    </TriviaContext>
  )
}

export default App
