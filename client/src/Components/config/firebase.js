import * as firebaseui from 'firebaseui';


export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export const uiConfig = (providers) => ({
  signInFlow: 'popup',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: providers,
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
})
