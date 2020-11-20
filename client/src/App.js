import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

import Header from './components/layout/Header.js'
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'
import Articles from './components/Articles.js'
import AddArticle from './components/AddArticle.js'
import EditArticle from './components/EditArticle.js'
import ArticlePage from './components/ArticlePage'



function App() {
  
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    axios
      .get('/articles')
      .then(res => setPosts(res.data))
      .catch(error => console.log(error))
  })

  return (
      <div className="App">
        <Header />
        <Navbar />
        <Route exact path="/" render={() => <Articles posts={posts} /> } />
        <Route path="/article/:id" render={(props) => <ArticlePage {...props} posts={posts} /> } />
        <Route path="/update/:id" render={(props) => <EditArticle {...props} posts={posts} /> } />
        <Route path="/add-article" component={AddArticle}/>
        <Footer />
      </div>
  );
}

export default App;
