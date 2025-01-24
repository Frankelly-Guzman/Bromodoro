import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Navbar from './components/Navbar'
import { BackgroundProvider } from './utils/BackgroundContext'

const App = () => {
  return (
    <BackgroundProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
    </BackgroundProvider>
  )
}

export default App