import React, { Component } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    const funcBtn = item.target.textContent;
    this.setState((e) => calculate(e, funcBtn));
  }

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="container">
        <div className="row screen ">
          { total }
          { operation }
          { next }
        </div>
        <div className="row ">

          <button type="button" onClick={this.handleClick} className="item">AC</button>
          <button type="button" onClick={this.handleClick} className="item">+/-</button>
          <button type="button" onClick={this.handleClick} className="item">%</button>
          <button type="button" onClick={this.handleClick} className="item last-col">÷</button>
        </div>
        <div className="row ">
          <button type="button" onClick={this.handleClick} className="item">7</button>
          <button type="button" onClick={this.handleClick} className="item">8</button>
          <button type="button" onClick={this.handleClick} className="item">9</button>
          <button type="button" onClick={this.handleClick} className="item last-col">x</button>
        </div>

        <div className="row ">
          <button type="button" onClick={this.handleClick} className="item">4</button>
          <button type="button" onClick={this.handleClick} className="item">5</button>
          <button type="button" onClick={this.handleClick} className="item">6</button>
          <button type="button" onClick={this.handleClick} className="item last-col">-</button>
        </div>
        <div className="row ">
          <button type="button" onClick={this.handleClick} className="item">1</button>
          <button type="button" onClick={this.handleClick} className="item">2</button>
          <button type="button" onClick={this.handleClick} className="item">3</button>
          <button type="button" onClick={this.handleClick} className="item last-col">+</button>
        </div>
        <div className="row last row">
          <button type="button" onClick={this.handleClick} className="item zero">0</button>
          <button type="button" onClick={this.handleClick} className="item">.</button>
          <button type="button" onClick={this.handleClick} className="item last-col">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
