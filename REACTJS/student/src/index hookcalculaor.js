import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function CalculateHook(){

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [result,setResult] = useState(0);

  const handleResult = (operator) =>{

    var ans=0;
    setNum1(num1);
    setNum2(num2);
    switch(operator)
    {
      case "+":ans=num1+num2;
              break;
      case "-":ans=num1-num2;
              break;
      case "*":ans=num1*num2;
                break;
      case "/":ans=num1/num2;
                break;
    }
    setResult(ans);
  }

  const changeHandler =(event) =>{
    var val=event.target.value;
      if(event.target.id=="num1")
      {
        setNum1(parseInt(val));
      }else{
        setNum2(parseInt(val));
      }
      

  }

  return(
    <>
     <table>
     <br/>
         <h1><p> the result is ={result}</p></h1>
        <tr>
         <td>
         <input type="number" id="num1" onChange={changeHandler}></input>
        </td>
         <td>
        <input type="number" id="num2" onChange={changeHandler}></input>
        </td>       
        <br/>
         <h1><p> the result is ={result}</p></h1>
      
      </tr>
    </table>
    <div>
    <button onClick={()=>handleResult("+")}>+</button>
    <button onClick={()=>handleResult("-")}>-</button>
    <button onClick={()=>handleResult("*")}>*</button>
    <button onClick={()=>handleResult("/")}>/</button>
    </div>
    </>
  );

}

ReactDOM.render(  
  <CalculateHook /> ,
document.getElementById('root')
); 

