import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/layout/Header.js'
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'
import Articles from './components/Articles.js'
import axios from 'axios'




function App() {
  
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    axios
      .get('http://localhost:8080/articles')
      .then(res => setPosts(res.data))
      .catch(error => console.log(error))
  })

  return (
      <div className="App">
        <Header />
        <Navbar />
        <Route to="/" render={() => <Articles posts={posts} /> } />
        <Footer />
      </div>
  );
}

export default App;
