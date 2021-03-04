import React, { useEffect, useRef, useState } from 'react';
import iconCharacter from '../../../assets/characters/1.png';
import clx from 'classnames';

import './Character.scss';
import { gameSave } from '../../utils/save';

export default function Character({charOnTop, jumpPortal, onFinish}) {
  const [isJumping, setIsJumping] = useState({up: false, down: false});

  const that = useRef(null);
  const jumpState = useRef(isJumping);

  jumpState.current = isJumping

  useEffect(() => {
    if (charOnTop) {
      setIsJumping({up: false, down: false})
    } else if (charOnTop === false) {
      setIsJumping({up: false, down: true})
    }
  }, [charOnTop])

  useEffect(() => {
    if (jumpPortal) {
      that.current.onanimationend = () => {
        onFinish('won');
      }
    }
  }, [jumpPortal])

  function handleKeyPress(e) {
    if (!jumpState.current.up && !jumpState.current.down && [' ', 'ArrowUp'].includes(e.key)) {
      if (that.current) {
        const shiftY = window.innerHeight - Math.round(that.current.getBoundingClientRect().bottom)
        const translate = `translateY(-${shiftY}px)`
        that.current.style.transform = translate;

        setIsJumping({up: true, down: false});

        that.current.ontransitionend = () => {
          if (that.current.style.transform === translate) {
            const deltaTime = (window.innerHeight - that.current.getBoundingClientRect().bottom - 200) / 800;
            that.current.style.transitionDuration = `${deltaTime}s`;
            that.current.style.transform = '';
          }
          setIsJumping({up: false, down: true})

          that.current.ontransitionend = () => {
            that.current.style.transitionDuration = '';
            setIsJumping({up: false, down: false})
          };
        }
      }
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyPress);
  }, []);

  const classnames = clx({
    character: true,
    jumping: isJumping.up,
    falling: isJumping.down,
    'on-top': charOnTop,
    'in-portal': jumpPortal
  })

  const theme = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <img className={classnames} src={iconCharacter} ref={that} style={{filter: `hue-rotate(${theme[gameSave.charColor]}deg)`}}/>
  );
}