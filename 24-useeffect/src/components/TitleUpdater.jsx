import { useState, useEffect } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-6">{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        className="px-8 py-3 text-xl font-semibold rounded-xl 
                   bg-indigo-600 text-white 
                   hover:bg-indigo-700 
                   active:scale-95"
      >
        +
      </button>
    </div>
  );
}

export default TitleUpdater;
