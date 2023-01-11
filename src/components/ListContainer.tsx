import React from 'react'
interface Props {
  children: React.ReactNode
}

const ListContainer = (props: Props) => {
  return (
    <ul className='flex justify-center flex-wrap items-centerbg-gray-100 mx-2 p-4 rounded-sm'>
      {props.children}
    </ul>
  )
}

export default ListContainer
