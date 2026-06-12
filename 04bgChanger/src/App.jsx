import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }



  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            // onClick={() => changeColor("red")}
            onClick={() => setColor("red")}
            className="outline-none px-3 py-1 rounded-full  shadow-lg text-black bg-red-700"
          >
            Red
          </button>
          <button
            //onClick={() => changeColor("blue")}
            onClick={() => setColor("blue")}
            className="outline-none px-3 py-1 rounded-full  shadow-lg text-black bg-blue-700"
          >
            Blue
          </button>
          <button
            //onClick={() => changeColor("green")}
            onClick={() => setColor("green")}
            className="outline-none px-3 py-1 rounded-full  shadow-lg text-black bg-green-700"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
