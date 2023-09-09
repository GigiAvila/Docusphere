import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './context/Theme.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SignInPage from './pages/SigninPage.jsx'
import MyAccountPage from './pages/MyAccountPage.jsx';
import PricingOptions from './pages/PricingOptions.jsx';
import ContactUs from './components/ContactUs.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pricingOptions" element={<PricingOptions />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/my-account" element={<MyAccountPage />} />
            <Route path="/my-account/contactUs" element={<ContactUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
