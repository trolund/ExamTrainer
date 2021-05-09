import { QuestionSet } from "../types/Question"

const qSet1: QuestionSet = {
    name: "Test set",
    category: "DIST",
    questions: [
        { question: "hvad er mit navn?", options: [{ name: "Troels", right: true }, { name: "Emil" }, { name: "Erik" }, { name: "Emilie" }] },
        { question: "hvad laver du?", options: [{ name: "software", right: true }, { name: "hardware" }, { name: "møbler" }] },
        { question: "Hvad er dit køn?", options: [{ name: "Mand", right: true }, { name: "kvinde" }, { name: "Poly" }] }
    ]
}

const allQuestions: QuestionSet[] = [qSet1]

export { allQuestions }