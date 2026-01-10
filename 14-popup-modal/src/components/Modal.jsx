import React from 'react'
import { X } from 'lucide-react'


const Modal = ({onClose}) => {
  return (
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='flex flex-col'>
            <button onClick={onClose} className='place-self-end'><X size={30}/></button>


            <div className='flex  h-160 w-260 bg-gray-200 rounded-2xl'>
        <div className='h-40 w-40 mt-50 ml-20 font-bold text-5xl'>
          <h1>Hello,<br></br>Welcome!</h1>
        </div>

        <div className='h-135 w-180 bg-white mt-10 mr-17 ml-90 p-7 rounded-[10px] inset-shadow-sm inset-shadow-gray-500'>
          <div className='flex flex-col justify-center'>
            <h1 className='mb-6'>Sign Up</h1>
            <form className='flex flex-col gap-0.5 mb-5'>
              <label>Email</label>
              <input type='email' placeholder='Enter Email' className='border border-gray-400 rounded-[5px] p-1 mb-4'></input>
              <label>Password</label>
              <input type='password' placeholder='Enter Your Password' className='border border-gray-400 rounded-[5px] p-1 mb-4'></input>
              <label>Repeat Password</label>
              <input type='password' placeholder='Re-Enter Your Password' className='border border-gray-400 rounded-[5px] p-1 mb-4'></input>
            </form>



            <button className='border border-gray-400 p-1 rounded-[5px] mb-5 bg-black text-white'>Sign Up</button>




            <div className='mb-4 text-center'>
              <p>Or with</p>
            </div>


            <div className='flex flex-row justify-center gap-2 border border-gray-400 p-1.5 rounded-[5px] mb-7'>
              {/* <RiGoogleFill /> */}
              <a>Sign Up with Google</a>
            </div>



            <p className='text-center'>Already have an account?<a className='text-blue-600'>Sign in</a></p>

          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Modal
