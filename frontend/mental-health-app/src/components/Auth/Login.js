import React from 'react';
import firebase from '../../firebaseConfig';

const Login = () => {
  const handleLogin = async () => {
    try {
      const idToken = await firebase.auth().currentUser.getIdToken();
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: idToken }),
      });
      const data = await response.json();
      console.log(data.message); // Display the response message from the backend
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Your login form JSX
  );
};

export default Login;
