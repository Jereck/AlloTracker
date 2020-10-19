import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonLoading, IonFooter } from '@ionic/react';
import { loginUser } from '../firebaseConfig';
import { toast } from '../toast';
import { useDispatch } from 'react-redux';
import { setUserState } from '../redux/actions';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import './login.page.scss';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [busy, setBusy] = useState<boolean>(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    setBusy(true)
    const res = await loginUser(username, password)
    if (res) {
      dispatch(setUserState(res.user.email))
      history.replace('/dashboard')
      toast('You have logged in')
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
      <IonToolbar>
          <div className="back-circle"></div>
          <IonTitle className="ion-text-center custom-font">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Logging in..." duration={0} isOpen={busy} />
      <IonContent fullscreen className="ion-padding">
        <svg className="back-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#08BDBA" d="M52.2,-58.3C63.6,-52.6,66.1,-32.4,68.6,-12.9C71.1,6.6,73.6,25.3,67.4,41.6C61.1,57.9,46.2,71.8,29.4,75.8C12.6,79.8,-6.1,73.9,-18,63.5C-29.9,53.1,-35.1,38.2,-44.7,24.4C-54.3,10.7,-68.3,-1.9,-70.7,-16.6C-73,-31.4,-63.8,-48.2,-50.1,-53.5C-36.4,-58.8,-18.2,-52.6,1.1,-53.9C20.4,-55.2,40.8,-64,52.2,-58.3Z" transform="translate(100 100)" />
        </svg>
        <div className="ion-padding">
          <form className="ion-padding">
            <div className="wrapper-input">
              <IonInput placeholder="Email" 
                onIonChange={(e: any) => setUsername(e.target.value)} />
            </div>
            <div className="wrapper-input">
            <IonInput placeholder="Password" 
              type="password" 
              onIonChange={(e: any) => setPassword(e.target.value)}/>
            </div>
            <div className="container-form-btn">
              <IonButton onClick={login}>Login</IonButton>
            </div>
          </form>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <p className="ion-text-center custom-font">Already have an account? <Link to="/register">Register</Link></p>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;