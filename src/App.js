import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Reservation from './Reservation';

function App() {
  console.log('App component rendered');
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
