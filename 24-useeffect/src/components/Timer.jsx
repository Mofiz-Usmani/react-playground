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
    <div className="mt-20 ml-170">
      <button
        onClick={start}
        className="h-10 w-27 border-3 border-amber-400 rounded-2xl"
      >
        Start
      </button>

      <h1 className="h-12 w-12 flex justify-center items-center ml-7 mt-3 mb-3 border-3 border-fuchsia-600 rounded-full">
        {count}
      </h1>

      <button
        onClick={stop}
        className="h-10 w-27 border-3 border-amber-400 rounded-2xl"
      >
        Stop
      </button>
    </div>
  );
}

export default Timer;
