import React from 'react'
import RightCardContent from './RightCardContent'

export default function RightCard(props) {
  return (
    <>
    <div className='h-full w-70 shrink-0 overflow-hidden rounded-4xl relative'>
        <img className='h-full w-full object-cover rounded-4xl' src={props.img}></img>

        <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
    </div>
    </>
  )
}
