import React from 'react'
import "./ActivityPage.css"

const Activity = ({signedIn, setSignedIn}) => {
  return (
    <div>
      { signedIn ?
      <div>
        Welcome
      </div> : 
      
      <div>Please Sign in to see content</div>
      }
    </div>
  )
}

export default Activity