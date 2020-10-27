
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MainDiv } from './components';

configure({ adapter: new Adapter() });

describe('ProductContainer', () => {
  it('ProductContainer should renders', () => {
      const wrapper = shallow(<MainDiv/>)
      expect(wrapper).toMatchSnapshot();
  });
});