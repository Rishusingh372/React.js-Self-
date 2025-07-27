import React from 'react'
import { useState } from 'react'

const Counter = () => {
 const [counter , setCounter]= useState(0)

  const incriment =()=>{
    setCounter(counter +1)
  }
  const decriment = () => {
    setCounter(counter - 1)
  }

  return (
      <>
      <p>
        {counter}
      </p>
      <button onClick={incriment}>Add</button>
      <button onClick={decriment}>Sub</button>
    </>
  )
}

export default Counter