import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

import { useTimer } from 'use-timer'
import { Status } from 'use-timer/lib/types'

interface Props {
  children: React.ReactNode
}

interface CurrentUserContextType {
  time: number
  reset: () => void
  status: Status
  start: () => void
  pause: () => void
  pts: number
  setPts: Dispatch<SetStateAction<number>>
}
export const triviaContext = createContext<CurrentUserContextType | null>(null)

export const TriviaContext = ({ children }: Props) => {
  // timer
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 15,
    endTime: 0,
    timerType: 'DECREMENTAL',
  })

  const [pts, setPts] = useState(0)

  const value: CurrentUserContextType = {
    time,
    start,
    pause,
    reset,
    status,
    pts,
    setPts,
  }

  return (
    <triviaContext.Provider value={value}>{children}</triviaContext.Provider>
  )
}
