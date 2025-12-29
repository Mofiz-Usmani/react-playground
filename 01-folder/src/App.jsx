import React from 'react'

// This is a React Functional Component named "App"
const App = () => {

  // In React, a component can return ONLY ONE parent element.
  // So we wrap everything inside one <div> (or <></> called fragment)
  return (
    <>
     <div id='parent'> {/* Parent Wrapper */}
        <h1 id='child1'>Hello</h1>
        <h3 id='child2'>World</h3>
      </div>
      <div id='uncle'>
      
      </div>
    </>
  )
}

// Exporting App so it can be used in index.js or other files
export default App

