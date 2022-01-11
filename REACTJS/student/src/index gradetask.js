
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculategrade extends React.Component
{
  constructor()
  {
    super();
    this.handler = this.handler.bind(this);
    this.state={
      phy:"",
      chem:"",
      math:"",
      grade:"",
    }
  }
  handler()
  {
    var grade;
    var phy= document.getElementById("phy").value;
    var chem=document.getElementById("chem").value;
    var math=document.getElementById("math").value;
    phy=parseInt(phy);
    chem=parseInt(chem);
    math=parseInt(math);
    var total=((phy+chem+math)/3);
   if(total>=90 && total<=100)
   {
     grade="E";
   }else if(total>=80 && total<90)
   {
     grade = "A";
   }else if(total>=70 && total<80)
   {
     grade="B"
   }else if(total>=60 && total<70)
   {
     grade ="C"
   }else{
     grade="D"
   }
   this.setState(({
      phy:phy,
      chem:chem,
      math:math,
      grade:grade,
   }));
   console.log(grade);
   console.log(total);
  }  

  render()
  {
    return(
    <>
   
    
    <h2>you enter your marks and know your grade : </h2>
   
   <label> PHY :</label><input  className='inpt'  id="phy" type="text" defaultValue={this.state.phy}/>
    <label>CHEM:</label><input className='inpt'id="chem" type="text" defaultValue={this.state.chem}/>
    <label>MATH:</label> <input className='inpt' id="math" type="text" defaultValue={this.state.math}/>
     <br/><br/>
   <button className= {'btn1'}onClick={this.handler}>Create Grade</button>

     <h1> Your Grade is : {this.state.grade} </h1>
   
    </>
    );
  }
}

ReactDOM.render(
  <Calculategrade  />,
  document.getElementById("root")
);