import React, { useState } from 'react';
import { 
  IonPage, 
  IonContent,
  IonListHeader,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent, 
} from '@ionic/react';
import { Bar, Line } from 'react-chartjs-2';

const perItem = {
  labels: ['Food', 'Entertainment', 'Gas',
           'Lodging', 'Other'],
  datasets: [
    {
      label: '$ Spent',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const moneySpentOverTime = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: '$ Spent Per Month',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1,
      data: [245, 230, 250, 222, 235],
    }
  ]
}

const Analytics: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonListHeader>Vertical Bar Chart</IonListHeader>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>Money Spent this Month</IonCardSubtitle>
            <IonCardTitle>October</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Bar data={perItem} />
          </IonCardContent>
        </IonCard>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>Money Spent this Month</IonCardSubtitle>
            <IonCardTitle>October</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Line 
              data={moneySpentOverTime}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Analytics;