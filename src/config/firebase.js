// Firebase configuration for client-side React application
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

// Client-side Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyCOEWuQZ3_Qo4YB8TjQYqYVyGQRXGEsKdU",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "trials-of-venus.firebaseapp.com", 
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "trials-of-venus",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "trials-of-venus.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "367842516984",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:367842516984:web:8f3e5a2d9b1c4f6g7h8i9j"
};

// Initialize Firebase app
let app;

console.log('Initializing Firebase for client-side operations');

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully with project:', firebaseConfig.projectId);
  } catch (error) {
    console.error('Firebase initialization failed:', error);
    throw error;
  }
} else {
  app = getApps()[0];
  console.log('Using existing Firebase app instance');
}

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// For development, connect to Firestore emulator if enabled
if (process.env.REACT_APP_USE_FIREBASE_EMULATOR === 'true' && 
    process.env.NODE_ENV === 'development' && 
    !db._settings?.host?.includes('localhost')) {
  try {
    const host = process.env.REACT_APP_FIRESTORE_EMULATOR_HOST || 'localhost';
    const port = parseInt(process.env.REACT_APP_FIRESTORE_EMULATOR_PORT || '8080');
    connectFirestoreEmulator(db, host, port);
    console.log(`Connected to Firestore emulator at ${host}:${port}`);
  } catch (error) {
    console.warn('Firestore emulator connection failed:', error.message);
  }
}

export { db, app, firebaseConfig };
