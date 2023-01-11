import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  to: string
}

const NavItem = (props: Props) => {
  const navigate = useNavigate()

  return (
    <li
      onClick={() => navigate(props.to)}
      className='text-lg font-semibold text-sky-400 cursor-pointer'
    >
      {props.title}
    </li>
  )
}

export default NavItem