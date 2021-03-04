import React from 'react';
import { soundbank } from '../../configs/sounds';
import { gameSave } from '../../utils/save';

import './MenuButton.scss';

export default function MenuButton({src, className = '', action}) {
  return <div className={`menu-button ${className}`} onClick={action} onMouseEnter={() => {
    const audio = new Audio(soundbank.action)
    audio.volume = gameSave.sounds
    audio.play()
  }}>
    <img src={src}/>
  </div>
}