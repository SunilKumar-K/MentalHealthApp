// src/components/HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h1>Welcome to the Mental Health App</h1>
      <div className="buttons-container">
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/therapy-modules">Therapy Modules</Link>
        <Link to="/interactive-exercises">Interactive Exercises</Link>
        <Link to="/mood-tracker">Mood Tracker</Link>
        <Link to="/progress-tracking">Progress Tracking</Link>
      </div>
    </div>
  );
};

export default HomeScreen;
