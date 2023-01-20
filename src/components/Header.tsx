import React from 'react'
import Nav from './Nav'

import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className='min-h-[4rem] flex items-center justify-between'>
      <h2
        onClick={() => navigate('/')}
        className='font-mono font-bold text-sky-500 px-2 text-2xl cursor-pointer'
      >
        TRIVIA
      </h2>

      <section className='flex'>
        <Nav />
      </section>
    </header>
  )
}

export default Header
