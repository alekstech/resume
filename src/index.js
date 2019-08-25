import './style.css'
import Data from './data.json';
import printMe from './print.js';

function component() {
  const btn = document.createElement('button');
  btn.innerHTML = Data.name;
  btn.onclick = printMe;
  return btn;
}

document.body.appendChild(component());