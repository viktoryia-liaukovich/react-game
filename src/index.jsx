import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Menu from './views/Menu/Menu';
import Level from './views/Level/Level';
import { load, parseSave, setDefault } from './utils/save';

const rootElement = document.getElementById('root');

function App() {
  const [currentView, setCurrentView] = useState('menu');

  useEffect(() => {
    if (!load()) setDefault();
    parseSave();
  }, [])

  return <>
    { currentView === 'level' &&
      <Level />
    }
    { currentView === 'menu' &&
      <Menu setCurrentView={setCurrentView}/>
    }
  </>;
}

ReactDOM.render(
  <App />,
  rootElement);