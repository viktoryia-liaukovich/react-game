import React, { useEffect, useState } from 'react';
import Character from '../../components/Character/Character';
import Ground from '../../components/Ground/Ground';
import Obstacles from '../../components/Obstacles/Obstacles';

import config from '../../configs/levels';
import { musicbank } from '../../configs/sounds';

import './Level.scss'

//- TODO: change on config
import image0 from '../../../assets/backgrounds/0.png';
import image1 from '../../../assets/backgrounds/1.jpg';
import image2 from '../../../assets/backgrounds/2.jpg';
import FinalModal from '../../components/FinalModal/FinalModal';
import { gameSave } from '../../utils/save';

export default function Level({setIsFinished}) {
  const [charOnTop, setCharOnTop] = useState(null);
  const [jumpPortal, setJumpPortal] = useState(null);
  const backgrounds = [image0, image1, image2];

  useEffect(() => {
    setTimeout(() => {
      musicbank.level.play();
      musicbank.menu.pause();
      musicbank.menu.currentTime = 0
    }, 1000);
  }, [])

  return <>
    <div className='level' style={{
      backgroundImage: `url(${backgrounds[gameSave.backgroundColor]})`
    }}>
      <Character onFinish={setIsFinished} charOnTop={charOnTop} jumpPortal={jumpPortal}/>
      <Ground texture={backgrounds[gameSave.backgroundColor]}/>
      <Obstacles onFinish={setIsFinished} config={config.test.obstacles} setOnTop={setCharOnTop} setJumpPortal={setJumpPortal}/>
    </div>
  </>
}