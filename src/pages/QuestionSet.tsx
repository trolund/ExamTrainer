import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { QuestionSet } from "../types/Question"

const QuestionSet: React.FC<RouteComponentProps> = ({ location, history }) => {
  const state = location.state as QuestionSet

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
        <p>Hello {state?.name}</p>
        <IonButton onClick={() => {
          history.push(`/quiz/${state.name.toLowerCase().replace(/\s/g, '-')}`, state)
        }}>Start quiz</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default QuestionSet
