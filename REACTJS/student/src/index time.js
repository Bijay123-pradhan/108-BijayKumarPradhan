import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

 function tick(){
   const Element =(
   <div>
 <h1>Current time is </h1>
 <h2>It is {new Date ().toLocaleString()}</h2>

   </div>
   );
 
ReactDOM.render(Element , document.getElementById('root'));
  
 }
 
 setInterval(tick,1000);

