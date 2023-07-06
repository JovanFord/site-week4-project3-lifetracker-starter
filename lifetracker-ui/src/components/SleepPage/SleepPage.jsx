import React from 'react'
import "./SleepPage.css"

const SleepPage = ({signedIn, setSignedIn}) => {
  return (
    <div>
      { signedIn ?
      <div>Content</div> : 
      
      <div>Please Sign in to see content</div>
      }
    </div>
  )
}

export default SleepPage