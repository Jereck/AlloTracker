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
  IonCheckbox
} from '@ionic/react';
import { useFirestore } from '../useFirestore';

import './ShoppingList.page.scss';
import { closeCircle } from 'ionicons/icons';

const Shoppinglist: React.FC = () => {
  const { docs } = useFirestore('product');
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Shopping List</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              { docs && docs.map((doc, inx) => (
                <IonItem key={doc.id}>
                  <IonCheckbox slot="start" />
                  <IonLabel>{inx} - {doc.name}</IonLabel>
                </IonItem>
              ))}
            </IonList>
            <IonButton onClick={() => setShowModal(true)} expand="block">Add Item</IonButton>
            
            {/* MODAL */}
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
              <IonToolbar>
                <IonButtons slot="secondary">
                  <IonButton className="close-btn" onClick={() => setShowModal(false)}>
                    <IonIcon icon={closeCircle}></IonIcon>
                  </IonButton>
                </IonButtons>
                <IonTitle>Add Item to List</IonTitle>
              </IonToolbar>
              <p>This will be the modal</p>
            </IonModal>
            {/* END MODAL */}


          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Shoppinglist;