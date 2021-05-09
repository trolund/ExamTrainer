import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { allQuestions } from '../static/questionSets';

const Home: React.FC<RouteComponentProps> = props => {
  const users = [
    { id: 0, name: 'Fred' },
    { id: 1, name: 'Sabrina' },
    { id: 2, name: 'Vanessa' },
    { id: 3, name: 'Ive' },
    { id: 4, name: 'Martin' },
    { id: 5, name: 'Monika Mila' }
  ]

  const { history } = props

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <p>A simple paragraph.</p>
        <IonList>
          {allQuestions.map((set, i) => {
            return (
              <IonItem
                key={i}
                onClick={() => {
                  console.log('onClick')
                  history.push(`/home/${set.name.toLowerCase().replace(/\s/g, '-')}`, set)
                }}
              >
                <IonLabel>{set.name}</IonLabel>
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Home
