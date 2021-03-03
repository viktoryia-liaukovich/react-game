import React from 'react'

import "./Ground.scss";


export default function Ground(props) {
  const {texture} = props;

  return (
    <div className="ground" style={{
      backgroundImage: `url(${texture})`
    }}></div>
  );
}