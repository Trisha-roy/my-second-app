// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Users from './Users';

function App() {

  function handleClick(){
    alert('Button Clicked!!');
  }


  return (
    <>
      
      <h3>React Core Concepts</h3>
      <button onClick={handleClick}>Click Me!!!</button>
      <Users></Users>
      <Counter></Counter>
    </>
  )
}

export default App
