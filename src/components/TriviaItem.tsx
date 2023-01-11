import { trivia } from '../interfaces'

interface Props {
  trivia: trivia

  // ...rest
  [x: string]: any
}

const TriviaItem = ({ trivia, ...rest }: Props) => {
  return (
    <li {...rest} className='bg-sky-500 m-2'>
      <p className='hover:bg-sky-800 duration-75 hover:duration-75 text-white font-semibold cursor-pointer p-4 text-center'>
        {trivia.trivia}
      </p>
    </li>
  )
}

export default TriviaItem
