import React from 'react';
import { shallow } from 'enzyme';

import DisplayCooperResult from '../components/DisplayCooperResult';

describe('DisplayCooperResult component', () => {
  it('evaluates display female, poor result', () => {
    const describedComponent = shallow(<DisplayCooperResult age = "23" gender = "female" distance = "1000" />)
    const componentReturn = <p>For a 23 year-old female running a distance of 1000, the Cooper Test result is: poor.</p>
    expect(describedComponent.contains(componentReturn)).toEqual(true)
  })

  it('evaluates display female, average result', () => {
    const describedComponent = shallow(<DisplayCooperResult age = "23" gender = "female" distance = "2000" />)
    const componentReturn = <p>For a 23 year-old female running a distance of 2000, the Cooper Test result is: average.</p>
    expect(describedComponent.contains(componentReturn)).toEqual(true)
  })
})


