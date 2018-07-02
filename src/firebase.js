import { initializeApp } from 'firebase'
import { APIKEY_FIREBASE } from './APIKeys'

const app = initializeApp({
    apiKey: APIKEY_FIREBASE,
    authDomain: "lunar-storm.firebaseapp.com",
    databaseURL: "https://lunar-storm.firebaseio.com",
    projectId: "lunar-storm",
});

export const db = app.database();
export const concertsRef = db.ref('Concerts');