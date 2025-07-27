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

       <h1 className='text-3xl font-bold underline text-center mt-5 bg-blue-500 text-white'>
      Hello world!
    </h1>
    </>
  )
}

export default Counter