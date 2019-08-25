import './style.css'
import Data from './data.json';
import printMe from './print.js';
import key from './key.svg';
import Svg from './key.svg';

function header() {
  const node = document.createElement('a');
  node.setAttribute("href", "http://example.com")
  const text = document.createTextNode("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nisi esse expedita illum et quo sit iste officiis distinctio alias! Obcaecati unde dolor a voluptatum aut, maxime dicta expedita repellat.");
  node.appendChild(text);
  node.appendChild(svg());
  return node;
}

function anchor() {

}

function svg() {
  const container = document.createElement('div');
  container.innerHTML = Svg;
  const node = container.firstChild;
  return node;
}

function components() {
  return [header]
}

function render() {
  for (const component of components()) {
    document.body.appendChild(component());
  }
};

render();
