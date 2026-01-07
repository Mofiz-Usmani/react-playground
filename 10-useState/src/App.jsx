import React, { useState } from 'react'
import CounterwithLimit from './components/CounterwithLimit'
import ToggleTheme from './components/ToggleTheme'
import LikeButton from './components/LikeButton'

export default function App() {


  // const [a, setA] = useState(20)

  // let a = 20;

  // function changeA() {
  //   console.log(a)
  //   a = 30
  //   console.log(a)
  // }

  // const [num, setNum] = useState(20)

  // function changeNum() {
  //   setNum(30)
  // }


  // const [num, setNum] = useState(10)
  // const [username, setUsername] = useState('Alex')
  // const [count, setCount] = useState(0)

  // function changeValues() {
  //   setNum(40)
  //   setUsername('Jackal')
  // }


  // let counter = 0
  // function increaseCounter() {
  //   setCount()
  // }


  const [num, setNum] = useState(0)


  function increaseNum() {
    setNum(num+1)
  }


  function decreaseNum() {
    setNum(num-1)
  }

  function jumpby5() {
    setNum(num+5)
  }

  return (
    // <div>
    //   <h2>Value of a is {a}</h2>
    //   <button onClick={changeA}>Click</button>
    // </div>

    // <div>
    //   <h1>Value of a is {a}</h1> 
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
      {/* <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpby5}>Jump by 5</button> */}
      {/* <CounterwithLimit /> */}
      {/* <ToggleTheme /> */}
      <LikeButton />
    </div>
  )
}
