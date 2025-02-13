import React, { useState } from 'react'

const App = () => {
  // let uname = "Rax"
  // We use different approach to define variable, we use usestate hooks to make a variable.

  //[ReadableValue, SetValue] 
  let [uname, setuname] = useState("rax")
  const name = () => {
    // Useing setstate hook =>
    setuname("Rax Ji")
    // Normally we do =>
    // let elem = document.querySelector('#name')
    // elem.innerHTML = `Welcome ${uname}`
  }
  return (
    <div>
      <h1 id="name">Welcome {uname}</h1>
      <button onClick={name} > Click Me </button>
    </div >
  )
}

// style={ backgroundColor: aquamarine,padding:10px 20px,color:black,font-size: 22px, }



export default App