import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(0);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="keypad">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="result">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
