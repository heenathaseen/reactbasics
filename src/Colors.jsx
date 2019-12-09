import React from 'react';
import './Colors.scss';


const Colors = ({ color }) => (
  <div
    className="Colors"
    style={
    {
      background: color,
    }

  }
  >

    <p>{color}</p>
  </div>
);
export default Colors;
