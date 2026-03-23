import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


let [counter,setCounter]=useState(15)



  const addValue=()=>{
    if(counter <20)
    counter=counter+1
    console.log("Clicked Add", counter);
  
    setCounter(counter)
  }

  const removeValue=()=>{
    if(counter >0)
    counter=counter-1;
    console.log(" clicked removed: ",counter);
    setCounter(counter);
  }

  return (
    <> 
     <h1>Counter </h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value {counter} </button>
     <br/>
     <button onClick={removeValue}>remove value{counter}</button>
     <br/>
    <p>footer: {counter} </p>
    </>
  )
}

export default App
