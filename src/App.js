import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Account from './components/Account';
import Home from './components/Home';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>

    <Navbar />

    <AuthContextProvider>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/account' element={
    <ProtectedRoute>
      <Account />
      </ProtectedRoute>
    } />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
