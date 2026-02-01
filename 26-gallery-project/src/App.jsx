import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const resp = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30",
    );

    setUserData(resp.data);
  };

  useEffect(() => {
    getData();
  }, []);

  let printUserData = (
    <h2 className="text-gray-500 text-2xl mt-10">No Data Available</h2>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (el, idx) {
      return (
        <div key={idx} className="p-2">
          <a href={el.url} target="_blank">
            <div className="h-50 w-full overflow-hidden bg-white rounded-xl">
              <img
                className="h-full object-cover w-68"
                src={el.download_url}
                alt=""
              ></img>
            </div>
          </a>

          <h2 className="font-bold text-med">{el.author}</h2>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen text-white">
      {/* <button
        onClick={getData}
        className="bg-green-400 active:scale-95 mb-3 px-5 py-2 text-white rounded"
      >
        Get Data
      </button> */}

      <div className="flex flex-wrap gap-4">{printUserData}</div>

      <div>
        <button className="bg-amber-400 text-black rounded px-4 py-2 font-semibold">
          Prev
        </button>

        <button className="bg-amber-400 text-black rounded px-4 py-2 font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
