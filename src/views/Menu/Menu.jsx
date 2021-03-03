import React, { useEffect } from 'react'
import MenuButton from '../../components/MenuButton/MenuButton';

import character from '../../../assets/sprites/player.png';
import play from '../../../assets/sprites/play.png';
import settings from '../../../assets/sprites/settings.png';

import music from '../../configs/sounds';

import './Menu.scss';

export default function Menu({setCurrentView}) {
  useEffect( () => {
    music.menu.autoplay = true;
  }, [])

  return (
    <div className="menu">

      <MenuButton src={character} action={() => console.log('прувет')}/>
      <MenuButton src={play} className='menu-button_large' action={() => setCurrentView('level')}/>
      <MenuButton src={settings} />
    </div>
  )
}