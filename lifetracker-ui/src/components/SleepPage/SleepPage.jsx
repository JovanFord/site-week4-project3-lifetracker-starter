import React from 'react'
import "./SleepPage.css"

const SleepPage = ({signedIn, setSignedIn}) => {
  return (
    <div>
      <h1 className='sleep-title'> Sleep </h1>
      { signedIn ?
      <div>Content</div> : 
      
      <div>Please Sign in to see content</div>
      }
    </div>
  )
}

export default SleepPage