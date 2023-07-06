import React from 'react'
import "./NutritionPage.css"

const NutritionPage = ({signedIn, setSignedIn}) => {
  return (
    <div>
      { signedIn ?
      <div>Content</div> : 
      
      <div>Please Sign in to see content</div>
      }
    </div>
  )
}

export default NutritionPage