import { useState, useEffect } from 'react';
import { projectFirestore } from './firebaseConfig';

export const useFirestore = (collection: any) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .onSnapshot((snap) => {
        let documents: any = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });
      return () => unsub();
  }, [collection]);
  return { docs };
}