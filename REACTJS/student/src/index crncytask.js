
import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';

class CurrencyConverter extends React.Component
{
  constructor()
  {
    super();
    this.handlerC = this.handlerC.bind(this);
    this.state={
      currentCurrency:"INR",
      value:"",
    }
  

  toInr()
  {
   if(this.state.currentCurrency=="DOLLAR")
   {
     this.setState(i=>(
       {
         currentCurrency:"INR",
         value:parseFloat(i.value*75)
       }
     ))
   }
   if(this.state.currentCurrency=="YEN")
   {
     this.setState(i=>(
       {
         currentCurrency:"INR",
         value:parseFloat(i.value*40)
       }
     ))
   }

  }
  toDollar()
  {
   
    if(this.state.currentCurrency=="INR")
   {
     this.setState(i=>(
       {
         currentCurrency:"DOLLAR",
         value:parseFloat(i.value/75)
       }
     ))
   }
   if(this.state.currentCurrency=="YEN")
   {
     this.setState(i=>(
       {
         currentCurrency:"DOLLAR",
         value:parseFloat(i.value/30)
       }
     ))
   }

  }

  toYen()
  {
    if(this.state.currentCurrency=="DOLLAR")
   {
     this.setState(i=>(
       {
         currentCurrency:"YEN",
         value:parseFloat(i.value*30)
       }
     ))
   }
   if(this.state.currentCurrency=="INR")
   {
     this.setState(i=>(
       {
         currentCurrency:"YEN",
         value:parseFloat(i.value/40)
       }
     ))
   }
  }
  
  handlerC(btnId)
  {
    var val= document.getElementById("input").value;
    this.setState({
      value : val
    });
    console.log(this.state.value);
   if(btnId=="INR"){
      this.toInr();
   }else if(btnId=="DOLLAR"){
     this.toDollar();
   }else if(btnId=="YEN")
   {
     this.toYen();
   }
   
  }  

  render()
  {
    return(
    <>

    <div>
    <tr> <input  id="input" type="text" defaultValue={this.state.value}/></tr>
   <h2>{this.state.currentCurrency}: {this.state.value}</h2>
  
   <h2>
   <button id="inr" onClick={()=>this.handlerC("INR")} onChange={this.changeHandler}>INR</button>
   <button id="dol" onClick={()=>this.handlerC("DOLLAR")} onChange={this.changeHandler}>DOLLAR</button>
   <button id="yen" onClick={()=>this.handlerC("YEN")} onChange={this.changeHandler}>YEN</button>
   </h2>
   <table>
     <tr>
   <h2>{this.state.currentCurrency} To</h2>
   </tr>
   
   
   </table>
   </div>
    </>
    
    );
  }
  }}
  ReactDOM.render(
    <CurrencyConverter /> , 
    document.getElementById('root'));