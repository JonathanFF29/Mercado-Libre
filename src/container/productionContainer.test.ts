
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProductContainer } from './productContainer';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('ProductContainer', () => {
  test('snapshot renders', () => {
 
  });
});