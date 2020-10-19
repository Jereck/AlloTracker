import React, { useEffect, useState } from 'react';
import { 
  IonList, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonContent, 
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonModal,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonButtons,
  IonCheckbox,
  IonInput
} from '@ionic/react';
import { useFirestore } from '../useFirestore';

import './ShoppingList.page.scss';
import { addItem } from '../firebaseConfig';

const Shoppinglist: React.FC = () => {
  const { docs } = useFirestore('product');
  
  const [pName, setPName] = useState('');

  async function addItemFromForm(){
    addItem(pName);
    setPName("");
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButton>Add List</IonButton>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Shopping List</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput 
                  placeholder="Enter Item Name"
                  value={pName}
                  onIonChange={(e: any) => setPName(e.target.value)}
                />
                <IonButton slot="end" onClick={addItemFromForm} expand="block">Add Item</IonButton>
              </IonItem>

              { docs && docs.map((doc: any, inx) => (
                <IonItem key={doc.id}>
                  <IonCheckbox slot="start" />
                  <IonLabel>{doc.name}</IonLabel>
                </IonItem>
              ))}

            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Shoppinglist;