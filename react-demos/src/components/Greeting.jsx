import React from 'react'

const Greeting = () => {
    const Greet ='Welcome to my stock';
    const date = new Date();
  return (
    <div>
        <h1>{Greet}</h1>
    <p>Date: {date.getDate()}</p>
   
    
    </div>
  )
}

export default Greeting