import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import firebase from './firebaseConfig';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HomeScreen from './components/HomeScreen';

firebase.initializeApp(firebaseConfig);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        <h1>My App</h1>
        <Switch>
          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {loggedIn ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/" exact>
            {loggedIn ? <HomeScreen /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
