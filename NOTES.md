02 - Components : 


🧠 What is a Component in React?

A component is like a small reusable piece of your website.

Think of a website as a Lego house 🧱
Each Lego block = a component

Example components:

Navbar
Footer
Button
Card
Sidebar
Profile box

Each component has its own code, design, and logic.


function Button() {
  return <button>Click Me</button>
}



❓ Why Component-Based is Used in React?

Because building a big website in one giant file is hard, messy, and unmanageable.


Example:
Imagine writing all HTML of Amazon inside 1 file 😱
Navbar, search bar, cart, product cards — everything in a single page → very confusing

Instead, React breaks UI into small pieces (components) and you combine them to build full pages.



🎯 Benefits of Component-Based Architecture
Benefit	Meaning
♻ Reusability	Write once → use many times
🧹 Clean & Organized Code	Each part is separate, easy to manage
🛠 Easy to Fix & Update	Fix 1 component → automatically updates everywhere
🚀 Faster Development	Teams can build different components at same time
🔁 Dynamic UI	Components can receive data (props) and change automatically
👇 Example – Without Components (Bad)


function App() {
  return (
    <div>
      <header>Navbar</header>
      <button>Click</button>
      <button>Click</button>
      <button>Click</button>
      <footer>Footer</footer>
    </div>
  )
}


Hard to maintain, buttons repeated manually.

✔ With Components (Good)
function Button() {
  return <button>Click</button>
}


function Navbar() {
  return <header>Navbar</header>
}


function Footer() {
  return <footer>Footer</footer>
}


function App() {
  return (
    <>
      <Navbar />
      <Button />
      <Button />
      <Button />
      <Footer />
    </>
  )
}


➡️ Now Button is reusable
➡️ Code is neat and readable
➡️ If button design changes → change once only

🧾 Simple Definition

Component = Small reusable building block of UI
React is component-based because it allows us to break a big app into small, reusable pieces, making development faster, cleaner, and easier.







03 - Props : 

Props in React (short for properties) are how data is passed from a parent component to a child component.

Think of props like arguments to a function.
In simple words
Props = inputs to a component
They are read-only (child cannot change them)
Used to customize and reuse components

Basic example

Parent component

function App() {
  return <Welcome name="Jackal" age={22} />;
}


Child component

function Welcome(props) {
  return <h1>Hello {props.name}, Age: {props.age}</h1>;
}


Output:

Hello Jackal, Age: 22



Using destructuring (best practice)

Cleaner and more common:

function Welcome({ name, age }) {
  return <h1>Hello {name}, Age: {age}</h1>;
}

Key points (exam + interview ready)

Props are used to pass data from parent to child

Props are immutable (cannot be modified by child)

Props make components reusable

Props can pass:

Strings

Numbers

Arrays

Objects

Functions

Even other components

Passing a function as prop

Very common in real apps:


function Parent() {
  const greet = () => alert("Hello!");

  return <Child onGreet={greet} />;
}


function Child({ onGreet }) {
  return <button onClick={onGreet}>Click</button>;
}



Props vs State (don’t confuse)
Props	State
Passed from parent	Managed inside component
Read-only	Can be changed
Used for configuration	Used for dynamic data