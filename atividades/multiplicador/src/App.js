import './App.css'
import React, {useState} from 'react';

function App() {

    const [data, setData] = useState({
      firstNumber: 0,
      secondNumber: 0,
      result: 0
    }) 

    const multiple = (e) => {
      e.preventDefault()
      setData(prev => ({...prev, result: prev.firstNumber * prev.secondNumber}))
    }  

    return (
      <div class="geral">
        <h1>Multiplicador</h1>
          <form onSubmit={multiple}>
            <input type="number" value={data.firstNumber}
              onChange={e => setData(prev => ({...prev, firstNumber: Number(e.target.value)}))}
              />
            <input type="number" value={data.secondNumber}
              onChange={ e => setData(prev => ({...prev, secondNumber: Number(e.target.value)}))}
              />
                <input type="submit" value="Calcular"/>
           </form>
        <p><strong>Resultado: </strong><span>{data.result}</span></p>
      </div>
    )
    }
    export default App