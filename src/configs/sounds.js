import menu from '../../assets/sounds/001 game_theme.mp3'
import level from '../../assets/sounds/002 the_seven_seas.mp3'
import action from '../../assets/sounds/hover.wav'
import { save } from '../utils/save';

export const musicbank = {
  menu: new Audio(menu),
  level: new Audio(level),
}

export const soundbank = {
  action: action
}

export function changeMusicVolume(value) {
  const bank = Object.values(musicbank);

  for (let i = 0; i < bank.length; i += 1) {
    bank[i].volume = value;
  }

  save({
    music: value,
  });
}

export function changeSoundsVolume(value) {
  save({
    sounds: value,
  });
}