import { useState } from 'react'
import ReactToggle from './ReactToggle';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  function HandleChangeOpen(){
    //  console.log("clicked"); 
    setIsOpen(true)
  }

  function HandleChangeClose(){
    console.log("clicked");
    setIsOpen(false)
  }
  
  return (
    <>
      <div className='Model'
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50vh'
      }}
      >
        <button id='openbtn'
        onClick={HandleChangeOpen}
        >Open</button>

        <div className='Model_content'
         style={{
          display: isOpen ? 'block' : 'none', // Conditionally display based on `isOpen`
        }}>Welcome Toggle</div>

        <button id='closebtn'
        onClick={HandleChangeClose}
        >Close</button>
      </div>

    <ReactToggle />
    </>
  )
}

export default App
