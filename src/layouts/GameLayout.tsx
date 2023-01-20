import React from 'react'

interface Props {
  children: React.ReactNode
}

const GameLayout = ({ children }: Props) => {
  return (
    <>
      <main className='container h-screen mx-auto'>{children}</main>
    </>
  )
}

export default GameLayout
