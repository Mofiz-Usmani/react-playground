import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-2/3 flex overflow-x-auto flex-nowrap gap-5'>
      {props.users.map(function(el,idx) {

        return <RightCard key={idx} id={idx} color={el.color} img={el.img} tag={el.tag}/>
      })}
    </div>
  )
}

export default RightContent
