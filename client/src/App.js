// App.js
import React, { createContext, useContext, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Homelog from './components/Homelog';
import Login from './components/Login';
import Register from './components/Register';
import Dog from "./components/Dog";
import Cat from './components/Cats';
import Other from './components/Others';
import PetDetails from './components/Petdetails';
import ApplicationForm from './components/ApplicationForm';
import AddDogForm from './components/AddDogForm';
import Adoptionform from "./components/Adoptionform";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const login = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homelog" element={<Homelog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dogs" element={<Dog />} />
          <Route path="/cats" element={<Cat />}/>
          <Route path="/others" element={<Other />}/>
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/applicationform" element={<ApplicationForm/>}/>
        <Route path="/adddogform" element={<AddDogForm/>}/>
        <Route path="/adoptionform" element={<Adoptionform/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default App;
