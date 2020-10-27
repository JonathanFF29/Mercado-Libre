
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProductContainer } from './productContainer';
import renderer from 'react-test-renderer'
import styled, {css} from 'styled-components';
import { MainDiv } from './components/mainDiv';
import { theme } from '../../src/assets/index';
configure({ adapter: new Adapter() });

describe('ProductContainer', () => {
  it('ProductContainer should renders', () => {
      const wrapper = shallow(<MainDiv theme={theme}/>)
      expect(wrapper).toMatchSnapshot();
  });
});