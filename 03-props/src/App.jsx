import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card
        name="Mike Ross"
        image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description="Lawyer at Pearson Hardman"
      />

      <Card
        name="Harvey Specter"
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        description="Best closer in New York"
      />
    </div>
  )
}

export default App
