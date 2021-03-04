import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Menu from './views/Menu/Menu';
import Level from './views/Level/Level';
import { load, parseSave, setDefault } from './utils/save';
import StartupModal from './components/StartupModal/StartupModal';

const rootElement = document.getElementById('root');

function App() {
  const [currentView, setCurrentView] = useState('menu');
  const [isStartup, setIsStartup] = useState(true);

  useEffect(() => {
    if (!load()) setDefault();
    parseSave();
  }, [])

  return <>
    { currentView === 'level' &&
      <Level setCurrentView={setCurrentView}/>
    }
    { currentView === 'menu' &&
      <Menu isStartup={isStartup} setCurrentView={setCurrentView}/>
    }
    { isStartup &&
      <StartupModal setIsStartup={setIsStartup}/>
    }
  </>;
}

ReactDOM.render(
  <App />,
  rootElement);