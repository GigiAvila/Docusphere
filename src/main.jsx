import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './context/Theme.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import SignInPage from './pages/SigninPage.jsx'
import MyAccountPage from './pages/MyAccountPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter basename='/'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/my-account" element={<MyAccountPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
