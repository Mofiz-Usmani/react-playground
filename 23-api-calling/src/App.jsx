import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  //! Method 1:
  // async function getData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  //   const data = await response.json();

  //   console.log(data);
  // }

  //! Method 2:
  // const getData = async () => {
  // const { data } = await axios.get(
  //   "https://jsonplaceholder.typicode.com/todos",
  // );

  // for (let i = 0; i < 201; i++) {
  //   if (i < 200) {
  //     console.log(data[i].userId, data[i].id, data[i].title);
  //   } else {
  //     console.log("Done with the data");
  //   }
  // }
  // };

  //! Method 3:
  // const getData = async () => {
  //   const response = await axios.get("https://picsum.photos/v2/list");

  //   setData(response.data);
  // };

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map(function (el, idx) {
          return (
            <h3>
              hello {el.author} {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
