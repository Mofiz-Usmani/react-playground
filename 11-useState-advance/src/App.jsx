import React, { useState } from 'react'

const App = () => {


  // Part 1
  // const [num, setNum] = useState(10)

  // const btnClicked = () => {
  //   console.log(num)
  //   setNum(20)
  //   console.log(num)
  // }


  // Part 2
  const [num, setNum] = useState({user:'Alex', age:20})

  const btnClicked = () => {
    const newNum = {...num};
    newNum.user = 'Jackal'
    newNum.age = 39
    setNum(newNum)
  }


  // Part 3
  // const [num, setNum] = useState(10)

  // React batches state updates
  // const btnClicked = () => {
    // These 3 only updates 1 each time even though written 3 times uses stale state
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)

    // While this updates by 3 each time ensures each update uses the latest state.
  //   setNum(prev => (prev + 1))
  //   setNum(prev => (prev + 1))
  //   setNum(prev => (prev + 1))
  // }
  

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      {/* <h1>{num}</h1> */}
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
