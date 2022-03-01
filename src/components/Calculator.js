import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const stateObj = {
    total: 0,
    next: null,
    operation: null,
  };

  const [properties, setProperties] = useState(stateObj);

  const handleClick = (item) => {
    const funcBtn = item.target.textContent;
    const newProperties = { ...properties };
    setProperties(calculate(newProperties, funcBtn));
  };

  return (
    <div className="pageContainer">

      <div className="hail">
        <p>Let&apos;s do some math!</p>
      </div>
      <div className="container">
        <div className="row screen ">
          {properties.total}
          {properties.operation}
          {properties.next}
        </div>
        <div className="row ">

          <button type="button" onClick={handleClick} className="item">AC</button>
          <button type="button" onClick={handleClick} className="item">+/-</button>
          <button type="button" onClick={handleClick} className="item">%</button>
          <button type="button" onClick={handleClick} className="item last-col">÷</button>
        </div>
        <div className="row ">
          <button type="button" onClick={handleClick} className="item">7</button>
          <button type="button" onClick={handleClick} className="item">8</button>
          <button type="button" onClick={handleClick} className="item">9</button>
          <button type="button" onClick={handleClick} className="item last-col">x</button>
        </div>

        <div className="row ">
          <button type="button" onClick={handleClick} className="item">4</button>
          <button type="button" onClick={handleClick} className="item">5</button>
          <button type="button" onClick={handleClick} className="item">6</button>
          <button type="button" onClick={handleClick} className="item last-col">-</button>
        </div>
        <div className="row ">
          <button type="button" onClick={handleClick} className="item">1</button>
          <button type="button" onClick={handleClick} className="item">2</button>
          <button type="button" onClick={handleClick} className="item">3</button>
          <button type="button" onClick={handleClick} className="item last-col">+</button>
        </div>
        <div className="row last row">
          <button type="button" onClick={handleClick} className="item zero">0</button>
          <button type="button" onClick={handleClick} className="item">.</button>
          <button type="button" onClick={handleClick} className="item last-col">=</button>
        </div>
      </div>

    </div>

  );
};

export default Calculator;
