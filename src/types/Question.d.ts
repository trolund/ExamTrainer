export type Question = {
    question: string,
    options: Option[],
    hardness?: 1 | 2 | 3 | 4 | 5,
    img?: string
}

export type QuestionSet = {
    name: string,
    category?: string,
    questions: Question[]
    hardness?: number,
    timeLimitSec?: number,
    numberOfOptions?: 2 | 4
}

export type Option = {
    name: string,
    right?: boolean,
    points?: number,
    comment?: string,
}

export type Answer = {
    questionIndex: number;
    answer: Option;
}

export type AnswerSet = {
    created: Date;
    questionSet: QuestionSet;
    answers: Answer[];
}