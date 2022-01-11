import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Calculator1 extends React.Component
{
  constructor()
  {
    super();
    this.a=parseInt("20");
    this.b=parseInt("10");
  }

  render()
  {
    return <>
    <h1>Addition = {this.a+this.b}</h1>
    <h1>Subtraction = {this.a-this.b}</h1>
    <h1>Multiplication = {this.a*this.b}</h1>
    <h1>Division = {this.a/this.b}</h1>
    
    </>
  }
}

ReactDOM.render(
  <Calculator1 />,
  document.getElementById("root")
);

