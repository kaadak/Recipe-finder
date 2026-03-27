import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RecipePage from './pages/RecipePage'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-br from bg-orange-50 via-white to-teal-50'>

    
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/recipes' element={<RecipePage/>}/>
          </Routes>
        <main>


        </main>

     
    </div>
  
    </Router>
  )
}

export default App
  