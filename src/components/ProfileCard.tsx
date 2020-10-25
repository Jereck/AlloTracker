import { IonCard, IonCardHeader, IonCardTitle, IonContent } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutUser } from '../firebaseConfig';
import { useFirestore } from '../useFirestore';
import './ProfileCard.component.scss';

const ProfileCard: React.FC = () => { 
  const { docs } = useFirestore('product');

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Your Shopping Habits</IonCardTitle>
      </IonCardHeader>
    </IonCard>
    // <div className="card-container">
    //   <header>
    //     <div className="bio">
    //       <img src="http://www.croop.cl/UI/twitter/images/up.jpg" alt="background" className="bg" />
    //     </div>

    //     <div className="avatarcontainer">
    //       <img src="http://www.croop.cl/UI/twitter/images/carl.jpg" alt="avatar" className="avatar"/>
    //     </div>
    //   </header>

    //   <div className="content">
    //     <div className="data">
    //       <p style={{textAlign: 'center'}}>Your Shopping Habits This Month</p>
    //       <ul>
    //         <li>{ docs.length } <span>On List</span></li>
    //         <li>1,235 <span>Bought</span></li>
    //         <li>$1,253 <span>Spent</span></li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProfileCard;