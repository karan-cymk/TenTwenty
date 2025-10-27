import React from 'react';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Week from './components/week';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contextapi from './components/contextapi'; // import your context provider

export default function App() {
  return (
    <Contextapi>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/weeksheet/:id' element={<Week />} />
        </Routes>
      </BrowserRouter>
    </Contextapi>
  );
}
