import React from 'react'
import { useState } from 'react'


const ReactToggle = () => {
    const [isopen, setIsopen] = useState(false)

    function HandleOpen(){
        setIsopen(true)
    }
    function HandleClose(){
        setIsopen(false)
    }

  return (
    <>
    <div>
        <button id='opnbt' onClick={HandleOpen}>open</button>

        <div id='content'
        style={{
        display: isopen ? 'block' : 'none', // Conditionally display based on `isOpen`
        }}
        >welcome to React Toggle</div>
        
        <button id='clsbtn' onClick={HandleClose}>close</button>
    </div>
    </>
  )
}

export default ReactToggle