import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function  SignUp (props) {
    const [userSignup,setUserSignUp]=useState({
      username:"",
      email:"",
      phone:"",
      password:""
    });
     
    const handleInput=(event) =>{
 const name =event.target.name;
 const value=event.target.value;
  console.log(name, value)
       setUserSignUp({...userSignup,[name]:value});

    }
    const handleSubmit = (event)=>{
      alert('Are you sure you want to submit your details? '+this.username+" "+ this.email+" "+this.phone+""+this.password);
       event.preventDefault();
    }

    return (
      <>
       <form action="" onSubmit={handleSubmit}>
         <div>
           <label>Fullname :</label>
            <input type="text"  value={userSignup.username}
            onChange={handleInput}
            name="username" id="username"/>
          </div>

          <div>
           <label>Email :</label>
            <input type="text"  value={userSignup.email}
            onChange={handleInput}
            name="email" id="email"/>
          </div>

          <div>
           <label>Phone ::</label>
            <input type="text"  value={userSignup.phone}
            onChange={handleInput}
            name="phone" id="phone"/>
         </div>
         <div>
               <label>Password :</label>
                <input type="text"  value={userSignup.password}
                onChange={handleInput}
                name="password" id="password"/>
           </div>
            <button type="submit">SignUP</button>
       </form>
      
      </>

    )
    
}
ReactDOM.render(  
  <SignUp /> ,
document.getElementById('root')
); 

