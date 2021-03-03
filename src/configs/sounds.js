import menu from '../../assets/sounds/001 game_theme.mp3'
import level from '../../assets/sounds/002 the_seven_seas.mp3'
import action from '../../assets/sounds/hover.wav'

export const musicbank = {
  menu: new Audio(menu),
  level: new Audio(level),
  action: new Audio(action)
}

export function changeMusicVolume(value) {
  const bank = Object.values(musicbank);

  for (let i = 0; i < bank.length; i += 1) {
    bank[i].volume = value;
  }

  // variables.music = value;

  // save({
  //   music: value,
  // });
}

export function changeSoundsVolume(value) {
  // variables.sounds = value;

  // save({
  //   sounds: value,
  // });
}