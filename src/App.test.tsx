import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';

configure({adapter: new Adapter()})

describe('<SearchHeader>', () => {
    it('should should render app component' , () => {
      const component = shallow(<App />);
      expect(component).toMatchSnapshot();
    })
})