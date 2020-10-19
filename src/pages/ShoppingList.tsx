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
import { closeCircle } from 'ionicons/icons';

const Shoppinglist: React.FC = () => {
  const { docs } = useFirestore('product');
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState<string>();

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
                  <IonLabel>{doc.name}</IonLabel>
                </IonItem>
              ))}
            </IonList>
            <IonButton onClick={() => setShowModal(true)} expand="block">Add Item</IonButton>
            
            {/* MODAL */}
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Add Item</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => setShowModal(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <form>
                  <IonItem>
                    <IonInput value={text} placeholder="Name"></IonInput>
                  </IonItem>
                </form>
              </IonContent>
            </IonModal>
            {/* END MODAL */}


          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Shoppinglist;