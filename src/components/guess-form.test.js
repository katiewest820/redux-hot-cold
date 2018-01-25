import React from 'react';
import { shallow, mount } from 'enzyme';
import {GuessForm} from './guess-form';
import { makeGuess } from '../actions/actions';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('dispatches makeGuess', () => {
    const dispatch = jest.fn();
    const value = '100';
    const wrapper = mount(
      <GuessForm dispatch={dispatch} />);
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });
});