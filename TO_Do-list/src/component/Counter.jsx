import React from 'react'
import { useState } from 'react'

const Counter = () => {
      const [count, setCount] = useState(0)
      const Add=()=>{
        setCount(count +1);
        
      }
      const Sub=()=>{
        setCount(count -1);
      }
      const Restart=()=>{
        setCount(0);
      }
  return (
    <>
     <h1> {count}</h1>
     <button onClick={Add}>+</button>
     <button onClick={Sub}>-</button>
     <button onClick={Restart}>=</button>
     
  
    </>
  )
}

export default Counter