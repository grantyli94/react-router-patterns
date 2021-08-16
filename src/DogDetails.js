// {
//   name: "Whiskey",
//   age: 5,
//   src: whiskey,
//   facts: [
//     "Whiskey loves eating popcorn.",
//     "Whiskey is a terrible guard dog.",
//     "Whiskey wants to cuddle with you!"
//   ]
// }
import React from 'react';

function DogDetails({ dog }) {
  return (
    <div className="DogDetails">
      <img src={dog.src} alt={dog.name}/>
      <ul> Facts about {dog.name}:
        {dog.facts.map(fact => {
          return <li>{fact}</li>
        })}
      </ul>
    </div>
  );
}

export default DogDetails