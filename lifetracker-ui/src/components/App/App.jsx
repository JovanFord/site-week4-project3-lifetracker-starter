import './App.css'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import apiClient from '../../services/apiClient'
import ExercisePage from '../ExercisePage/ExercisePage'
import ActivityPage from '../ActivityPage/ActivityPage'
import NutritionPage from '../NutritionPage/NutritionPage'
import SleepPage from '../SleepPage/SleepPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'

function App() { 
  const [signedIn, setSignedIn] = useState(false)
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)


  useEffect( () => {
    const fetchUser = async () => {
      const {data, err} = await apiClient.fetchUserFromToken()
      if(data) setUser(data.user)
      if(error) setError(error)
    }

    const token = localStorage.getItem("lifetracker_token")
    if(token){
      apiClient.setToken(token)
      fetchUser()
    }
    
  })

  const handleLogout = async() =>{
    await apiClient.logout()
    setSignedIn(false)
    setUser({})
    setError(null)
    window.location.href = "/"
  }

  
  return (
    <div>
      
      <BrowserRouter>
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn} handleLogout={handleLogout}/>
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
