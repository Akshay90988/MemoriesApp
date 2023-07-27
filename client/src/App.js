import React from 'react';
import { Container } from '@mui/material';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';

import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {

  return (
    <>
      <GoogleOAuthProvider clientId="645537419272-635iecu7h4eshd267icsfj0e8eeoskp9.apps.googleusercontent.com">
        <BrowserRouter>
          <Container maxWidth="lg">
            <Navbar />
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/auth' exact Component={Auth} />
            </Routes>

          </Container>
        </BrowserRouter>
      </GoogleOAuthProvider>

    </>
  );
};

export default App;
