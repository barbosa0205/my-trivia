interface answer {
  answer: string
  correct: boolean
}

export interface question {
  question: string
  answers: answer[]
}

export interface trivia {
  id: string
  trivia: string
  image: string
  desc: string
  color: string
  questions: question[]
}
