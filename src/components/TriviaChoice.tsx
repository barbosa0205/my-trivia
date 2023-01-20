import React from 'react'

interface Props {
  text: string
  bgColor?: string
  otherStyles?: string
  [x: string]: any
}

const TriviaChoice = ({
  text,
  bgColor = 'bg-gray-50',
  otherStyles,
  ...rest
}: Props) => {
  return (
    <li
      className={`w-full text-center max-w-md shadow-inner ${bgColor} my-3 py-2 rounded-md  cursor-pointer hover:scale-105 hover:duration-150 duration-150 text-lg font-semibold text-gray-700 ${otherStyles}`}
      {...rest}
    >
      {text}
    </li>
  )
}

export default TriviaChoice
