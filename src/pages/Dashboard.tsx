import React from 'react';
import { Redirect, Route, useHistory } from 'react-router';
import { 
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonButtons,
  IonButton,
  IonPage,
  IonContent,
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig';
import { IonReactRouter } from '@ionic/react-router';
import { barChart, cart, exit, home, people } from 'ionicons/icons';

import Profile from './profile';
import ShoppingList from './ShoppingList';
import Analytics from './Analytics';

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username)
  const history = useHistory()

  async function logout() {
    await logoutUser()
    history.replace('/')
  }

  return (
    <IonContent>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/shopping-list" component={ShoppingList} exact={true} />
            <Route path="/analytics" component={Analytics} exact={true} />
            <Route exact path="/dashboard" render={() => <Redirect to="/profile" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/profile">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/shopping-list">
              <IonIcon icon={cart} />
              <IonLabel>List</IonLabel>
            </IonTabButton>
            {/* <IonTabButton tab="tab3" href="/analytics">
              <IonIcon icon={barChart} />
              <IonLabel>Analytics</IonLabel>
            </IonTabButton> */}
            <IonTabButton>
              <IonIcon onClick={logout} icon={exit} />
              <IonLabel>Log Out</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonContent>
  );
};

export default Dashboard;