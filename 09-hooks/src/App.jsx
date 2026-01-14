import React from 'react'
import { useState, useEffect, createContext, useContext, useRef } from "react";



// useState
function LoginForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("Invalid email");
    } else {
      setError("");
      console.log("Email submitted:", email);
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
    </>
  );
}



// useEffect
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}




// useRef
function Timer() {
  const intervalRef = useRef(null);
  const [time, setTime] = useState(0);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <>
      <p>Time: {time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}


// useContext
const AuthContext = createContext();

function Dashboard() {
  const user = useContext(AuthContext);

  return <h2>Welcome, {user.name}</h2>;
}


const App = () => {
  // return (
  //   <div>
  //     <LoginForm />   {/* useState */}
  //     <Users />       {/* useEffect */}
  //     <Timer />       {/* useRef */}
  //   </div>
  // )



  // useContext
  const user = { name: "Jackal", role: "admin" };

  return (
    <AuthContext.Provider value={user}>
      <Dashboard />
    </AuthContext.Provider>
  );
}

export default App