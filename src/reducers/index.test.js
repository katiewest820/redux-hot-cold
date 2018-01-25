import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from '../actions/actions';

describe('makeGuess', () => {
  const initialTestState ={
    guesses: [10, 20, 30, 40],
    feedback: 'You are cold',
    correctAnswer: 34,
    auralStatus: 'aural test test test test'
  }

  it('shoud make new guess', () => {
    let state = initialTestState;
    state = reducer(state, makeGuess(100));
    expect(state).toEqual({
      guesses: [10, 20, 30, 40, 100],
      feedback: "You're Ice Cold...",
      correctAnswer: 34,
      auralStatus: 'aural test test test test'
    });
  });
});

describe('restartGame', () => { 
  const initialTestState ={
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100) + 1,
    auralStatus: 'aural test test test test'
  } 
  let correctAns = initialTestState.correctAnswer
  it('should reset game', () => {
    let state = initialTestState;
    state=reducer(state, restartGame(correctAns));
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: correctAns
    });
  });
});

describe('generateAuralUpdate', () => {
  const initialTestState = {
    guesses: [10, 20, 30, 40],
    feedback: "You're Ice Cold...",
    correctAnswer: 34,
    auralStatus: ''
  }
  const initialTestState2 = {
    guesses: [100],
    feedback: "You're Ice Cold...",
    correctAnswer: 34,
    auralStatus: ''
  }
  it('should test aural status plural', () => {
    let state = initialTestState;
    state=reducer(state, generateAuralUpdate());
    expect(state).toEqual({
      guesses: [40, 30, 20, 10],
      feedback: "You're Ice Cold...",
      correctAnswer: 34,
      auralStatus: "Here's the status of the game right now: You're Ice Cold... You've made 4 guesses. In order of most- to least-recent, they are: 40, 30, 20, 10",
    })
  })
  it('should test aural status singular', () => {
    let state = initialTestState2;
    state=reducer(state, generateAuralUpdate());
    expect(state).toEqual({
      guesses: [100],
      feedback: "You're Ice Cold...",
      correctAnswer: 34,
      auralStatus: "Here's the status of the game right now: You're Ice Cold... You've made 1 guess. It was: 100",
    })
  })
})




