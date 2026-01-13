import React from 'react'

// Using Destructring to access values directly 
// const Card = (props) => {
//   return (
//     <div className="card">
//       <img src={props.image} alt={props.name} />
//       <h1>Hello {props.name}</h1>
//       <p>{props.description}</p>
//       <button>View Profile</button>
//     </div>
//   )
// }


// Using props object directly
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h1>Hello {props.name}</h1>
      <p>{props.description}</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
