import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const ToggleDivImage = () => {

  /* Setup component state that tracks visibility of the image. Initially, we'll set
  the image to visible (toggled true) */
  const [toggled, setToggled] = React.useState(true);

  /* Define a function that toggles the visibility of the image */
  const toggleImage = () => setToggled(!toggled);

  return (
    <div>
      {/*Render toggle button, and bind toggleImage to click handler */}
      <button onClick={toggleImage}>Toggle Image</button>
      
      {/* Render image if toggled is truthy */}
      {toggled && <img src=  "https://source.unsplash.com/LYK3ksSQyeo" alt="Cat" />}
    </div>
  );
};
 
ReactDOM.render
(  
    <ToggleDivImage/> ,
  document.getElementById('root')
)