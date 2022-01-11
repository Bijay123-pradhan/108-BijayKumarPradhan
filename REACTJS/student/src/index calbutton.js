import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 // calculator with Button and state

class Calbutton extends React.Component{
    constructor(props){
      super(props);
      this.state={ num1: '30', num2: '10', result: '' };
      this.AddHandler = this.AddHandler.bind(this);
      this.SubHandler = this.SubHandler.bind(this);
      this.MultiHandler = this.MultiHandler.bind(this);
      this.DivHandler = this.DivHandler.bind(this);
    }
  AddHandler(){
    this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
  }
  SubHandler(){
    this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })
  }
  MultiHandler(){
    this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
  }
  DivHandler(){
    this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })
  }
  render() {
    return(
      <div>
        <h1>manipulate of two numbers is : {this.state.result}</h1>

        <button onClick={()=>{this.AddHandler()}} >Add </button>
        

        <button onClick={()=>{this.SubHandler()}} >Sub </button>
       
        
        <button onClick={()=>{this.MultiHandler()}} >Mult </button>
       
        
        <button onClick={()=>{this.DivHandler()}} >Div </button>
        
      </div>
    );
  }
}
ReactDOM.render
(  
    <Calbutton/> ,
  document.getElementById('root')
)