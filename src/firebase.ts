// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyAdeu9_5x0reruDtzxe2eNdyQz07zNBKRc',
    authDomain: 'facebook-clone-a3970.firebaseapp.com',
    projectId: 'facebook-clone-a3970',
    storageBucket: 'facebook-clone-a3970.appspot.com',
    messagingSenderId: '469005510315',
    appId: '1:469005510315:web:e9937a633804256b4cf9ee',
    measurementId: 'G-G6QT12LQKH',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
