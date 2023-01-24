import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const handleEvaluate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (err) {
      setOutput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className='container'>
      <div className="calculator">
    <div className="output">
      <span>{input}</span>

      <span>{output}</span>
    </div>
    <div className="keypad">
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="+" onClick={handleClick}>+</button>
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="-" onClick={handleClick}>-</button>
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="*" onClick={handleClick}>*</button>
      <button value="." onClick={handleClick}>.</button>
      <button value="0" onClick={handleClick}>0</button>
      <button onClick={handleEvaluate}>=</button>
      <button value="/" onClick={handleClick}>/</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  </div>
    </div>
    
  )
}

export default App
