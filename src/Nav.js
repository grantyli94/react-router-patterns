import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <ul>
      <li><Link to="/dogs">Home</Link></li>
      {dogs.map(dog => {
        return <li><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
      })}
    </ul>
  );
}
// end

export default Nav;
