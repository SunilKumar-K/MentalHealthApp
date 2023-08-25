// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routesConfig';

const MainRouter = () => {
  return (
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
  );
};

export default MainRouter;
