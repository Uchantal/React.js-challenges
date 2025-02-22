import React from 'react'

const Main = (Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{Props.age}</p>
    </div>
  )
}

export default Main