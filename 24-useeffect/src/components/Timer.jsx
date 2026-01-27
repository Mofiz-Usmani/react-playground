import { useState, useEffect } from "react";

// Without useEffect
// function Timer() {
//   const [count, setCount] = useState(0);

//   setInterval(() => {
//     setCount(count + 1);
//   }, 1000);

//   return <h1>{count}</h1>;
// }

// With useEffect
function Timer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
    // [running] is called the dependency array
    // Simply means : Only run this effect when the value of running changes
  }, [running]);

  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  return (
    <div>
      <button onClick={start}>Start</button>
      <h1>{count}</h1>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default Timer;
