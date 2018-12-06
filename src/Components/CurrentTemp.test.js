import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentTemp from './CurrentTemp';


describe('Current Temp Component', () => {
    let wrapper;
    beforeAll(() => {
      const tempProps = {
        id: 302,
        unit: 'imperial',
        temp: 75
      }
      wrapper = shallow(<CurrentTemp {...tempProps}/>)
      //wrapper.setProps(tempProps) - another way to send props?
    })
  
    it('Renders current temperature', () => {
      expect(wrapper.find('h1').text()).toBe('75°F')
    })
    
    it('CurrentTemp renders a weather Icon', () => {
      expect(wrapper.find('.wi-owm-302')).toHaveLength(1);
    });
  })
  