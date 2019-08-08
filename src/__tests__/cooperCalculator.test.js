import React from 'react';
import { shallow } from 'enzyme';

import CooperCalculator from '../modules/CooperCalculator'

describe('CooperCalculator returns result', () => {
  it('return poor', () => {
    const describedModule = shallow(<CooperCalculator age = '23' gender = 'female' distance = '1000' />)
    const moduleReturn = 'poor'
    expect(describedModule.text()).toEqual(moduleReturn)
  })
})