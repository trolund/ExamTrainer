import React from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { IonRouterOutlet, IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { home, apps } from 'ionicons/icons'
import { Helmet } from 'react-helmet'
import Home from './pages/Home'
import QuestionSet from './pages/QuestionSet'
import About from './pages/About'
import History from './pages/History'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Quiz from './pages/Quiz'

const App: React.FunctionComponent<RouteComponentProps> = props => {
  // hide the tab bar when not on home or about page
  const display = props.location.pathname.match(/home$|about$|history$/g) ? 'flex' : 'none'

  return (
    <IonPage id="main">
      {/*using Helmet to add the css to the head*/}
      <Helmet>
        <style type="text/css">{`
        ion-tab-bar {
            display: ${display};
        }
    `}</style>
      </Helmet>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/home/:user" component={QuestionSet} exact />
          <Route path="/quiz/:setName" component={Quiz} exact />
          <Route path="/about" component={About} exact />
          <Route path="/history" component={History} exact />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={apps} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
          <IonTabButton tab="history" href="/history">
            <IonIcon icon={apps} />
            <IonLabel>History</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  )
}

export default App
