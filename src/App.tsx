import React from 'react';
import './App.css';
import { Signup } from './SignUp';
import StepperComponent from './Stepper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/form" element={<StepperComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
