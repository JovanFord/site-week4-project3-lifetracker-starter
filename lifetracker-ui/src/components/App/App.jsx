import './App.css'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import apiClient from '../../services/apiClient'
import jwtDecode from "jwt-decode"
import Cookies from "js-cookie"
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
  const [nutritionData, setNutritionData] = useState([])


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

  useEffect(() => {
    const setSignedIn = () => {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken.userName); //get username
        if (decodedToken.exp * 1000 > Date.now()) {
          setSignedIn(true);
        } else {
          // Token has expired, log out the user
          handleLogout();
        }
      }
    };

    setSignedIn();
  })
  
  return (
    <div>
      
      <BrowserRouter>
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/activity' element={<ActivityPage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
          <Route path='/exercise' element={<ExercisePage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
        <Route path='/nutrition' element={<NutritionPage signedIn={signedIn} setSignedIn={setSignedIn} nutritionData={nutritionData} setNutritionData={setNutritionData}/>} />
          <Route path='/sleep' element={<SleepPage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
          <Route path='/login' element={<LoginPage signedIn={signedIn} setSignedIn={setSignedIn}/>} />
          <Route path='/signup' element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
