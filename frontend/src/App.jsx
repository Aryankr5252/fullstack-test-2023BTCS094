import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
