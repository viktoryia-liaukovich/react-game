import React, { useEffect, useState } from 'react'
import MenuButton from '../../components/MenuButton/MenuButton';

import character from '../../../assets/sprites/player.png';
import play from '../../../assets/sprites/play.png';
import settings from '../../../assets/sprites/settings.png';

import { musicbank } from '../../configs/sounds';

import './Menu.scss';
import Settings from '../../components/Settings/Settings';

export default function Menu({setCurrentView}) {
  const [optionsModal, setOptionsModal] = useState(false);

  useEffect( () => {
    musicbank.menu.loop = true;
    musicbank.menu.autoplay = true;
  }, []);


  return (
    <div className="menu">
      <MenuButton src={character} action={() => console.log('прувет')}/>
      <MenuButton src={play} className='menu-button_large' action={() => {
        musicbank.menu.pause();
        setCurrentView('level');
      }}/>
      <MenuButton src={settings} action={() => setOptionsModal(true)}/>
      { optionsModal &&
        <Settings setOptionsModal={setOptionsModal}/>
      }
    </div>
  )
}