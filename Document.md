# React – Basic Notes

## What is React?

React is a **JavaScript library** used to build **user interfaces**, especially **single-page applications (SPAs)**. It helps create **fast, interactive, and reusable UI components**.

👉 React focuses mainly on the **view (UI) layer** of an application.

---

## Who Made React?

React was created by **Jordan Walke**, a software engineer at **Facebook (now Meta)**.

---

## When Was React Made?

* React was created in **2011**
* Open-sourced (released to the public) in **2013**

---

## Why Was React Made?

React was made to solve problems like:

* Slow UI updates in large applications
* Complex code with direct DOM manipulation
* Difficulty in managing UI state

Facebook needed a **faster and more efficient way** to update the UI.

---

## Why React is Needed?

* Real DOM updates are slow
* Large apps need better performance
* Code should be reusable and easy to manage

React solves this using:

* **Virtual DOM** (faster updates)
* **Component-based architecture**
* **Declarative coding style**
  

# Without React, frequent UI changes require manual DOM manipulation, which becomes slow and hard to manage in large applications.

# React uses a Virtual DOM, which is a lightweight JavaScript representation of the real DOM.

# When the UI changes, React creates a new Virtual DOM and compares it with the previous Virtual DOM using a diffing algorithm.

# React then updates only the changed parts of the real DOM, reducing expensive DOM operations and improving performance.

---

## Key Features of React

* **Component-Based**: UI is broken into small reusable components
* **Virtual DOM**: Improves performance
* **JSX**: HTML-like syntax inside JavaScript
* **One-way data binding**: Better control of data flow


# One-way data binding means data flows in a single direction, from the application state to the UI.

# In React, state is usually held in a parent component and passed down to child components through props.

# Child components cannot directly modify the parent’s state; they can only request changes through callbacks.

# This approach makes applications easier to maintain, predictable in behavior, and easier to debug because the data flow is controlled and traceable.

---

## What is JSX?

JSX stands for **JavaScript XML**.
It allows writing HTML inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

---

## Where is React Used?

* Facebook
* Instagram
* Netflix
* WhatsApp Web
* Many modern web applications

---

## React in One Line

**React is a JavaScript library used to build fast, scalable, and interactive user interfaces using components and Virtual DOM.**

---

---

## Git Commands to Push 

Use the following commands to push your React playground code to GitHub:

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/Mofiz-Usmani/react-playground.git
git branch -M main
git push -u origin main
```

---

## If You Get Error During `git push`

If `git push -u origin main` gives an error (like rejected or non-fast-forward), run:

```bash
git pull --rebase origin main
git push -u origin main
```

---




## File Setup

```Enter command npm create vite@latest name it 01-folder (or topic wise) and so on for each topic then select react then js now stop the server by ctrl + c then cd to 01-folder (or that topic file) then enter npm run dev to start the server



