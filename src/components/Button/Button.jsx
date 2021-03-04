import React from 'react';

import './Button.scss';

export default function Button({action, mod = '', children}) {
  return (
    <button
      className={`button ${mod && `button_${mod}`}`}
      title={children}
      onClick={action}
    >
      {children}
    </button>
  )
}