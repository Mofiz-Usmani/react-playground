import React, { useState } from 'react'

const LoginSignupToggle = () => {

    const [currForm, setForm] = useState(false)
    // console.log(currForm)

  return (
    <div className='h-17 w-58 bg-gray-300 rounded-full mt-80 ml-160 p-2'>
      <button className={`mr-2 p-1 ${currForm == false ? 'bg-amber-500 h-13 w-26 rounded-full text-white' : ''}`} onClick={() => setForm(false)}>With Mobile</button>
      <button className={`ml-2 p-1 mb-10 ${currForm == true ? 'bg-amber-500 h-13 w-26 rounded-full text-white' : ''}`} onClick={() => setForm(true)}>With E-mail</button>


      {/* This is conditional rendering that shows different UI based on state using a ternary operator. */}
      {
        currForm == false ? 
        (
            <h1>Mobile</h1>
        ) : (
            <h1>Email</h1>
        )
      } 

    </div>
  )
}

export default LoginSignupToggle
