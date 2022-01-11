import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



 
        function GradeSystem(props){
          let phy = parseInt(props.a);
          let chem = parseInt(props.b);
          let odia = parseInt(props.c);
           let total = (phy + chem+ odia)/3;
          if (total>=90){
          return <h1>You securing mark is   {props.a}, {props.b} and  {props.c} <br></br>So your Garde is : E  </h1>
        } else if (total>=70){
          return <h1> You securing mark is   {props.a}, {props.b} and  {props.c}<br></br>So your  Garde is : A+  </h1>
        } else if (total>=60){
          return <h1> You securing mark is  {props.a}, {props.b} and  {props.c}<br></br>So your  Garde is :  A  </h1>
        } else{ 
          return <h1>You securing mark is {props.a}, {props.b} and  {props.c}<br></br>So your  Garde is : B </h1> }
        }
        
        ReactDOM.render(
          <GradeSystem a="75" b="80" c="65"/>,
          document.getElementById('root')
        );
        