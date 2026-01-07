import React from 'react'
import { useState, useEffect, createContext, useContext, useRef } from "react";



// useState
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}



// useEffect
function Page() {
  useEffect(() => {
    console.log("Component loaded");
  }, []);

  return <h1>Hello</h1>;
}


// useContext
const ThemeContext = createContext("dark");

function Box() {
  const theme = useContext(ThemeContext);
  return <p>{theme}</p>;
}



// useRef
function Input() {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </>
  );
}




const App = () => {
  return (
    <div>
      <Counter />
      <Page />
      <Box />
      <Input />
    </div>
  )
}

export default App
