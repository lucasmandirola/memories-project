import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Container maxidth='lg'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
