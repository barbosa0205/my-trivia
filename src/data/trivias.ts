import { trivia } from '../interfaces/index'
export const trivias: trivia[] = [
  {
    id: 'maths',
    trivia: 'Matematicas',
    image: '',
    desc: '',
    questions: [
      {
        question: '¿Cuanto es 2 + 2?',
        answers: [
          {
            answer: '5',
            correct: false,
          },
          {
            answer: '3',
            correct: false,
          },
          {
            answer: '4',
            correct: true,
          },
          {
            answer: '2',
            correct: false,
          },
        ],
      },
    ],
  },
]
