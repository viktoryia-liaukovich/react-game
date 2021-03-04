import React from 'react';
import Button from '../Button/Button';

import './finalModal.scss';

export default function FinalModal({ type, setCurrentView, setModal }) {
  return (
    <div className='modal'>
      <div className='modal--content'>
        <h2>You {type}!</h2>
        <Button action={() => {
          setCurrentView('menu')
          setModal(false)
        }}
        >
          To Menu
        </Button>
      </div>
    </div>
  )
}