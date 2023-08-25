import React from 'react';

const TherapyModules = () => {
  const therapyModules = ['Module 1', 'Module 2', 'Module 3'];

  return (
    <div>
      <h1>Therapy Modules</h1>
      <ul>
        {therapyModules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
};

export default TherapyModules;
