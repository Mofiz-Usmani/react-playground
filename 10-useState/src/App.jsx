import React, { useState } from 'react'
import CounterwithLimit from './components/CounterwithLimit'
import ToggleTheme from './components/ToggleTheme'
import LikeButton from './components/LikeButton'

export default function App() {



  let a = 20;
   
  //! Normal Variable
  // function changeA() {
  //   console.log(a)
  //   a = 30
  //   console.log(a)
  // }



  // const [num, setNum] = useState(20)

  // function changeNum() {
  //   setNum(30)
  // }



  //! 1️⃣ useState – basic number state
  // num → holds the current number value
  // setNum → function used to update the value of num
  // const [num, setNum] = useState(20)

  // function changeNum() {
  //   setNum(30) // updates num to 30 and triggers re-render
  // }


  //! 2️⃣ useState – multiple states (number + string + counter)
  // num → stores a numeric value
  // username → stores a string value (user name)
  // count → stores a counter value
  // const [num, setNum] = useState(10)
  // const [username, setUsername] = useState('Alex')
  // const [count, setCount] = useState(0)

  // function changeValues() {
  //   setNum(40)           // updates number state
  //   setUsername('Jackal') // updates username state
  // }


  //! 3️⃣ useState – counter example (active code)
  // num → stores the current counter value
  // setNum → updates the counter value and re-renders UI
  const [num, setNum] = useState(0)

  // increases num by 1
  function increaseNum() {
    setNum(num + 1)
  }

  // decreases num by 1
  function decreaseNum() {
    setNum(num - 1)
  }

  // increases num by 5
  function jumpby5() {
    setNum(num + 5)
  }

  return (

    // <div>
    //   <h2>Value of a is {a}</h2>
    //   <button onClick={changeA}>Click</button>
    // </div>


    // <div>
    //   <h1>Value of num is {num}</h1>
    //   <button onClick={changeNum}>Click</button>
    // </div>

    // <div>
    //   <h1>Value of num is {num}</h1>
    //   <button onClick={changeNum}>Click</button>
    // </div>


    // <div>
    //   <h1>Value of num is {num} and value of user is {username}</h1>
    //   <button onClick={changeValues}>Click</button>
    // </div>


    <div>
      {/* <h1>{num}</h1> */}

      {/* Button updates state using setNum */}
      {/* <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpby5}>Jump by 5</button> */}

      {/* Other components using useState internally */}
      {/* <CounterwithLimit /> */}
      {/* <ToggleTheme /> */}
      <LikeButton />
    </div>
  )
}
