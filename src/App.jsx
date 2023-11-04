// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Users from './Users';
import Posts from './Posts';
import Post from './Post';
function App() {

  function handleClick(){
    alert('Button Clicked!!');
  }


  return (
    <>
      
      <h3>React Core Concepts</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr></hr>
      <Posts></Posts>
      <Post></Post>
      <button onClick={handleClick}>Click Me!!!</button>
      <Users></Users>
      <Counter></Counter>
    </>
  )
}

export default App
