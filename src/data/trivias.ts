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
      {
        question: '¿Cuanto es 65 - 33?',
        answers: [
          {
            answer: '30',
            correct: false,
          },
          {
            answer: '31',
            correct: false,
          },
          {
            answer: '32',
            correct: true,
          },
          {
            answer: '33',
            correct: false,
          },
        ],
      },
      {
        question: '¿Cuanto es 5 X 3?',
        answers: [
          {
            answer: '15',
            correct: true,
          },
          {
            answer: '10',
            correct: false,
          },
          {
            answer: '20',
            correct: false,
          },
          {
            answer: '18',
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
