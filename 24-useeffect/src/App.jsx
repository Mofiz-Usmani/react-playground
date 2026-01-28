import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import DarkMode from "./components/DarkMode";

const App = () => {
  // const [num, setNum] = useState(0);

  // useEffect(function () {
  //   console.log("use effect is running...");
  // });

  return (
    <div>
      <Timer />
      <DarkMode />
    </div>
  );
};

export default App;
