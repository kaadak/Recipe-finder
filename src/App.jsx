import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-br from bg-orange-50 via-white to-teal-50'>

    
        <Header/>

     
    </div>
  
    </Router>
  )
}

export default App
  