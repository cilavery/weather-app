import React from 'react';
import { shallow, mount } from 'enzyme';
import LocationInfo from './LocationInfo';


describe('Location Component', () => {
    it('LocationInfo component renders', () => {
      const wrapper = shallow(<LocationInfo location='New York' date='Tue Oct 02 2018' description='Clouds'/>)
      expect(wrapper.contains(<h2>New York</h2>)).toEqual(true);
      expect(wrapper.contains(<h3>Tue Oct 02 2018</h3>)).toEqual(true)
      expect(wrapper.contains(<h3><em>Clouds</em></h3>)).toEqual(true)
    });  
  })