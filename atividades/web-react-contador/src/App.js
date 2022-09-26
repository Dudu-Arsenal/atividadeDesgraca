import React, { useState } from "react";
import "./App.css";
  
const App = () => {
  
  const [counter, setCounter] = useState(0)
  const Click1 = () => {
    setCounter(counter + 1)
  }
  const Click2 = () => {
    setCounter(counter - 1)
  }
  return (
    <div class="geral">
      Contador
      <div class="contador">
        {counter}
      </div>
      <div className="buttons">
        <button class="aumenta" onClick={Click1}>Incrementa</button>
        <button class="subtrai" onClick={Click2}>Decrementa</button>
      </div>
    </div>
  )
}
  
export default App