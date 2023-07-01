import './App.css'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExercisePage from '../ExercisePage/ExercisePage'
import ActivityPage from '../ActivityPage/ActivityPage'
import NutritionPage from '../NutritionPage/NutritionPage'
import SleepPage from '../SleepPage/SleepPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'

function App() { 

  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Exercise' element={<ExercisePage/>} />
          <Route path='/Activity' element={<ActivityPage/>} />
          <Route path='/Nutrition' element={<NutritionPage/>} />
          <Route path='/Sleep' element={<SleepPage/>} />
          <Route path='/Login' element={<LoginPage/>} />
          <Route path='/Signup' element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
