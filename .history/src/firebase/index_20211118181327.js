import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestor';

const firebaseConfig = {
	apiKey: 'AIzaSyB54GpfV43Uee0-pn1zdOSkf2Cd0xJVLvM',
	authDomain: 'rsvp-app-firebase.firebaseapp.com',
	databaseURL: 'https://rsvp-app-firebase-default-rtdb.firebaseio.com',
	projectId: 'rsvp-app-firebase',
	storageBucket: 'rsvp-app-firebase.appspot.com',
	messagingSenderId: '933326525454',
	appId: '1:933326525454:web:8e3c2f529dda01fed8185f',
	measurementId: 'G-H0BF749CPW',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
