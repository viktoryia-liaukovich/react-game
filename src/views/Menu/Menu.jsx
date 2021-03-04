import React, { useEffect, useState } from 'react'
import MenuButton from '../../components/MenuButton/MenuButton';

import character from '../../../assets/sprites/player.png';
import play from '../../../assets/sprites/play.png';
import settings from '../../../assets/sprites/settings.png';
import logo from '../../../assets/sprites/GEOMETRY DASH.png';
import vika from '../../../assets/sprites/VENTSKUTSE VIKTORYIA.png';
import rsschool from '../../../assets/sprites/rsschool.png';
import statistics from '../../../assets/sprites/statistics.png';
import attempts from '../../../assets/sprites/attempts.png';

import { musicbank } from '../../configs/sounds';

import './Menu.scss';
import Settings from '../../components/Settings/Settings';
import ThemeModal from '../../components/ThemeModal/ThemeModal';
import { gameSave } from '../../utils/save';

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

  const LinkImg = ({src, alt, href}) => {
    return (
      <a href={href} target="_blank">
        <img src={src} alt={alt}/>
      </a>
    )
  }

  return <>
    <div className="menu">
      <img src={logo} className="logo" alt="GEOMETRY DASH"/>
      <MenuButton src={character} action={() => setThemeModal(true)}/>
      <MenuButton src={play} className='menu-button_large' action={() => {
        musicbank.menu.pause();
        setCurrentView('level');
      }}/>
      <MenuButton src={settings} action={() => setOptionsModal(true)}/>
      <section className="statistics">
        <img src={statistics} alt="statistics"/>
        <div className="attempts">
          <img src={attempts} alt="attempts"/>
          <span>{gameSave.attempts}</span>
        </div>
      </section>
      <footer>
        <LinkImg src={vika} alt={"Viktoryia Ventskutse"} href="https://github.com/Ventskute"/>
        <LinkImg src={rsschool} alt="RS School" href="https://rs.school"/>
      </footer>
    </div>
    { optionsModal &&
      <Settings setOptionsModal={setOptionsModal}/>
    }
    { themeModal &&
      <ThemeModal setThemeModal={setThemeModal} />
    }
  </>
}