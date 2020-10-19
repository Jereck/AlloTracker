import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonLoading, IonFooter } from '@ionic/react';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig';
import './register.page.scss';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  async function register() {
    setBusy(true)
    if(password !== cpassword) {
      return toast('Passwords do not match')
    }

    if(username.trim() === '' || password.trim() === '') {
      return toast('Username and password are required')
    }

    const res = await registerUser(username, password)
    if(res) {
      toast('You have registered successfully!')
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <div className="back-circle"></div>
          <IonTitle className="ion-text-center custom-font">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Registering..." duration={0} isOpen={busy} />
      <IonContent fullscreen>
        <svg className="back-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#08BDBA" d="M52.2,-58.3C63.6,-52.6,66.1,-32.4,68.6,-12.9C71.1,6.6,73.6,25.3,67.4,41.6C61.1,57.9,46.2,71.8,29.4,75.8C12.6,79.8,-6.1,73.9,-18,63.5C-29.9,53.1,-35.1,38.2,-44.7,24.4C-54.3,10.7,-68.3,-1.9,-70.7,-16.6C-73,-31.4,-63.8,-48.2,-50.1,-53.5C-36.4,-58.8,-18.2,-52.6,1.1,-53.9C20.4,-55.2,40.8,-64,52.2,-58.3Z" transform="translate(100 100)" />
        </svg>
        <div className="ion-padding">
          <form className="ion-padding">
            <div className="wrapper-input">
              <IonInput placeholder="Username" 
                onIonChange={(e: any) => setUsername(e.target.value)} />
            </div>
            <div className="wrapper-input">
              <IonInput placeholder="Password"
                type="password" 
                onIonChange={(e: any) => setPassword(e.target.value)}/>
            </div>
            <div className="wrapper-input">
              <IonInput placeholder="Confirm Password" 
                type="password" 
                onIonChange={(e: any) => setCPassword(e.target.value)}/>
            </div>
            <div className="container-form-btn">
              <IonButton onClick={register} color="medium">Register</IonButton>
            </div>
          </form>
        </div>
                
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <p className="ion-text-center custom-font">Already have an account? <Link to="/login">Login</Link></p>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;