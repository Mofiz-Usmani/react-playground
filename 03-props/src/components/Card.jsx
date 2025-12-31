import React from 'react'

const Card = ({ name, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h1>Hello {name}</h1>
      <p>{description}</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
