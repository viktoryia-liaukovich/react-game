export function save(data = {}) {
  const savedGame = JSON.parse(localStorage.getItem('react-game save vika'));
  const newData = { ...savedGame, ...data };
  localStorage.setItem('react-game save vika', JSON.stringify(newData));
  parseSave();
}

export function load() {
  return JSON.parse(localStorage.getItem('react-game save vika'));
}

export function setDefault() {
  save({
    music: '1',
    sounds: '1',
    attempts: '0',
    charColor: '0',
  });
}

export const gameSave = {

}

export function parseSave() {
  const saveData = load();
  Object.keys(saveData).forEach((key) => {
    gameSave[key] = saveData[key];
  });
}
