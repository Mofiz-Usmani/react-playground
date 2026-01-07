import React, { useState } from 'react'

export default function CounterwithLimit() {

    const [count, setCount] = useState(0)


    function increaseCount() {
        if(count < 10 ) {
            setCount(count+1)
        } else {
            console.log("Limit reached cannot go beyound 10")
        }
        
    }

    function decreaseCount() {
        if(count>0) {
            setCount(count-1)
        }else {
            console.log("Limit reached cannot go less than 0")
        }
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>Imcrease</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
