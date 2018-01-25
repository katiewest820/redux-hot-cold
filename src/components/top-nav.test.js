import React from 'react';
import { shallow, mount } from 'enzyme';
import {TopNav} from './top-nav';
import {generateAuralUpdate, GENERATE_AURAL_UPDATE, restartGame, RESTART_GAME} from '../actions/actions';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('dispatches generateAuralUpdate', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<TopNav dispatch={dispatch} />);
    wrapper.find('a[href="#get-status"]').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(generateAuralUpdate())
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE)
  });

  it('dispatches restartGame', () => {
    const dispatch = jest.fn();
    const correctAns = Math.floor(Math.random() * 100) + 1;
    const wrapper = mount(<TopNav dispatch={dispatch} />);
    wrapper.find('a[className="new"]').simulate('click')
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });
});
