import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
      {/* Calling Card() like a normal JavaScript function 
          → It simply returns JSX (NOT recommended in React)
          → React will NOT treat it as a component, no lifecycle, no hooks */}
      {Card()}

      {/* Proper React Component Rendering 
          → React treats <Card /> like an element (like <div />)
          → Supports props, hooks, state, lifecycle
          → BEST way to render a component in JSX */}
      <Card />
    </>
  )
}


export default App
