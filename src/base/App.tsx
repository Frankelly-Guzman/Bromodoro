import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Navbar from '../components/bromo/Navbar'
import { TimerContextProvider } from '../components/bromo/TimerContext'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <TimerContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TimerContextProvider>
  )
}

export default App
