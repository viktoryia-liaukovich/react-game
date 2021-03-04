import React, { useEffect, useState } from 'react';
import Character from '../../components/Character/Character';
import Ground from '../../components/Ground/Ground';
import Obstacles from '../../components/Obstacles/Obstacles';

import config from '../../configs/levels';
import { musicbank } from '../../configs/sounds';
import { save } from '../../utils/save';

import './Level.scss'

//- TODO: change on config
import image from '../../../assets/backgrounds/4.png';
import FinalModal from '../../components/FinalModal/FinalModal';

export default function Level({setCurrentView}) {
  const [charOnTop, setCharOnTop] = useState(null);
  const [jumpPortal, setJumpPortal] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      musicbank.level.play();
      musicbank.menu.pause();
      musicbank.menu.currentTime = 0
    }, 1000);
  }, [])

  return <>
    <div className='level' style={{
      backgroundImage: `url(${image})`
    }}>
      <Character onFinish={setIsFinished} charOnTop={charOnTop} jumpPortal={jumpPortal}/>
      <Ground texture={config.test.image}/>
      <Obstacles config={config.test.obstacles} setOnTop={setCharOnTop} setJumpPortal={setJumpPortal}/>
    </div>
    { isFinished &&
      <FinalModal type={isFinished} setModal={setIsFinished} setCurrentView={setCurrentView}/>
    }
  </>
}