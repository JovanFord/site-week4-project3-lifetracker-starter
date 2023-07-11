import React from 'react'
import "./ActivityPage.css"
import { useState, useEffect } from 'react'
import apiClient from '../../services/apiClient'

const Activity = ({signedIn, setSignedIn}) => {
  useEffect( () => {
    const fetchUser = async () => {
      const {data, error} = await apiClient.fetchUserFromToken()
      if(data) setUser(data.user)
      if(error) setError(error)
    }

    const token = localStorage.getItem("lifetracker_token")
    if(token){
      apiClient.setToken(token)
      fetchUser()
    }
    
  })
  
  return (
    <div>
      { signedIn ?
      <div className='welcome-title'>
         <h1 className='activity-title'> Activities </h1>
      </div> : 
      
      <div>Please Sign in to see content</div>
      }
    </div>
  )
}

export default Activity