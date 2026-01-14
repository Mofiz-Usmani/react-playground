import React from 'react'
import illust from '../assets/illust.png'
import { useState } from 'react'

const DarkLightToggle = () => {
  const [currMode, setMode] = useState(false)

  return (
    <div className="relative">
      <div className="toggle mt-4">
        <button
          className={`px-4 py-2 rounded ${
            currMode === true ? 'bg-yellow-400' : 'bg-gray-200'
          }`}
          onClick={() => setMode(true)}
        >
          Light
        </button>

        <button
          className={`px-4 py-2 rounded ${
            currMode === false ? 'bg-black text-white' : 'bg-gray-200'
          }`}
          onClick={() => setMode(false)}
        >
          Dark
        </button>

        {currMode == true ? (
          <div className="flex mt-20 w-250">
            <div className="h-139 w-250 border border-black rounded-xl flex gap-20">
              <div className="mt-10">
                <img className="h-120" src={illust} />
              </div>

              <div className="mt-10 h-123 bg-gray-100 rounded-lg p-5 shadow-xl/20">
                <h1 className="text-[30px] mb-5">Please Login</h1>

                <div className="h-80 w-89">
                  <form className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                      className="p-0.5 border border-gray-400 rounded-md mb-4 bg-white"
                      type="email"
                      placeholder="enter email"
                    />

                    <label>Password</label>
                    <input
                      className="p-0.5 border border-gray-400 rounded-md mb-3 bg-white"
                      type="password"
                      placeholder="enter password"
                    />

                    <p className="text-[#FF725E]">Forgot password?</p>

                    <div className="mt-5 flex justify-end mb-20">
                      <button className="h-9 w-20 rounded-full bg-[#FF725E] text-white">
                        Login
                      </button>
                    </div>

                    <p>
                      Don't have an account? Click here to{' '}
                      <span className="text-[#FF725E] underline">
                        Register now
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mt-20 w-250">
            <div className="h-139 w-250 border border-gray-700 rounded-xl flex gap-20 bg-[#0f0f0f]">
              <div className="mt-10">
                <img className="h-120" src={illust} />
              </div>

              <div className="mt-10 h-123 bg-[#1a1a1a] rounded-lg p-5 shadow-xl/20">
                <h1 className="text-[30px] mb-5 text-white">
                  Please Login
                </h1>

                <div className="h-80 w-89">
                  <form className="flex flex-col gap-2 text-gray-300">
                    <label>Email</label>
                    <input
                      className="p-0.5 border border-gray-600 rounded-md mb-4 bg-[#0f0f0f] text-white placeholder-gray-500"
                      type="email"
                      placeholder="enter email"
                    />

                    <label>Password</label>
                    <input
                      className="p-0.5 border border-gray-600 rounded-md mb-3 bg-[#0f0f0f] text-white placeholder-gray-500"
                      type="password"
                      placeholder="enter password"
                    />

                    <p className="text-[#FF725E]">Forgot password?</p>

                    <div className="mt-5 flex justify-end mb-20">
                      <button className="h-9 w-20 rounded-full bg-[#FF725E] text-white">
                        Login
                      </button>
                    </div>

                    <p>
                      Don't have an account? Click here to{' '}
                      <span className="text-[#FF725E] underline">
                        Register now
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DarkLightToggle
