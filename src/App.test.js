import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
    wrapper.setState({ id: 302, temperature: 32, units: 'imperial' })
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    expect(wrapper.find('div.App').length).toBe(1)
  });

  it('Renders heading', () => {
    expect(wrapper.contains("Today's Weather")).toEqual(true)
  })

  describe('convertUnits function', () => {
    it('should exist', () => {
      expect(typeof App.prototype.convertUnits).toBe('function')
    })

    it('should convert units properly', () => {
      expect(App.prototype.convertUnits('imperial', 32)).toEqual(0)
      expect(App.prototype.convertUnits('metric', 0)).toEqual(32)
    })
  })
})











