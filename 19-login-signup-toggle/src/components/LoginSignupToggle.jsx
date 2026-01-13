import React, { useState } from 'react'

const LoginSignupToggle = () => {

    const [currForm, setForm] = useState(false)
    console.log(currForm)

  return (
    <div className='toggle'>
      <button className={currForm == false ? 'active' : ''} onClick={() => setForm(false)}>With Mobile</button>
      <button className={currForm == true ? 'active' : ''} onClick={() => setForm(true)}>With E-mail</button>

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
