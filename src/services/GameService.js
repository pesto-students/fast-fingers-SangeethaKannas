import data from '../data/dictionary.json';

const DIFFICULTY_LEVELS = {
  'EASY': 1,
  'MEDIUM': 1.5,
  'HARD': 2
}

const storeInSession = (itemName, item) => sessionStorage.setItem(itemName, typeof item == 'string' ? item : JSON.stringify(item));

const GameService = {
  getNewword: () => data[Math.floor(Math.random() * data.length)],

  getTimerValue: (word, difficultyFactor) => Math.ceil(word.length / difficultyFactor) * 1000,

  getDifficultyFactor: (gamesCount, currentDifficultyFactor) => (currentDifficultyFactor + (0.01 * gamesCount)),

  getCurrentDifficultyFactor: () => DIFFICULTY_LEVELS[sessionStorage.getItem('difficulty')],

  getUpdatedDifficultyFactor: (difficultyFactor) => {
    let newDifficultyLevel = '';
    if (difficultyFactor >= DIFFICULTY_LEVELS['MEDIUM'] && difficultyFactor < DIFFICULTY_LEVELS['HARD']) {
      newDifficultyLevel = 'MEDIUM';
    } else if (difficultyFactor >= DIFFICULTY_LEVELS['HARD']) {
      newDifficultyLevel = 'HARD';
    } else {
      newDifficultyLevel = 'EASY';
    }
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
  }
}

export default GameService;