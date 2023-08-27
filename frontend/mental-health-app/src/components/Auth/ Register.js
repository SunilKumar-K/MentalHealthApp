import React from 'react';
import firebase from '../../firebaseConfig';

const Register = () => {
  const handleRegister = async () => {
    try {
      const idToken = await firebase.auth().currentUser.getIdToken();
      const response = await fetch('/api/register', {
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
    // Your registration form JSX
  );
};

export default Register;
