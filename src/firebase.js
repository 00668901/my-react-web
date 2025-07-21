// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDisid9bVVRGd6PQYwyWn9o3WuxTvSO_hc",
    authDomain: "sini-ngoding.firebaseapp.com",
    databaseURL: "https://sini-ngoding-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sini-ngoding",
    storageBucket: "sini-ngoding.firebasestorage.app",
    messagingSenderId: "656027529225",
    appId: "1:656027529225:web:742f5db56dfd5bf27ac8d8",
    measurementId: "G-EQ8GLY6MM3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };