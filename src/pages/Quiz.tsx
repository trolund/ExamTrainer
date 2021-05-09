import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { addItem } from '../services/saveAnwsers'
import { Answer, Question, QuestionSet } from "../types/Question"

const QuestionSet: React.FC<RouteComponentProps> = ({ location, history }) => {
  const state = location.state as QuestionSet
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const [right, setRight] = useState<boolean | null | undefined>(null);

  const answers: Answer[] = []

  const clickAnswer = (isRight: boolean | undefined, answer: Answer) => {
    setRight(isRight)
    const interval = setInterval(
      () => {
        setRight(null)
        addItem({ answers: answers, created: new Date(Date.now()), questionSet: state })
        clearInterval(interval);
        setCurrQuestion(currQuestion + 1)
      },
      1000
    );

    answers.push(answer)
  }

  useEffect(() => {
    if (currQuestion > state.questions.length - 1) {
      history.push(`/home`)
    }
  }, [currQuestion]);

  const getColor = (right: boolean | null | undefined) => {
    switch (right) {
      case null: return "#fff"
      case true: return "var(--ion-color-success)"
      case false || undefined: return "var(--ion-color-danger)"
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>{state?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {state?.questions.map((q, i) =>
          <IonCard key={i} style={{ display: i === currQuestion ? "block" : "none", backgroundColor: getColor(right) }}>
            <IonCardHeader>
              <IonCardSubtitle>{q.question}</IonCardSubtitle>
              {/* <IonCardTitle>Card Title</IonCardTitle> */}
            </IonCardHeader>
            <IonCardContent>
              {q.options.map((o, i) => <IonButton key={i} disabled={right !== null} onClick={() => clickAnswer(o?.right, { questionIndex: i, answer: o })}>{o.name}</IonButton>)}
            </IonCardContent>
          </IonCard>)}
      </IonContent>
    </IonPage>
  )
}

export default QuestionSet
