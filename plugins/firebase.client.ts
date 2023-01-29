import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
export default defineNuxtPlugin(async (nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAzDIydnm_LXVPHYxhRNRq6b8lqQeKSMns",
    authDomain: "arabia-meet-9653a.firebaseapp.com",
    projectId: "arabia-meet-9653a",
    storageBucket: "arabia-meet-9653a.appspot.com",
    messagingSenderId: "95331200809",
    appId: "1:95331200809:web:5c5e4645aec395948f9138"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const firestore = getFirestore(app)
  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)

  nuxtApp.vueApp.provide('firestore', firestore)
  nuxtApp.provide('firestore', firestore)
  const {initUser} = useAuth()
   initUser()
  
 



 
})