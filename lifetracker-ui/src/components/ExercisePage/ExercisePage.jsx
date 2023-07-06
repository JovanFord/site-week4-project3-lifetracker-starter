import React from 'react'
import "./ExercisePage.css"

const ExercisePage = ({signedIn, setSignedIn}) => {
  return (
    <div>
      { signedIn ?
      <div>Content</div> : 
      
      <div>Please Sign in to see content</div>
      }
    </div>
  )
}

export default ExercisePage