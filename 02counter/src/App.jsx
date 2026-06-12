import { useState } from 'react'


import './App.css'

function App() {
 
  const [counter, setCounter] = useState(15)
  //let counter = 15

  const addValue = () => {
    //setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter + 1)    // avoiding batching
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1);
    setCounter(counter - 1);   // this does not behave same as above func. it will only do it once
    setCounter(counter - 1);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Learning React with Anshuman {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App
