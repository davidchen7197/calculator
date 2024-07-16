import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  }

  const handleCalculate = () => {
    try {
      const calculatedResult = calculate(input);
      setResult(calculate(calculatedResult));
    } catch (error) {
      setResult("Error");
    }
  };

  const calculate = (expression) => {
    const tokens = expression.split(/([+\-*/])/);
    let currentNumber = parseFloat(tokens[0]);
    
    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseFloat(tokens[i + 1]);
        
        switch (operator) {
            case '+':
                currentNumber += nextNumber;
                break;
            case '-':
                currentNumber -= nextNumber;
                break;
            case '*':
                currentNumber *= nextNumber;
                break;
            case '/':
                currentNumber /= nextNumber;
                break;
            default:
                throw new Error('Invalid operator');
        }
    }
    
    return currentNumber.toString();
};

  return (
    <div className="calculator">

      <h1>Simple calculator</h1>

      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button className="span-two" onClick={ handleDelete }>DEL</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button> 
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="span-two" onClick={ handleCalculate }>=</button>
      </div>

    </div>
  );
};

export default App;
