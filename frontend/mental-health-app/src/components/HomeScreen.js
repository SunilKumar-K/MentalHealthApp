// src/components/HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="container">
      <div style={{"textAlign":"center","font-family":"Monotype Corsiva","font-size":"50px","margin":"5px","padding":"5px"}}>Welcome to the Mental Health App</div>
      <div style={{"textAlign":"center"}}>
      <div className='navbar container ' style={{"font-family":"Monotype Corsiva","button-radius":"10px","margin":"20px","background-color":"black","color":"white" }}>
       <Link to="/chatbot"> <button className='btn 'style={{"font-family":"Footlight MT Light","border-radius":"50px","border-color":"white","background-color":"black","color":"white","margin":"5px"}}> <h2>ChatBot</h2></button> </Link>
       <Link to="/therapy-modules">  <button className='btn btn-danger'style={{"font-family":"Footlight MT Light","border-radius":"50px","border-color":"white","background-color":"black","color":"white","margin":"5px"}}>   <h2>Therapy modules</h2></button></Link>
      <Link to="/interactive-exercises">  <button className='btn'style={{"font-family":"Footlight MT Light","border-radius":"50px","border-color":"white","background-color":"black","color":"white","margin":"5px"}}>   <h2>Interactive exercises</h2></button>  </Link>
        <Link to="/mood-tracker"><button className='btn 'style={{"font-family":"Footlight MT Light","border-radius":"50px","border-color":"white","background-color":"black","color":"white","margin":"5px"}}>   <h2>Mood Tracker</h2></button>  </Link>
        <Link to="/progress-tracking"><button className='btn'style={{"font-family":"Footlight MT Light","border-radius":"50px","border-color":"white","background-color":"black","color":"white","margin":"5px"}}>   <h2>Progress Tracking</h2></button>  </Link>
        </div>
        </div>
    </div>
  );
};

export default HomeScreen;
