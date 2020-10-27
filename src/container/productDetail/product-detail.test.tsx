
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MainDiv } from './components/mainDiv';
import { FirstColumn } from './components';

configure({ adapter: new Adapter() });

describe('ProductContainer', () => {
    const wrapper = shallow(<MainDiv/>)
  it('ProductContainer should renders', () => {
      expect(wrapper).toMatchSnapshot();
  });

/*it('render the productContainer title', () =>{
     const wrapper = shallow(<FirstColumn/>)
      expect(wrapper.find('p').html()).toMatch('Descripción del producto')
  })*/
});