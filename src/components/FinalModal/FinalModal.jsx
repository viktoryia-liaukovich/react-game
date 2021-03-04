import React from 'react';
import Button from '../Button/Button';

import './FinalModal.scss';

import won from '../../../assets/sprites/you won.png';
import lost from '../../../assets/sprites/you lost.png';

const images = {
  won,
  lost
}

export default function FinalModal({ type, setCurrentView, setModal }) {
  return (
    <div className='modal'>
      <div className='modal--content'>
        <img src={images[type]} alt={type} className="title"/>
        <Button
          action={() => {
            setCurrentView('menu')
            setModal(false)
          }}
          mod="center"
        >
          To Menu
        </Button>
      </div>
    </div>
  )
}