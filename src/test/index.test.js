// Link.react.test.js
import React from 'react';

import App from '../index';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter() });

describe('Link', () => {
  it('should render app', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  })
});