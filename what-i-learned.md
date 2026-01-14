*** 02-components ***


Now, in our main folder which is reactjs where 02-components file is made by  writing npm create vite@latest  

Now, in this folder  create a folder components in src foler and in that create a file Card.jsx and in that write a funciton Card and return h1 with class name and modify it in index.css and in App.jsx import the card.jsx then use it to show the card.

Now, create a file Navbar.jsx and in that write a function and then modify its css then import it into app.jsx 





*** 03-props ***


So, props(properties) is basically used to pass data from one component to another in react.

It is passed as an argument to a function in a component or a file and a component (another file) recieves props but does not change them.

Without props every component would be hard coded and no reusability.

But when using props we can create components dynamic and reusable with for eg an array of data passed form one file to other files to use and show dynamic content in a component.

By Design - props always flow form parent to child


# In Card.jsx, a Card function component is created that takes props as a parameter.

# The Card component defines the structure of the card UI.

# In App.jsx, data is passed to the Card component using JSX attributes. React internally converts this data into a props object and passes it from the parent component to the child component.

# Props are an object automatically created by React that contains all the data passed from the parent component to the child component.

# This allows the same Card structure to be reused with different data, improving code reusability and avoiding repetition.

# Props can be accessed in two ways: either by destructuring values directly in the function parameter or by accessing them using props.propertyName. Both approaches work the same, but destructuring makes the code cleaner.







*** 04-cards-project ***


# First, we define a constant array jobs which contains job data in the form of objects.

# To render each job, we use the map() method to iterate over the array.

# Inside map(), we render the <Card /> component and pass the job object as an attribute (prop).

# React automatically collects these attributes into a props object and passes it to the Card component.

# In Card.jsx, we receive this data using the props parameter (or destructuring) and use it inside JSX.

Once the card structure is ready, we reuse the same card layout to display multiple cards with different data using props.

We then use the map() method to loop through the jobs array.
map() is used instead of a for loop because map() returns a new array, which React can render as JSX.

el represents the current job object

idx represents the index (position) in the array

Inside map(), we pass each job’s data to the Card component using props, which work like function arguments.

The Card component receives this data as a props object and accesses values like:

props.image
props.company
props.role

The Card component does not modify the data.
It only displays what it receives, making it reusable and predictable.





*** 05-css ***


When styles are written in index.css, they are global. If multiple components use the same class name, styles can overlap and cause bugs.

# Solution: CSS Modules

CSS Modules scope styles to a single component, preventing conflicts.

# How to Use

Create a separate CSS file for each component:

Header.module.css
Button.module.css

Import the module in its component

Each component can access only its own styles


Now, 

No class name collisions
Clean and maintainable code
Component-level styling

Rule:
Header.jsx → Header.module.css




*** 06-tailwind ***


# Setting Up Tailwind CSS in React (Using Vite)

This guide explains how to install and configure Tailwind CSS in a React project created with Vite.


# Step 1: Install Tailwind CSS

Go to the official Tailwind CSS website.
Navigate to the Vite installation section.
Copy the following install command:

# npm install tailwindcss @tailwindcss/vite

Open your terminal, cd into your React project folder, paste the command, and run it.


# Step 2: Configure Vite

Open the vite.config.js file.
Import Tailwind CSS at the 3rd line:
import tailwindcss from '@tailwindcss/vite'
Add tailwindcss() inside the plugins array.
This connects Tailwind with the Vite build process.


# Step 3: Add Tailwind to CSS File

Open index.css
At the very top of the file, add:
@import "tailwindcss";
This enables Tailwind’s utility classes globally in your project.

Tailwind CSS is now fully set up





*** 07-ui-project ***


# 1. App.jsx (Entry Point)

The application starts from App.jsx.
Here:
A users array is created containing customer-related data.
The Section1 component is rendered and the users data is passed to it as props.
The Section2 component is also rendered.

# 2. Section1.jsx (Main Container)

When Section1 receives the users data:
It first renders the Navbar component.
Then it renders the Page1Content component and passes the users data to it.

# 3. Navbar.jsx (Top Navigation)

The Navbar component:
Renders the top navigation of the page.
Displays two buttons representing different navigation actions.
This component appears first on the screen as the header.

# 4. Page1Content.jsx (Main Content Wrapper)

After the navbar is rendered, Page1Content:
Renders the LeftContent component.
Renders the RightContent component and passes the users data to it.

# 5. LeftContent.jsx (Left Panel)

Inside LeftContent:
The HeroText component is rendered first.
An arrow icon is rendered below the text.

#6. HeroText.jsx (Main Heading)

The HeroText component:
Renders the main heading.
Renders a descriptive paragraph below the heading.

# 7. RightContent.jsx (Card Rendering Logic)

At the same time as LeftContent, RightContent:
Iterates over the users array using map().
For each user object, it renders a RightCard component.
Passes the required user data to each RightCard using props.

# 8. RightCard.jsx (Individual Card Component)

For each user:
RightCard receives the data via props.
It renders the card structure.
It passes specific values to the RightCardContent component.

# 9. RightCardContent.jsx (Card Details)

Finally, RightCardContent:
Receives the card-related data through props.
Displays the card number and user-specific information.
Renders action elements related to the card.


# Complete Rendering Flow Summary

App.jsx - initializes data and renders Section1.
Section1.jsx - renders Navbar.
Navbar.jsx - displays the header.
Section1.jsx - renders Page1Content.
Page1Content.jsx - renders LeftContent and RightContent.
LeftContent.jsx - renders HeroText and icon.
RightContent.jsx - maps through users and renders RightCard.
RightCard.jsx - renders card structure.
RightCardContent.jsx - renders card-specific details.






*** 08-functions ***


# 1️: Button with onClick

The first button uses the onClick property.
When the button is clicked, it calls a function.
The function executes only when the click event occurs, not during render.
This is commonly used for actions like submitting forms, updating state, or triggering logic.

# 2️: Button with onDoubleClick

The second button uses the onDoubleClick property.
The function is written inside curly braces {} and executes only when the button is double-clicked.
This allows handling specific interactions that require intentional user action.

# 3️: Button with onMouseEnter

The third button uses the onMouseEnter property.
An arrow function is written directly inside {}.
The function executes when the user hovers the mouse over the button.
This event is commonly used for hover effects, tooltips, or UI feedback.


# Tracking User Input in React

To track what a user is typing in an <input> element, React uses an event object (commonly named e or event) provided by event handlers like onChange.

# How It Works

When a user types in an input field, an event is triggered.
React passes an event object to the handler function.
event.target refers to the element that triggered the event.
In this case, the target is the <input> element.

# Accessing the Input Value

event.target.value retrieves the current value typed by the user.
This value can be logged, stored in state, or used for validation.

# Example Explanation

event.target → identifies the input element

event.target.value → gives the text entered by the user

Logging it to the console shows the input value in real time




# Srolling Tracking : 

To track scrolling in React, you can use the onWheel event on a parent container.

# How It Works :

Create three <div> elements inside a parent <div>.
Apply styling (height, width, background color, etc.) to make scrolling visible.
Attach the onWheel event handler to the parent div.
When the user scrolls using the mouse wheel, the attached function is triggered.

# Event Behavior : 

onWheel listens for mouse wheel scroll actions.
When scrolling occurs, React passes an event object to the function.

# This event can be used to:

Detect scroll direction
Track scroll activity
Perform actions based on scrolling







*** Hooks ***


# Define : 

Hooks in react are built-in functions in React that let function components use React features like state, lifecycle and shared data

Earlier : 

ONly class components could store data and use lifecycle mehtods
functions components were just for showing Ui

Now : 

Hooks give function components memory and behavior
Because of hooks, class components are mostly not needed anymore


# Why Hooks used?

store and update data(state)
run code when components loads or updates
share data between components
reuse logic 
write less and cleaner code



# Types of Hooks : 


# 1.  useState : 

store and change data
Used when a component needs to remember something (count, input value, toggle, etc.)
remember a value
State = data that can change

Code is in App.jsx of 09-hooks folder

The code creates a button with count 0 and when button is clicked it updates it value to 1 and so on when keep clicking

# code explanation : 


In the LoginForm component, two useState hooks are used: one to manage the email input and another to manage validation errors.

The email state is initialized as an empty string, so the input field starts empty. The input is a controlled component because its value is bound to the email state. When the user types in the input field, the onChange event triggers setEmail, which updates the email state with the user-entered value and causes the component to re-render with the updated input.

When the Submit button is clicked, the handleSubmit function runs. It checks whether the email contains @ using the includes() string method. If the email is invalid, the error state is set to "Invalid email". If the email is valid, the error state is cleared and the email is logged to the console. The error message is conditionally rendered below the input field when an error exists.

setEmail is a function provided by React that requests an update to the state and triggers a re-render, so that the email state receives the new value on the next render.
setEmail schedules a state update, and React re-renders the component with the updated email value.







# 2. useEffect – lifecycle / side effects

useEffect lets you run code after the component is shown on the screen.

React renders the UI first.
Then useEffect runs side work like:

fetching data
talking to APIs
setting timers
syncing with browser stuff


# Real-world analogy

Think of a restaurant:

UI render = food is served to the table
useEffect = waiter comes after serving to:
ask feedback
bring water
collect payment

You don’t do these things while cooking — you do them after.

# Why we need useEffect

Without useEffect:

API calls would run again and again
Infinite loops
App becomes slow or crashes
useEffect gives control over when code runs.


# Code explanation : 


# First, useState is used to create users and setUsers, where users is initialized as an empty array. This array will later store the user data fetched from the API.

Then useEffect is used to call the fetch method, which returns a promise. Using .then(), the response is converted into JSON, and the received data is passed to setUsers. This updates the users state and triggers a re-render, making the fetched data available in the component.

After the state update, the data stored in users is displayed in the UI by looping over the array and rendering user.name inside a list.

The empty dependency array [] ensures that the API call runs only once when the component mounts. Without useEffect, the API call would run on every render, causing unnecessary repeated requests and potentially crashing the application.



# In React, the useEffect hook is used to run side-effect code such as API calls after a component renders. The dependency array provided as the second argument to useEffect controls when and how often this code runs.

When an empty dependency array [] is passed to useEffect, it tells React to run the effect only once, when the component is first loaded or mounted on the screen. This is commonly used for tasks like fetching data from an API when a page loads for the first time.

In the given code, the API call is placed inside useEffect with an empty dependency array to ensure that the data is fetched only once. After the data is fetched, the state is updated using setUsers, which causes the component to re-render and display the fetched data. However, even after this re-render, the effect does not run again because the dependency array is empty.

If the API call were written outside useEffect, it would run on every render. Since updating state causes a re-render, this would create a loop where the API keeps getting called repeatedly. This leads to unnecessary network requests, poor performance, increased server load, and in extreme cases, browser crashes.

Therefore, using useEffect with an empty dependency array is important to control side effects, improve performance, and ensure that API calls happen only when needed.


# In React, “every render” does not mean every page refresh. A page refresh happens only when the user manually reloads the browser, but a render happens whenever React updates the UI.

A component re-renders when its state, props, or context change. This can happen many times without refreshing the page. If an API call is written directly inside a component instead of inside useEffect, it will run on every re-render.

When the API call updates the state using setState, React re-renders the component. This causes the API call to run again, creating a loop of repeated API requests. This leads to poor performance, unnecessary network usage, heavy server load, and in some cases, browser crashes.

Using useEffect with an empty dependency array [] prevents this problem by ensuring the API call runs only once when the component first loads, even if the component re-renders later.







# 3. useContext – share data globally (share data without props)

useContext is a way to share data between components without passing it through every single level of props.

# Normally in React:

If a parent component has some data, it passes it to a child using props.

But if many components are nested (grandchild, great-grandchild…), you have to pass the props through every level. This is called prop drilling and can get messy.

useContext solves this problem. It lets any component directly access the data from a “context” without intermediate components having to pass it down.

# Why useContext is needed

Avoids prop drilling – no need to pass props through multiple components.
Makes global data accessible in any component inside the context provider.
Keeps code clean, readable, and maintainable.


# Real-world use cases

# User authentication / logged-in user info

Example: you have a user object with name, role, and login status.
Instead of passing user through every component, useContext allows any component to access it directly.

# Theme (dark/light mode)

You define a ThemeContext that stores current theme.
Any component (buttons, headers, backgrounds) can read the theme and update styling accordingly.

# Use : 

Avoids passing props again and again
Clean way to share data
Used for auth, theme, language



# Code explantion:

# Problem it solves:
Normally, when a parent component has data and a child component needs it, you pass that data through props. But if there are many nested components, you have to pass it through every level. This is called prop drilling, and it makes code messy and hard to maintain. useContext solves this problem by allowing any component inside a “provider” to access the data directly, without needing intermediate props.

# Creating a context:
A context is created to hold shared data. Think of it as a shared storage box in your app. Any component inside this context can read the stored data.

# Providing the context value:
At the top level of the app, the shared data (in this case, a user object containing name and role) is placed into the context using a provider. All components inside the provider can now access this data. This eliminates the need to pass user as a prop to every child component that needs it.

# Consuming the context value:
Inside any component that needs the shared data, the useContext hook is used to fetch the current value from the provider. In this app, the Dashboard component calls useContext to get the user object. The component can now use this data directly, such as displaying the user’s name.

# Why it works:
The provider makes the data available globally for all nested components.
useContext allows a component to read the latest value directly, without props.
If the provider value changes, all components consuming the context automatically get the updated data.

# Real-world analogy:
The context is like a shared locker.
The provider is putting an item (user info) in the locker.
useContext is opening the locker from any component inside it to get the item.
You don’t need to hand the item through every room (prop drilling).

# Why it’s needed in this app:
The user object represents global data (logged-in user) needed by components.

Without useContext, you would have to pass user as props to every component that wants it, making the code long and hard to maintain.

With useContext, Dashboard (and any other component inside the provider) can access user directly.

# Key takeaway:
useContext allows components to access shared data directly from a provider, avoiding prop drilling, keeping the code clean, and making it easier to manage global/shared data like logged-in user information, theme settings, language preferences, or cart contents in real apps.







# 4. useRef – access DOM / store value (access DOM or store value without re-render)

useRef is used to remember something without causing a re-render.

It lets you:

store a value
access DOM elements
keep data between renders
without reloading the UI


useState changes cause the component to re-render.
Normal variables reset every time the component re-renders.
useRef keeps its value even after re-rendering.
Updating useRef does not affect the UI.



# Code explanation : 


In the Timer component, we manage two types of data: the time shown on the screen and the interval ID used internally to control the timer.

Time value: This value changes every second and must be displayed on the screen. Since it affects the UI, we use a state mechanism that triggers re-rendering whenever the value changes. This ensures the user sees the timer updating in real time.

Interval ID: When starting the timer, an interval ID is generated that allows the program to stop the timer later. This value is internal—it is not shown on the screen and does not affect the UI. It needs to persist across re-renders, because updating the time triggers re-rendering, and a normal variable would reset and lose the interval ID.

Using a normal variable for the interval ID fails because it resets every time the component re-renders, breaking the timer when trying to stop it. Using a state mechanism would work for persistence, but updating it would unnecessarily re-render the component, which is inefficient and wasteful.

useRef is perfect for this situation. It provides a special object with a .current property, which acts like a mutable storage box. This value persists across all re-renders, and updating it does not trigger any UI updates. The interval ID is stored in .current, allowing the start and stop functions to access it safely without causing extra renders.

The .current property is essentially where the actual value is stored. React does not monitor it for changes, so it can be updated silently. This makes useRef ideal for storing values that need to survive re-renders but are not part of the UI, like timers, previous state values, or DOM references.

Key takeaway: useRef is used whenever you need to persist a value across renders without affecting the UI, and .current is the property that holds this value. In the Timer example, it ensures the interval ID is remembered and allows the timer to start and stop correctly without unnecessary re-renders.





*** 10-useState ***

In App.jsx, a not change on button click because : 

The value of a does not change on the screen because it is a normal variable, not React state.
Changing a normal variable does not trigger a re-render in React.
React updates the UI only when state changes using useState.
To reflect changes in the UI, the variable must be stored as state.


a is a state variable that stores the current value.
It is used to display data in the UI.
When setA updates a, React re-renders the component with the new value.



# Q1. Counter with Limit

Create a counter that:
Starts at 0
Has Increase and Decrease buttons
Cannot go below 0 or above 10
Shows a message when limit is reached

Solution done in CounterwithLimit.jsx in components folder


# Q2. Toggle Theme (Light / Dark)

Create a button that:
Toggles between Light and Dark mode
Changes background color and text
Button text should also change accordingly
Focus: boolean state

Solution done in ToggleTheme.jsx in components folder



# Q3. Create a like Button

Solution done in LikeButton.jsx in components folder

# Code Explanation : 

# First, a function component called LikeButton is created.

Inside it, useState is used to create two things:
liked → stores the current state (true or false)
setLiked → function used to update liked

# Initially, liked is set to false, which means the heart is not liked.

A function called likeButton is created.
Inside this function, an if condition checks the current value of liked.
If liked is false, setLiked(true) is called.
If liked is true, setLiked(false) is called.
This toggles the state between true and false.

# In the return part:

A Heart icon is rendered.
The onClick event calls the likeButton function.
The color of the heart depends on the liked state:
If liked is true → heart becomes red
If liked is false → heart stays white
When the state changes, React re-renders the component, so the color updates on the UI.





*** 11-useState-advance ***

In App.jsx, when the button is clicked, setNum updates the state asynchronously, so console.log before and after setNum prints the same old value in the same render cycle.

setState is asynchronous.
Calling setNum(20) does not update num immediately.
React schedules the update and applies it after the function finishes.
During this function execution, num still holds the old value.
Only after React re-renders does num become 20, and the UI updates.

# Key rule
State updates are applied after the current function completes, not instantly.



# Part 2: Object state update

The state is an object containing user and age.
React state must be treated as immutable.
A new object is created using the spread operator.
The new object’s properties are updated
setNum(newObject) replaces the old state with the new one.
React re-renders and shows updated values.

# Why this is necessary
Directly changing the object won’t trigger re-render.
React detects changes only when a new reference is created.



# Part 3: Multiple state updates & batching

Problem case

Writing setNum(num + 1) multiple times:
All updates use the same old value.
Result: number increases by 1, not 3.

# Why
React batches state updates for performance.
num inside the function is stale (unchanged).

# Correct approach

# Using the functional update:

Each update receives the latest state value.
All updates are applied correctly.
Result: number increases by 3.

# Key rule
Use functional updates when the new state depends on the previous state.






*** 12-form-handling ***

A functional component App is defined. This component controls what is shown on the screen.

Inside the component, a function called submitHandler is created.
This function runs when the form is submitted.

The parameter e (event) is automatically passed by React when the form is submitted.

e.preventDefault() stops the browser’s default behavior of reloading the page after form submission.

console.log("Form Submitted") confirms that the submit event was handled successfully.

# In the JSX:

A <form> element is used with onSubmit={submitHandler}, which connects the form submission to the handler function.

An input field allows the user to type their name.

A button triggers the form submission when clicked.

Finally, export default App makes this component available to be used in other files.

# Key takeaway (important):
The form does not refresh the page, and the submit logic is fully controlled by React, not the browser.







*** 13-two-way-binding ***


First, useState is created with two variables: title and setTitle.
The initial value of title is an empty string, so the input starts empty.
A submitHandler arrow function is defined, which executes when the form is submitted.

# Inside submitHandler:

e.preventDefault() stops the page from reloading.
console.log("Form Submitted by :", title) prints the latest state value of title (the user’s name).
setTitle('') resets the state, which clears the input field.

# In the form:

The input’s value is bound to title, making it a controlled component.
When the user types, onChange fires on every keystroke.
setTitle(e.target.value) updates the state with the current input value.

# Because the input value depends on state:

Typing updates the state
Submitting logs the value
Resetting the state clears the input

# Two-Way Binding

Two-way binding means the input and the data stay in sync.
If the user types, the state changes.
If the state changes, the input updates.

In our React code:

onChange sends input value to the state
value={title} sends state value back to the input

Together, this behaves like two-way binding.
React does NOT provide automatic two-way binding.
React follows one-way data flow, and we manually connect both sides.
This pattern is called a controlled component, not true two-way binding.







*** 14-popup-modal *** 

# The App component uses useState to create two variables:

showModal → stores whether the modal is visible
setShowModal → updates that value
Initially, showModal is false, so the modal is hidden.
The page renders a heading and a button.

# When the button is clicked:

setShowModal(true) runs
State updates
React re-renders the component

This line controls the modal:

<!-- {showModal && <Modal onClose={() => setShowModal(false)} />} -->


If showModal is true, the Modal component is rendered
If showModal is false, nothing is rendered
false && <Modal /> → nothing shows
true && <Modal /> → modal appears
This is called conditional rendering
The Modal component receives a prop named onClose
onClose is a function that sets showModal back to false

# Inside Modal.jsx:

The cross button has onClick={onClose} (onClose is passed as a props)
When clicked, onClose() runs
showModal becomes false
React re-renders and removes the modal from the screen

# One-line takeaway
The modal opens and closes purely using React state and conditional rendering, not CSS tricks or DOM manipulation.






*** 18-react-router-dom ***

React does not have an inbuilt routing system, so we use react-router-dom for routing.

It is installed using npm i react-router-dom.

React Router DOM is used for client-side routing, where the page does not reload.

It allows navigation in React apps without reloading the page by changing components based on the URL.

This makes the application fast and smooth like a Single Page Application.

The page does not reload, Only the required component changes.

For using brouser router we need to wrap the whole application into it main.jsx 
like this   <BrowserRouter>   
                <App />
            </BrowserRouter>

and also import this - import {BrowserRouter} from 'react-router-dom'

Use : 

To create multiple pages in a React app
To map URLs to components
To handle navigation like /login, /about, /profile



# Code Explanation : 

This uses React Router to show different pages without reloading the browser.

# App.jsx (Main Controller)

Routes acts as a container that holds all route definitions.
Route connects a URL path to a component.

<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />

This means:

/ → Home page
/about → About page
/contact → Contact page

Navbar is placed above Routes, so it appears on every page.
Footer is placed below Routes, so it also stays constant.
Only the middle content changes, not the whole page.


# Navbar.jsx (Navigation)

Uses Link instead of <a> tag.
Link changes the URL without reloading the page.

<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>


Clicking a link:

Updates the URL
React Router loads the matching component
Page feels instant (SPA behavior)

Home / About / Contact Pages
Each file is a simple functional component.
They return basic JSX content.
React Router decides which one to show based on the URL.

# How everything works together (flow)

App loads
Navbar and Footer render once
URL is checked
Matching Route component renders between them
Clicking Navbar links updates content without refresh


# Why React Router is Needed?

React apps are single-page applications (SPA).
The whole app loads once, not on every page change.
React Router decides which component to show based on the URL.
It changes pages without reloading the browser.

# Reloading the page:

is slow
loses app state
gives bad user experience
Using Link instead of <a>:
updates the URL
loads the component
keeps the app fast and smooth

# One-line takeaway

React Router allows navigation without page reload, making React apps faster and more app-like.