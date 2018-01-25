import React from 'react';
import { shallow } from 'enzyme';
import {GuessList} from './guess-list';

describe('<GuessList />', () => {

  let guesses = [2, 12];
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={guesses} />);
  });
});