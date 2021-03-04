import React, { useEffect } from 'react';
import Button from '../Button/Button';

import './FinalModal.scss';

import won from '../../../assets/sprites/you won.png';
import lost from '../../../assets/sprites/you lost.png';
import { gameSave, save } from '../../utils/save';

const images = {
  won,
  lost
}

export default function FinalModal({ type, setCurrentView, setModal }) {
  useEffect(() => {
    if (type === 'lost') {
      setCurrentView('menu')
    }

    save({
      attempts: Number(gameSave.attempts) + 1
    })
  }, []);

  return (
    <div className='modal'>
      <div className='modal--content'>
        <img src={images[type]} alt={type} className="title"/>
        { type !== 'lost' &&
          <Button
            action={() => {
              setCurrentView('menu')
              setModal(false)
            }}
            mod="center"
          >
            To Menu
          </Button>
        }
        { type === 'lost' &&
          <>
            <div className='close-cross' onClick={() => setModal(false)}></div>
            <Button
              action={() => {
                setCurrentView('level')
                setModal(false)
              }}
              mod="center"
            >
              Restart
            </Button>
          </>
        }
      </div>
    </div>
  )
}