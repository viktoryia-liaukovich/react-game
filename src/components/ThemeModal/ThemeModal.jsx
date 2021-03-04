import React, { useEffect, useState } from 'react';

import './ThemeModal.scss';
import character from '../../../assets/characters/1.png';
import arrow from '../../../assets/sprites/Arrow.png';
import { gameSave, save } from '../../utils/save';


export default function ThemeModal({setThemeModal}) {
  const SelectCharacter = () => {
    const theme = [0, 45, 90, 135, 180, 225, 270, 315];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setIndex(Number(gameSave.charColor));
    }, [])

    const handleClick = (dir) => {
      if (index + dir > theme.length - 1) {
        setIndex(0);
      } else if (index + dir < 0){
        setIndex(theme.length - 1)
      } else setIndex(index + dir);

      save({
        charColor: index + dir,
      })
    }

    return (
      <div className='theme'>
        <img src={arrow} className='left' onClick={() => handleClick(-1)}/>
        <img src={character} className='theme-character' style={{filter: `hue-rotate(${theme[index]}deg)`}}/>
        <img src={arrow} onClick={() => handleClick(1)}/>
      </div>
    )
  }

  return (
    <div className='modal'>
      <div className='modal--content'>
        <h2>Select theme</h2>
        <div className='close-cross' onClick={() => setThemeModal(false)}></div>
        <SelectCharacter />
      </div>
    </div>
  )
}