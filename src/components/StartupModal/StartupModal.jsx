import React from 'react';
import { changeMusicVolume, changeSoundsVolume, musicbank } from '../../configs/sounds';
import { gameSave } from '../../utils/save';
import Button from '../Button/Button';

import './StartupModal.scss';

export default function StartupModal({setIsStartup}) {
  const acceptHandler = () => {
    changeMusicVolume(Number(gameSave.music) || '0.1');
    changeSoundsVolume(Number(gameSave.sounds) || '0.1');

    musicbank.menu.play().then(() => {
      musicbank.menu.loop = true;
    });

    setIsStartup(false);
  }

  const declineHandler = () => {
    changeMusicVolume('0');
    changeSoundsVolume('0');

    setIsStartup(false);
  }

  return (
    <div className='modal'>
      <div className="modal--content">
        <h2>Turn on sound?</h2>
        <div className="buttons-wrapper">
          <Button mod='accept' action={acceptHandler}>Yes</Button>
          <Button mod='decline' action={declineHandler}>No</Button>
        </div>
      </div>
    </div>
  )
}