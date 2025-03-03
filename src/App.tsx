import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Navbar from './components/Navbar'
import { TimerContextProvider } from './utils/TimerContext'
import NotFound from './pages/NotFound'
import { useState } from "react";
import FriendSideBar from './components/FriendsSideBar'


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <TimerContextProvider>
      <Router>
      <div>
        <div className={`transform transition-transform duration-300 ${isSidebarOpen ? '-translate-x-[545px]' : 'translate-x-0'}`}>
          <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
        </div>
        <div className={`transform transition-transform duration-300 ${isSidebarOpen ? '-translate-x-[347px]' : 'translate-x-0'}`}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <FriendSideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
      </Router>
    </TimerContextProvider>
  )
}

export default App



