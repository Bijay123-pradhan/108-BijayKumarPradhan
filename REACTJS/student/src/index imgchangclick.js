import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Dog(props) {
 props.target.setAttribute( 'src', 'https://source.unsplash.com/LYK3ksSQyeo');
  props.target.setAttribute('alt', 'dog');
}

const Cat = (
  <div>
<img src="https://source.unsplash.com/Qmox1MkYDnY" alt="cat" onClick={Dog}
  />
    
  </div>
);

ReactDOM.render(Cat, document.getElementById('root'));