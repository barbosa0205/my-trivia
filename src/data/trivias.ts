import { trivia } from '../interfaces/index'
export const trivias: trivia[] = [
  {
    id: 'maths',
    trivia: 'Matématicas',
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
  {
    id: 'general_culture',
    trivia: 'Cultura General',
    image: '',
    desc: '',
    questions: [
      {
        question: '¿Quien pinto la monalisa?',
        answers: [
          {
            answer: 'Frida Kahlo',
            correct: false,
          },
          {
            answer: 'Vincent Van Gogh',
            correct: false,
          },
          {
            answer: 'Pablo Picaso',
            correct: false,
          },
          {
            answer: 'Leonardo Davinci',
            correct: false,
          },
        ],
      },
    ],
  },
]
