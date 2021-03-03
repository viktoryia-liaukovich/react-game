import React from 'react';

import './MenuButton.scss';

export default function MenuButton({src, className = '', action}) {
  return <div className={`menu-button ${className}`} onClick={action}>
    <img src={src}/>
  </div>
}