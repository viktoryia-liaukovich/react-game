import React, { useEffect, useRef, useState } from 'react';
import clx from 'classnames';

import soundIcon from '../../../assets/sprites/sounds.png';
import musicIcon from '../../../assets/sprites/music.png';
import settingsText from '../../../assets/sprites/settingsText.png';
import fullscreenText from '../../../assets/sprites/fullscreen.png';

import Toggler from '../Toggler/Toggler';
import { changeMusicVolume, changeSoundsVolume } from '../../configs/sounds';
import { gameSave } from '../../utils/save';

import './Settings.scss';

function SoundOption({name, icon, onAction}) {
  const [isActive, setIsActive] = useState(true);
  const inputRef = useRef(null);

  const handleClick = () => {
    if (isActive) {
      inputRef.current.value = '0';
      onAction('0');
    } else {
      inputRef.current.value = '1';
      onAction('1');
    }

    setIsActive(!isActive);
  }

  const handleChange = (e) => {
    if (e.target.value === '0' && isActive) {
      handleClick();
    } else if (!isActive) {
      setIsActive(!isActive);
      onAction(e.target.value);
    } else {
      onAction(e.target.value);
    }
  }

  useEffect(() => {
    onAction(inputRef.current.defaultValue);

    if (gameSave[name] === '0') handleClick();
  }, [])

  const classnames = clx({
    disabled: !isActive,
    'modal--item': true,
  })

  return (
    <div className={classnames}>
      <img className='sound' src={icon} onClick={handleClick} />
      <input type='range' min='0' max='1' step='0.1' defaultValue={gameSave[name]} ref={inputRef} onChange={handleChange}/>
    </div>
  )
}

function FullScreen() {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  return (
    <div className='modal--item'>
      <img src={fullscreenText} alt="Fullscreen" className="title"/>
      <Toggler action={toggleFullScreen}/>
    </div>
  )
}



export default function Settings({setOptionsModal}) {
  return (
    <div className='modal'>
      <div className='modal--content'>
        <img className="title" src={settingsText} alt="Settings"/>
        <div className='close-cross' onClick={() => setOptionsModal(false)}></div>
        <SoundOption name='music' icon={musicIcon} onAction={changeMusicVolume}/>
        <SoundOption name='sounds' icon={soundIcon} onAction={changeSoundsVolume}/>
        <FullScreen />
      </div>
    </div>
  )
}