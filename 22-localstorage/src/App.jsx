import React from "react";

const App = () => {
  // To clear Local storage
  localStorage.clear();

  // To save data (once stored it remains on the browser-
  // storage until manually cleared using .clear() )
  localStorage.setItem("user", "Alex");
  localStorage.setItem("name", "Jack");

  // To get the data
  const user = localStorage.getItem("user");
  console.log(user);

  // To remove indivisual items
  localStorage.removeItem("user");

  const info = {
    username: "John",
    age: 19,
    city: "Auckland",
  };

  // this not works as it is needed the value should be in string form so that it will store-
  // other wise it only shows object so we need to covert this info object into string using
  // JSON.stringify
  localStorage.setItem("info", JSON.stringify(info));

  // Now to access these variables
  const getInfo = localStorage.getItem("info");
  console.log(typeof getInfo);

  // To get back to orignal form (object form)
  const orgInfo = JSON.parse(localStorage.getItem("info"));
  console.log(orgInfo);

  return <div>App</div>;
};

export default App;
