import React from 'react';

function Rays({ classes }) {
  return (
    <svg className={classes} height="300" width="300" viewBox="0 0 300 300">
      <g fill-opacity=".05">
        <circle cx="150" cy="150" r="50" />
        <circle cx="150" cy="150" r="70" />
        <circle cx="150" cy="150" r="90" />
        <circle cx="150" cy="150" r="110" />
        <circle cx="150" cy="150" r="130" />
        <circle cx="150" cy="150" r="150" />
      </g>
    </svg> 
  )
}

export default Rays;
