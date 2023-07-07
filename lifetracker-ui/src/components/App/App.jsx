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

  
  return (
    <div>
      
      <BrowserRouter>
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/activity' element={<ActivityPage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
          <Route path='/exercise' element={<ExercisePage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
          <Route path='/nutrition' element={<NutritionPage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
          <Route path='/sleep' element={<SleepPage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
          <Route path='/login' element={<LoginPage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
          <Route path='/signup' element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
