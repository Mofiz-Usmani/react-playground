import React from 'react'
import {MoveUpRight} from 'lucide-react'
import Arrow from './Arrow'
import HeroText from './HeroText'


const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <HeroText />
        <i className="ri-arrow-right-up-line icon"></i>
    </div>
  )
}

export default LeftContent
