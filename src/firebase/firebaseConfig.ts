import { initializeApp } from '@react-native-firebase/app';
import { REACT_NATIVE_FIREBASE_API_KEY } from '@env';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: REACT_NATIVE_FIREBASE_API_KEY,
    authDomain: "mutual-mpl.firebaseapp.com",
    projectId: "mutual-mpl",
    storageBucket: "mutual-mpl.appspot.com",
    messagingSenderId: "62263380096",
    appId: "1:62263380096:web:d8b4e70672d9d30378fe65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;