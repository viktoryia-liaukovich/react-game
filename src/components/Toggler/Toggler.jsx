import React from 'react';

import './Toggler.scss';

export default function Toggler({action, defaultValue = false, mod=''}) {
  return (
    <div className='toggler'>
      <input type='checkbox' id={`togglerCheckbox_${mod}`} className={`checkbox ${mod}`} defaultChecked={defaultValue} onClick={action}/>
      <label htmlFor={`togglerCheckbox_${mod}`} className='checkbox-label'></label>
    </div>
  )
}