import React from 'react';

import './Toggler.scss';

export default function Toggler({action}) {
  return (
    <div className='toggler'>
      <input type='checkbox' id='togglerCheckbox' className='checkbox' onClick={action}/>
      <label htmlFor='togglerCheckbox' className='checkbox-label'></label>
    </div>
  )
}