import React from 'react'

const Greet = () => {

    const hisName="John"
    const newDate= "17.Feb.2025"

  return (
    <div>
        <h1>Hello World!</h1>
        <p>Today's date is 17.Feb. 2025</p>
        <p>name is {hisName}</p>
        <p>New Date {newDate}</p>
      
    </div>
  )
}

export default Greet