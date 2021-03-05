import React, { useEffect, useRef, useState } from 'react';
import clx from 'classnames';

import soundIcon from '../../../assets/sprites/sounds.png';
import musicIcon from '../../../assets/sprites/music.png';
import settingsText from '../../../assets/sprites/settingsText.png';
import fullscreenText from '../../../assets/sprites/fullscreenText.png';
import autorunText from '../../../assets/sprites/autorun.png';
import hotkeysText from '../../../assets/sprites/hotkeys.png';

import Toggler from '../Toggler/Toggler';
import { changeMusicVolume, changeSoundsVolume } from '../../configs/sounds';
import { gameSave, save } from '../../utils/save';

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

  const query = matchMedia('all and (display-mode: fullscreen');

  return (
    <div className='modal--item'>
      <img src={fullscreenText} alt="Fullscreen" className="title"/>
      <Toggler action={toggleFullScreen} mod='fullscreen' defaultValue={query.matches}/>
    </div>
  )
}

function AutoRun() {
  const toggleAutorun = () => {
    save({
      autorun: !gameSave.autorun
    })
  }

  return (
    <div className='modal--item'>
      <img src={autorunText} alt="Autorun" className="title"/>
      <Toggler action={toggleAutorun} mod='autorun' defaultValue={gameSave.autorun}/>
    </div>
  )
}

function Hotkeys() {
  return (
    <div className='modal--item column'>
      <img src={hotkeysText} alt="Hotkeys" className="title"/>
      <p>o - options (this modal)</p>
      <p>t - theme chooser</p>
      <p>s - statistics</p>
      <p>p - play new game</p>
      <p>m - main menu</p>
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
        <AutoRun />
        <Hotkeys />
      </div>
    </div>
  )
}