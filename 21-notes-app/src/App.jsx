import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
  }

  return (
    <div className='h-screen lg:flex bg-white text-black'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex p-10 items-start flex-col gap-4 lg:w-1/2'>

        <input className='px-5 py-2 border-2 rounded w-full' type='text' placeholder='Enter Notes Heading' />
        <textarea className='px-5 py-2 border-2 h-20 rounded w-full' placeholder='Enter Details' name='' id='' />
        <button className='bg-black text-white hover:bg-white hover:text-black border hover:border-black px-5 py-2 rounded w-full'>Add Note</button>

      </form>


      {/* Data Div */}
      <div className='flex flex-wrap p-10 bg-amber-700 lg:w-1/2'>
        <h1>Your Notes</h1>

        <div className='h-32 w-32 rounded-2xl bg-gray-400'>
        </div>
      </div>
    </div>
  )
}

export default App
