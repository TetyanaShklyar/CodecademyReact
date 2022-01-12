import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const images = [];
const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;
const animalFacts = (
  <div>
    <h1>{title === ''?'Click an animal for a fun fact':title}</h1>
    {background}
    <div className="animals">
      {images}      
    </div>
    <p id="fact"></p>
  </div>  
);
for (const animal  in animals) {
  images.push(
    <img
      key={animal}
      className= 'animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick = {displayFact}
    />
  )
}
function displayFact(e) {
  const fact = animals[e.target.alt].facts;
  const randomNun = Math.floor(Math.random()*fact.length);
  const facts = fact[randomNun];
  document.getElementById('fact').innerHTML = facts;
};


ReactDOM.render(animalFacts, document.getElementById('root'));
