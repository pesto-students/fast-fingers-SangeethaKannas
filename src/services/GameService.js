import data from '../data/dictionary.json';

const DIFFICULTY_LEVELS = {
  'EASY': 1,
  'MEDIUM': 1.5,
  'HARD': 2
}

const DATA_BY_LEVEL = {
  'EASY': data.filter(word => word.length < 6),
  'MEDIUM': data.filter(word => word.length >= 6 && word.length < 11),
  'HARD': data.filter(word => word.length >= 11)
}

const storeInSession = (itemName, item) =>
      sessionStorage.setItem(itemName, typeof item == 'string' ? item : JSON.stringify(item));

const GameService = {
  getNewword: (difficultyLevel) => {
    const data = DATA_BY_LEVEL[difficultyLevel];
    return data[Math.floor(Math.random() * data.length)]
  },

  getTimerValue: (word, difficultyFactor) => Math.ceil(word.length / difficultyFactor) * 1000,

  getDifficultyFactor: (gamesCount, currentDifficultyFactor) => (currentDifficultyFactor + (0.01 * gamesCount)),

  getCurrentDifficultyFactor: () => DIFFICULTY_LEVELS[sessionStorage.getItem('difficulty')],

  updatedDifficultyFactor: (difficultyFactor) => {
    let newDifficultyLevel = '';
    if (difficultyFactor >= DIFFICULTY_LEVELS['MEDIUM'] && difficultyFactor < DIFFICULTY_LEVELS['HARD']) {
      newDifficultyLevel = 'MEDIUM';
    } else if (difficultyFactor >= DIFFICULTY_LEVELS['HARD']) {
      newDifficultyLevel = 'HARD';
    } else {
      newDifficultyLevel = 'EASY';
    }
    console.log(newDifficultyLevel)
    storeInSession('difficulty', newDifficultyLevel)
  },

  getGames: () => JSON.parse(sessionStorage.getItem('games') || '[]'),

  getFromSession: () => sessionStorage.getItem('difficulty'),

  storeInSession: (itemName, item) => storeInSession(itemName, item),

  getDataFromSession: () => (  {
          name: sessionStorage.getItem('name'),
          difficulty: sessionStorage.getItem('difficulty')
      }),

  getBgColor: (wordLength, changesCount) => {
    return `rgb(${0 + (changesCount - wordLength)}, ${255 - (changesCount - wordLength)}, 0, 1)`
  },

  // getSyllables: word => {
  // }
}

export default GameService;
