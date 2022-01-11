import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


 function App1(props){
    return <h1>Hello {props.name} </h1>
 }
ReactDOM.render(
<App1 name = "rajesh"/> , 
document.getElementById('root'));
  



