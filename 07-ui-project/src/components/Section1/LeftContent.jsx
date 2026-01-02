import React from 'react'
import {MoveUpRight} from 'lucide-react'


const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <div className='p-4'>
            <h3 className='text-6xl font-bold mb-6'>Prospective <br></br> <span>customer</span> <br></br> segmentation</h3>
            <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam voluptate aliquid odio fugit iste. Ab omnis consequuntur, enim temporibus suscipit tempora, ratione cum, alias accusamus voluptates perspiciatis corporis fuga!</p>
        </div>
        <div><MoveUpRight size={70}/></div>
    </div>
  )
}

export default LeftContent
