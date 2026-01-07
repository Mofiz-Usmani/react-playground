import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full font-semibold h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>

            <div>
                {/* <p className='text-lg text-white mb-8 mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit Libero corrupti dicta minima quas doloremque</p> */}
    
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-black font-medium px-8 py-2 
                    rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='text-black font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div> 
        </div>
  )
}

export default RightCardContent
