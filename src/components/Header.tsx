import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <header className='min-h-[4rem] flex items-center justify-between'>
      <h2 className='font-mono font-bold text-sky-400 px-2 text-2xl'>TRIVIA</h2>
      <Search />
    </header>
  )
}

export default Header
