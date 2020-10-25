import * as firebase from 'firebase'
import 'firebase/firestore'
import { toast } from './toast'

const config = {
  apiKey: "AIzaSyAIb30xHxwd8PXid-jgAM25gaHfGQU6YBo",
  authDomain: "ionic-shopping-2eefe.firebaseapp.com",
  databaseURL: "https://ionic-shopping-2eefe.firebaseio.com",
  projectId: "ionic-shopping-2eefe",
  storageBucket: "ionic-shopping-2eefe.appspot.com",
  messagingSenderId: "510217375062",
  appId: "1:510217375062:web:c275316a431054a9c79af7",
  measurementId: "G-RECVSDV4LP"
}

firebase.initializeApp(config)
export const projectFirestore = firebase.firestore()

export function getCurrentUser(){
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
      if(user){
        resolve(user)
      } else {
        resolve(null)
      }
      unsubscribe()
    })
  })
}

export function logoutUser(){
  return firebase.auth().signOut()
}

export async function loginUser(username: string, password: string) {
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(username, password)
    console.log(res)
    return res
  } catch (error) {
    toast(error.message, 4000)
    return false
  }
}

export async function registerUser(username: string, password: string) {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(username, password)
    console.log(res)
    return true
  } catch(error) {
    toast(error.message, 4000)
    return false
  }
}

export async function addItem(productName: string) {
  try {
    const res = await projectFirestore.collection('product').doc().set({
      name: productName,
      purchased: false
    })
    toast('Successfully added!', 5000)
    return res
  } catch(error) {
    toast(error.message, 4000)
  }
}