import { trivia } from '../interfaces/index'
import mathSvg from '../assets/Mathematics.svg'
import cultureSvg from '../assets/Castle.svg'
export const trivias: trivia[] = [
  {
    id: 'maths',
    trivia: 'MATÉMATICAS',
    image: mathSvg,
    desc: '',
    color: '#f76868',
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
    trivia: 'CULTURA GENERAL',
    image: cultureSvg,
    desc: '',
    color: '#7f40b6',
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
            correct: true,
          },
        ],
      },
      {
        question: '¿En qué año murió Freddie Mercury?',
        answers: [
          {
            answer: '1995',
            correct: false,
          },
          {
            answer: '1991',
            correct: true,
          },
          {
            answer: '1992',
            correct: false,
          },
          {
            answer: '1990',
            correct: false,
          },
        ],
      },
      {
        question: '¿Qué presidente de Estados Unidos fue asesinado en Dallas?',
        answers: [
          {
            answer: 'George Bush ',
            correct: false,
          },
          {
            answer: 'Thomas Jefferson',
            correct: false,
          },
          {
            answer: 'John F. Kennedy',
            correct: true,
          },
          {
            answer: 'Abraham Lincon',
            correct: false,
          },
        ],
      },
    ],
  },
]
