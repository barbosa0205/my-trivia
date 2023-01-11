import React from 'react'
import NavItem from './NavItem'

const Nav = () => {
  return (
    <nav className='px-2'>
      <ul>
        <NavItem title='Explore' to='/explore' />
      </ul>
    </nav>
  )
}

export default Nav
