import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Menu from './views/Menu/Menu';
import Level from './views/Level/Level';
import { load, parseSave, save, setDefault } from './utils/save';
import StartupModal from './components/StartupModal/StartupModal';
import FinalModal from './components/FinalModal/FinalModal';

const rootElement = document.getElementById('root');

function App() {
  const [currentView, setCurrentView] = useState('menu');
  const [isStartup, setIsStartup] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!load()) setDefault();
    parseSave();

    const query = matchMedia('all and (display-mode: fullscreen');

    query.onchange = (e) => {
      const checkbox = document.querySelector('.checkbox.fullscreen');
      checkbox && (checkbox.checked = query.matches);
    };
  }, [])

  return <>
    { currentView === 'level' &&
      <Level setIsFinished={setIsFinished} setCurrentView={setCurrentView}/>
    }
    { currentView === 'menu' &&
      <Menu isStartup={isStartup} setCurrentView={setCurrentView}/>
    }
    { isStartup &&
      <StartupModal setIsStartup={setIsStartup}/>
    }
    { isFinished &&
      <FinalModal type={isFinished} setModal={setIsFinished} setCurrentView={setCurrentView}/>
    }
  </>;
}

ReactDOM.render(
  <App />,
  rootElement);