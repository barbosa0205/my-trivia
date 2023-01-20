import React, { useContext } from 'react'
import { triviaContext } from '../context/TriviaContextProvider'

const useTriviaCtx = () => {
  const contextValue = useContext(triviaContext)
  return contextValue
}

export default useTriviaCtx
