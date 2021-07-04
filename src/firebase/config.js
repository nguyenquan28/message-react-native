import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyCotDdXRSbwx2FBMqcTYAhHqJyzRbWkHFQ',
    authDomain: 'com-message.firebaseapp.com',
    databaseURL: 'https://com-message-default-rtdb.asia-southeast1.firebasedatabase.app/',
    projectId: 'com-message',
    // storageBucket: 'com-message.appspot.com',
    messagingSenderId: '299701280836',
    appId: '1:299701280836:android:dc490c27fe83951d029c11'
}

firebase.initializeApp(firebaseConfig)

export { firebase, database }