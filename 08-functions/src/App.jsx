import React from 'react'

const App = () => {

  // const btnClicked = () => {
  //   console.log("Button 1 Clicked")
  // }

  // function inputChange(el) {
  //   console.log(el.target.value)
  // }


  function inputChange(val) {
    console.log(val)
  }


  function pageScroll() {
    console.log("Page Scrolling");
  }




  return (
    <div onWheel={pageScroll}>
      {/* <button onClick={btnClicked}>Button 1</button>

      <button onDoubleClick={function() {
        console.log("Button 2 Clicked");
      }}>Button 2</button>

      <button onMouseEnter={() => {
        console.log("Button 3 Activated");
      }}>Button 2</button> */}


      {/* <input 
        onChange={function(el){
        // shows the input as it is targetted
        // console.log(el.target) 
        // shows what is user typing in the input box 
        // console.log(el.target.value)
        inputChange(el.target.value)
        }}
        type='text'
        placeholder='Enter Name'
        /> */}



        {/* <div 
        onMouseMove={() => {
          console.log("Mouse entered the div")
        }}
        className='box'></div> */}


        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>

    </div>
  )
}

export default App
