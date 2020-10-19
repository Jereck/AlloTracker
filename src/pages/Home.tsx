import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton,
} from '@ionic/react';

import './home.page.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="ion-text-center">Shopping List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding container">
        <div className="button-group">
          <IonButton shape="round" routerLink="/login" color="success">Log In</IonButton>
          <IonButton shape="round" routerLink="/register" color="secondary">Register</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
