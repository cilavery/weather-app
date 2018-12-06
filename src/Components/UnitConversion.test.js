import React from 'react';
import { shallow, mount } from 'enzyme';
import UnitConversion from './UnitConversion';

describe('Unit Conversion Component', () => {
    it('UnitConversion component renders', () => {
      const wrapper = shallow(<UnitConversion unit='imperial'/>);
      expect(wrapper.find('.convert-unit')).toHaveLength(1);
    });
  })