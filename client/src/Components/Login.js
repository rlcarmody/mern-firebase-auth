import React, { useEffect, useState } from 'react';
import { auth, initializeApp } from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseConfig, uiConfig } from './config/firebase';

initializeApp(firebaseConfig);

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      setLoading(false);
    }
    )
  }, [])


  return (
    loading ? <h1>Loading...</h1>
    : !isSignedIn ? (<div>
      <h1>Login</h1>
      <StyledFirebaseAuth
        uiConfig={uiConfig([auth.EmailAuthProvider.PROVIDER_ID])}
        firebaseAuth={auth()} />
    </div>)
      : <div>Signed In<button onClick={() => auth().signOut()}>Sign out</button></div>
  )
}

export default Login;