02-components :


Now, in our main folder which is reactjs where react-playground1 file is made so lets make another file by writing npm create vite@latest  then react-playground2 as project name then same procedure as react-playground1 

So, in this first we will learn about react Components more info about react components and why it is used is in react-playground2.md file 

Now, in this folder react-playground2 create a folder components in src foler and in that create a file Card.jsx and in that write a funciton Card and return h1 with class name and modify it in index.css and in App.jsx import the card.jsx then use it to show the card.

Now, create a file Navbar.jsx and in that write a function and then modify its css then import it into app.jsx 




03-props :


Now, create a folder 03-props using npm create vite@latest then in app.jsx create a parent div and in that use Card for which first create a folder components in src folder and in that create a file Card.jsx and in it write a card function and return a card div with card things and then import it in app.jsx so this is not dynamic for making the card component reusable and dynamic we use props for that in app.jsx in Card tag add name image description then in card.jsx in card function argument add name image descripiton then use it in className card div so like this we can create multiple cards with diff data.




04-cards-project :






05-css : 


So, when creating a folder components and in that creating a file Header.jsx and Button.jsx and giving style to them in index.css so if any of the classname of these two files can have common name so both takes the same styling to avoid we use CSS Modules for that create a file Header.module.css and Button.module.css for each jsx files and write css in those module.css files so that so overlapping or cross-interactions happens (header.jsx can only access header.module.css and button.jsx can only access button.module.css)




06-tailwind : 


Now, for using tailwind css in react go to tailwind css website then go install using vite and in that copy this line "npm install tailwindcss @tailwindcss/vite" and cd to project then paste this and run now copy this line "import tailwindcss from '@tailwindcss/vite'" and paste in vite.config.js at the third line then also add this "tailwindcss()" in plugins and in index.css file paste this line "@import "tailwindcss" at the very top of it now we are good to go