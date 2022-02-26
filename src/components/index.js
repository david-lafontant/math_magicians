import React, { Component } from 'react';
import './index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row screen ">0</div>
        <div className="row ">
          <p className="item">AC</p>
          <p className="item">+/-</p>
          <p className="item">%</p>
          <p className="item last-col">÷</p>
        </div>
        <div className="row ">
          <p className="item">7</p>
          <p className="item">8</p>
          <p className="item">9</p>
          <p className="item last-col">X</p>
        </div>

        <div className="row ">
          <p className="item">4</p>
          <p className="item">5</p>
          <p className="item">9</p>
          <p className="item last-col">-</p>
        </div>
        <div className="row ">
          <p className="item">1</p>
          <p className="item">2</p>
          <p className="item">3</p>
          <p className="item last-col">+</p>
        </div>
        <div className="row last row">
          <p className="item zero">0</p>
          <p className="item">&middot;</p>
          <p className="item last-col">&#61;</p>
        </div>
      </div>

    );
  }
}

export default Calculator;
