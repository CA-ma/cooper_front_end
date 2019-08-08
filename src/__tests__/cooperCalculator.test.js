import React from 'react';
import { shallow } from 'enzyme';

import CooperCalculator from '../modules/CooperCalculator'

describe('CooperCalculator returns result', () => {
  it('return poor with function', () => {
    const describedModule = CooperCalculator("23", "female", "1000");
    const moduleReturn = 'poor';
    expect(describedModule).toEqual(moduleReturn);
  })

  it('return poor with module', () => {
    const describedModule = shallow(<CooperCalculator age="23" gender="female" distance="1000"/>);
    const moduleReturn = 'poor';
    expect(describedModule.text()).toEqual(moduleReturn);
  })

  it('return poor with module', () => {
    const describedModule = shallow(<CooperCalculator age="23" gender="female" distance="1000"/>);
    expect(describedModule.props()).toEqual(true);
  })
})