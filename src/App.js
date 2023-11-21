// App.js
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dog from './components/Dog';
import PetDetails from './components/Petdetails'; // Assuming you have a PetDetails component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dogs" element={<Dog />} />
        <Route path="/pet/:id" element={<PetDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
