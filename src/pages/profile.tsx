import React from 'react';
import { 
  IonContent, 
  IonPage, 
} from '@ionic/react';

import './profile.page.scss';
import ProfileCard from '../components/ProfileCard';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <ProfileCard />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
