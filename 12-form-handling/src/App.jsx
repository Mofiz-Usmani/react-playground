import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted");
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter your name'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
