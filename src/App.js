import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import Content from './Content'


function App() {
  return (
    <div className='App'>
      <h1>CRUD OPERATION</h1>
      <Router>
        <nav>
          <Link to='/'> Home </Link>
          <Link to='/content'> Content </Link>&nbsp;
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

