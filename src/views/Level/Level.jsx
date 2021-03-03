import React, { useState } from 'react';
import Character from '../../components/Character/Character';
import Ground from '../../components/Ground/Ground';
import './Level.scss'
import config from '../../configs/levels';
import Obstacles from '../../components/Obstacles/Obstacles';

//- TODO: change on config
import image from '../../../assets/backgrounds/4.png';

export default function Level() {
  const [charOnTop, setCharOnTop] = useState(null);
  const [jumpPortal, setJumpPortal] = useState(null);

  return (
    <div className='level' style={{
      backgroundImage: `url(${image})`
    }}>
      <Character charOnTop={charOnTop} jumpPortal={jumpPortal}/>
      <Ground texture={config.test.image}/>
      <Obstacles config={config.test.obstacles} setOnTop={setCharOnTop} setJumpPortal={setJumpPortal}/>
    </div>
  )
}