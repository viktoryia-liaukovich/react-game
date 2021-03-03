import React, { useEffect, useRef, useState } from 'react';
import iconCharacter from '../../../assets/characters/1.png';
import clx from 'classnames';

import './Character.scss';

export default function Character({charOnTop, jumpPortal}) {
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

  function handleKeyPress(e) {
    if (!jumpState.current.up && !jumpState.current.down && [' ', 'ArrowUp'].includes(e.key)) {
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

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyPress);
  }, []);

  const classnames = clx({
    character: true,
    jumping: isJumping.up,
    falling: isJumping.down,
    'in-portal': jumpPortal
  })

  return (
    <img className={classnames} src={iconCharacter} ref={that}/>
  );
}