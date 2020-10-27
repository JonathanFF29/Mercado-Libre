import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Bar } from './component/bar';

configure({adapter: new Adapter()})

describe('<SearchHeader>', () => {
    it('should should render ' , () => {
        const wrapper = shallow(<Bar/>)
        expect(wrapper).toMatchSnapshot();
    })
})