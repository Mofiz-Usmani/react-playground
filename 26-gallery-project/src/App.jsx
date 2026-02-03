import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const resp = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=4`,
    );

    setUserData(resp.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  const isFirstPage = index === 1;

  let printUserData = (
    <h2 className="text-gray-300 font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h2>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (el, idx) {
      return (
        <div key={idx}>
          <Card elem={el} />
        </div>
      );
    });
  }

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-zinc-950 via-neutral-950 to-black">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">Gallery</h1>
            <p className="text-sm text-gray-400">Fresh images from Picsum</p>
          </div>
          <div className="text-sm text-gray-300 rounded-full border border-white/10 px-3 py-1">
            Page {index}
          </div>
        </div>
      </header>
      {/* <button
        onClick={getData}
        className="bg-green-400 active:scale-95 mb-3 px-5 py-2 text-white rounded"
      >
        Get Data
      </button> */}

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="relative min-h-[60vh] flex flex-wrap gap-4">
          {printUserData}
        </div>
      </div>

      <div className="pb-8">
        <div className="mx-auto max-w-6xl px-4 flex justify-center gap-6 items-center">
          <button
            className={`text-sm rounded-full px-4 py-2 font-semibold transition 
            ${isFirstPage ? "bg-neutral-700 text-gray-300 cursor-not-allowed" : "bg-amber-400 text-black hover:brightness-110 active:scale-95"}`}
            disabled={isFirstPage}
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setUserData([]);
              }
            }}
          >
            Prev
          </button>
          <h2 className="text-sm text-gray-300">Page {index}</h2>
          <button
            className="bg-amber-400 text-sm cursor-pointer text-black rounded-full px-4 py-2 font-semibold hover:brightness-110 active:scale-95 transition"
            onClick={() => {
              setUserData([]);
              setIndex(index + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
