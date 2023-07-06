import './App.css'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import ExercisePage from '../ExercisePage/ExercisePage'
import ActivityPage from '../ActivityPage/ActivityPage'
import NutritionPage from '../NutritionPage/NutritionPage'
import SleepPage from '../SleepPage/SleepPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'

function App() { 
  const [signedIn, setSignedIn] = useState(false)

  const logout = () => {
    setSignedIn(true)
  }
  return (
    <div>
      
      <BrowserRouter>
        <Navbar signedIn={signedIn} logout={logout}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/exercise' element={<ExercisePage/>} />
          <Route path='/activity' element={<ActivityPage/>} />
          <Route path='/nutrition' element={<NutritionPage/>} />
          <Route path='/sleep' element={<SleepPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
