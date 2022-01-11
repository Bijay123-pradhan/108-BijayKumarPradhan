
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ButtonImg extends React.Component
{
  constructor()
  {
    super();
    this.randomHandler = this.randomHandler.bind(this);
    this.a=true;
  }

  randomHandler()
  {
    this.a=!this.a;
    console.log(this.a)
    if(this.a)
    {
      document.getElementById("img").innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XTIfBvecynI_oDCUO_kjCIkTAzadpCjIlg&usqp=CAU'></img>"
      console.log(this.image)
    }else{
      document.getElementById("img").innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_3u_sivbOws6Bwlq11HsSwsmP70G0bHfYw&usqp=CAU'></img>"
      console.log(this.image)
    }
    
   
  }  

  render()
  {
    return(
    <>
   <div id="img">

   </div>
   <div>
   <button onClick={this.randomHandler}>Button</button>
   </div>
    </>
    );
  }
}

ReactDOM.render(
  <ButtonImg  />,
  document.getElementById("root")
);