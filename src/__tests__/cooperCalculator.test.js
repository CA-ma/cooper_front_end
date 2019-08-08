import React from 'react';
import { shallow } from 'enzyme';

import CooperCalculator from '../modules/CooperCalculator'

describe('CooperCalculator returns result', () => {
  it('return poor with function', () => {
    const describedModule = CooperCalculator("23", "female", "1000");
    const moduleReturn = 'poor';
    expect(describedModule).toEqual(moduleReturn);
  })
})