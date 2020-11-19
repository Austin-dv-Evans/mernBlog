import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/layout/Header.js'
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'


function App() {
  return (
      <div className="App">
        <Header />
        <Navbar />
        <Footer />
      </div>
  );
}

export default App;
