// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routesConfig';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
