import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDkH1JHb_iWvZRngl_15-58OKFgTrX1sEs",
    authDomain: "authdemo-e8357.firebaseapp.com",
    projectId: "authdemo-e8357",
    storageBucket: "authdemo-e8357.appspot.com",
    messagingSenderId: "986574374226",
    appId: "1:986574374226:web:4e6eb8325b6e065689268b"
})

export const auth = app.auth()
export const db = app.firestore()
export default app