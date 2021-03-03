import React, { useEffect, useRef, useState } from 'react';
import clx from 'classnames';

import soundIcon from '../../../assets/sprites/sounds.png';
import musicIcon from '../../../assets/sprites/music.png';

import './Settings.scss';
import Toggler from '../Toggler/Toggler';

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
    if (inputRef.defaultValue === '0') handleClick();
  }, [])

  const classnames = clx({
    disabled: !isActive,
    'modal--item': true,
  })

  return (
    <div className={classnames}>
      <img src={icon} onClick={handleClick} onChange={handleChange}/>
      <input type='range' min='0' max='1' step='0.1' defaultValue='1' ref={inputRef}/>
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
      <p>Fullscreen</p>
      <Toggler action={toggleFullScreen}/>
    </div>
  )
}



export default function Settings({setOptionsModal}) {
  return (
    <div className='modal'>
      <div className='modal--content'>
        <h2>Settings</h2>
        <div className='close-cross' onClick={() => setOptionsModal(false)}></div>
        <SoundOption icon={musicIcon} onAction={() => {}}/>
        <SoundOption icon={soundIcon} onAction={() => {}}/>
        <FullScreen />
      </div>
    </div>
  )
}