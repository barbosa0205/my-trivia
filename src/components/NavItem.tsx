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
      className='text-lg font-semibold text-sky-500 cursor-pointer font-mono'
    >
      {props.title}
    </li>
  )
}

export default NavItem
