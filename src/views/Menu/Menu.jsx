import React, { useEffect, useState } from 'react'
import MenuButton from '../../components/MenuButton/MenuButton';

import character from '../../../assets/sprites/player.png';
import play from '../../../assets/sprites/play.png';
import settings from '../../../assets/sprites/settings.png';

import { musicbank } from '../../configs/sounds';

import './Menu.scss';
import Settings from '../../components/Settings/Settings';
import ThemeModal from '../../components/ThemeModal/ThemeModal';

export default function Menu({isStartup, setCurrentView}) {
  const [optionsModal, setOptionsModal] = useState(false);
  const [themeModal, setThemeModal] = useState(false);

  useEffect( () => {
    if (!isStartup){
      musicbank.menu.play();
      musicbank.level.pause();
      musicbank.level.currentTime = 0
    };
  }, []);

  return <>
    <div className="menu">
      <MenuButton src={character} action={() => setThemeModal(true)}/>
      <MenuButton src={play} className='menu-button_large' action={() => {
        musicbank.menu.pause();
        setCurrentView('level');
      }}/>
      <MenuButton src={settings} action={() => setOptionsModal(true)}/>
    </div>
    { optionsModal &&
      <Settings setOptionsModal={setOptionsModal}/>
    }
    { optionsModal &&
      <Settings setOptionsModal={setOptionsModal}/>
    }
    { themeModal &&
      <ThemeModal setThemeModal={setThemeModal} />
    }
  </>
}