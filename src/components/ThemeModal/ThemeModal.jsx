import React, { useEffect, useState } from 'react';
import { gameSave, save } from '../../utils/save';

import character from '../../../assets/sprites/char.png';
import arrow from '../../../assets/sprites/Arrow.png';
import selectText from '../../../assets/sprites/choose theme.png';

import background from '../../../assets/backgrounds/0.png';

import './ThemeModal.scss';

export default function ThemeModal({setThemeModal}) {
  const SelectCharacter = () => {
    const theme = [0, 45, 90, 135, 180, 225, 270, 315];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setIndex(Number(gameSave.charColor));
    }, [])

    const handleClick = (dir) => {
      let num = 0;
      if (index + dir > theme.length - 1) {
        num = 0;
      } else if (index + dir < 0){
        num = theme.length - 1;
      } else num = index + dir;

      save({
        charColor: num,
      })
      setIndex(num);
    }

    return (
      <div className='theme'>
        <img src={arrow} className='arrow left' onClick={() => handleClick(-1)}/>
        <img src={character} className='theme-character' style={{filter: `hue-rotate(${theme[index]}deg)`}}/>
        <img src={arrow} className='arrow' onClick={() => handleClick(1)}/>
      </div>
    )
  }

  const SelectBackground = () => {
    const theme = [0, 240, 290];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setIndex(Number(gameSave.backgroundColor));
    }, [])

    const handleClick = (dir) => {
      let num = 0;
      if (index + dir > theme.length - 1) {
        num = 0;
      } else if (index + dir < 0){
        num = theme.length - 1;
      } else num = index + dir;

      save({
        backgroundColor: num,
      })
      setIndex(num);
    }

    return (
      <div className="theme">
        <img src={arrow} className='left arrow' onClick={() => handleClick(-1)}/>
        <img src={background} className='theme-character' style={{filter: `hue-rotate(${theme[index]}deg)`}}/>
        <img src={arrow} className='arrow' onClick={() => handleClick(1)}/>
      </div>
    )
  }

  return (
    <div className='modal'>
      <div className='modal--content'>
        <img src={selectText} alt="Choose theme" className="title"/>
        <div className='close-cross' onClick={() => setThemeModal(false)}></div>
        <SelectCharacter />
        <SelectBackground />
      </div>
    </div>
  )
}