interface answer {
  answer: string
  correct: boolean
}

interface question {
  question: string
  answers: answer[]
}

export interface trivia {
  id: string
  trivia: string
  image: string
  desc: string
  questions: question[]
}
