*** 02-components ***


Now, in our main folder which is reactjs where react-playground1 file is made so lets make another file by writing npm create vite@latest  then react-playground2 as project name then same procedure as react-playground1 

So, in this first we will learn about react Components more info about react components and why it is used is in react-playground2.md file 

Now, in this folder react-playground2 create a folder components in src foler and in that create a file Card.jsx and in that write a funciton Card and return h1 with class name and modify it in index.css and in App.jsx import the card.jsx then use it to show the card.

Now, create a file Navbar.jsx and in that write a function and then modify its css then import it into app.jsx 





*** 03-props ***


So, props(properties) is basically used to pass data from one component to another in react.

It is passed as an argument to a function in a component or a file and a component (another file) recieves props but does not change them.

Without props every component would be hard coded and no reusability.

But when using props we can create components dynamic and reusable with for eg an array of data passed form one file to other files to use and show dynamic content in a component.

By Design - props always flow form parent to child


Now, create a folder 03-props using npm create vite@latest then in app.jsx create a parent div and in that use Card for which first create a folder components in src folder and in that create a file Card.jsx and in it write a card function and return a card div with card things and then import it in app.jsx so this is not dynamic for making the card component reusable and dynamic we use props for that in app.jsx in Card tag add name image description then in card.jsx in card function argument add name image descripiton then use it in className card div so like this we can create multiple cards with diff data.





*** 04-cards-project ***


First, we create a Card.jsx component inside the components folder.
In this file, we design the card structure using multiple divs and style it using Tailwind CSS classNames.

Once the card structure is ready, we reuse the same card layout to display multiple cards with different data using props.

For this, we create a jobs array in the parent component.
Each item in the array is an object containing job-related data (image, company name, role, salary, location, etc.).

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
Import Tailwind CSS at the top:
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

count stores value
setCount updates value
When state changes, UI updates automatically
Used for numbers, text, forms, toggles, etc.





# 2. useEffect – lifecycle / side effects

To run extra code after rendering (like fetching data).
When you want code to run on load or after change.
Runs once when component loads
Used for API calls, timers, subscriptions


Code is in App.jsx of 09-hooks folder


When the page is loaded the message is consoled  




# 3. useContext – share data globally (share data without props)

Used when many components need the same data (theme, user, language).

Code is in App.jsx of 09-hooks folder

# Use : 

Avoids passing props again and again
Clean way to share data
Used for auth, theme, language





# 4. useRef – access DOM / store value (access DOM or store value without re-render)

When you want to focus input / access DOM.
Storing previous values


# Use : 

This is used when the app needs to automatically focus an input, for example focusing the email field when a login page loads or moving the cursor to an input after a button click or form error, without the user clicking it.







*** 10-useState ***

In App.jsx, a not change on button click because : 

The value of a does not change on the screen because it is a normal variable, not React state.
Changing a normal variable does not trigger a re-render in React.
React updates the UI only when state changes using useState.
To reflect changes in the UI, the variable must be stored as state.


(line 6) a is a state variable that stores the current value (starting at 20).
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






*** 11-useState-advance ***

In App.jsx, when the button is clicked, setNum updates the state asynchronously, so console.log before and after setNum prints the same old value in the same render cycle.

React schedules the state update and re-renders later, which is why the updated value appears only on the next click or render.

If you call setNum(num) with the same value, React does not re-render because the state hasn’t actually changed.

This behavior exists for performance and predictable rendering.






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