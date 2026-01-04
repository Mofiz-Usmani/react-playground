import React from 'react'
import RightCardContent from './RightCardContent'

export default function RightCard() {
  return (
    <>
    <div className='h-full w-70 shrink-0 overflow-hidden rounded-4xl relative'>
        <img className='h-full w-full object-cover rounded-4xl' src='https://i.pinimg.com/1200x/f9/bb/bd/f9bbbd5bccc9ead0b054fc57d4e7339a.jpg'></img>

        <RightCardContent />
    </div>
    </>
  )
}
