import React from 'react';
import { shallow } from 'enzyme';

import DisplayCooperResult from '../components/DisplayCooperResult';

describe('DisplayCooperResult component', () => {
  it('evaluates display female, poor result'), () => {
    const describedComponent = shallow(<DisplayCooperResult age = '23' gender = 'female' distance = '1000' />)
    const componentReturn = <p>Result: poor</p>
    expect(componentReturn.contains(result)).toEqual(true)
  }

  it('evaluates display female, average result'), () => {

  }
})


