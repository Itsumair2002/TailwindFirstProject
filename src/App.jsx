import './App.css'
import LandingPage from './Pages/LandingPage'
import OtpPage from './Pages/OTPPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NoPage from './Pages/NoPage'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='bg-blue-600 h-screen flex justify-center items-center'>
          <Routes>
            <Route path='/LandingPage' element={<LandingPage />} />
            <Route path='/otpPage' element={<OtpPage />} />
            <Route path='/Home' element={<HomePage />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
"Umair is greatest"