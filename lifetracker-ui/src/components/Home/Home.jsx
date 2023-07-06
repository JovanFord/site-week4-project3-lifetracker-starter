import React from 'react'
import './Home.css'
import ActivityPage from '../ActivityPage/ActivityPage'
import ExercisePage from '../ExercisePage/ExercisePage'
import NutritionPage from '../NutritionPage/NutritionPage'
import SleepPage from '../SleepPage/SleepPage'
import { Link } from 'react-router-dom'
import exercise from '../../assets/athlete.jpg' 
import activity from '../../assets/calendar.jpg' 
import nutrition from '../../assets/food.jpg' 
import sleep from '../../assets/alarm.jpg' 

const Home = () => {
  return (
    <div>
      <div className='title'>
        <h1> Life Tracker </h1> <br/>
        <p> Taking control over your life </p>
      </div>
      
      <div className='cards'>
        <Link to="/Exercise" >
          <span className="exercise-btn">
            Exercise
            <img src={exercise}/>
          </span>
        </Link>

        <Link to="/Activity" >
          <span className="activity-btn">
            Activity
            <img src={activity}/>
          </span>
        </Link>

        <Link to="/Nutrition" >
          <span className="nutrition-btn">
            Nutrition
            <img src={nutrition}/>
          </span>
        </Link>

        <Link to="/Sleep" >
          <span className="sleep-btn">
            Sleep
            <img src={sleep}/>
          </span>
        </Link>

        
      </div>
    </div>
  )
}

export default Home