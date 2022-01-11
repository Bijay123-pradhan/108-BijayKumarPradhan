import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
function Calculator(props){
    let result = parseInt (props.a) + parseInt (props.b);
    let result1= props.a - props.b;
    let result2= props.a * props.b;
    let result3= props.a / props.b;
    return <h1> calculation {props.a} and {props.b} <br></br>add = {result}  
    <br></br>sub ={result1} <br></br>mul = {result2} 
    <br></br>div = {result3}</h1>
    
  }
  
  ReactDOM.render(  
      <Calculator a='10' b='20'/>,
  
    document.getElementById('root')
  );



