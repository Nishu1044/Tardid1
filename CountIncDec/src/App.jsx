import { useState } from "react"



function App() {
  const [count, setCount] = useState(0)

function HandleIncrement(){
 
 setCount(prev=> prev+1)
}

function HandleDecrement(){
  setCount(prev=> prev-1)
}

  return (
   <>
   <div>
    <button onClick={HandleIncrement}>+</button>
    <p>{count}</p>
    <button onClick={HandleDecrement}>-</button>
   </div>
   </>
  )
}

export default App
