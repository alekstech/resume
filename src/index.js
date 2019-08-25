import './style.css'
import Data from './data.json';
import printMe from './print.js';
import key from './key.svg';
import Svg from './key.svg';



function component() {
  const element = document.createElement('div');

  element.innerHTML = Svg;

  return element;
}

document.body.appendChild(component());