import React from 'react';
import { shallow, mount } from 'enzyme';
import ChangeLocation from './ChangeLocation';


describe('Change Location Component', () => {
    let wrapper;
    let props = {
        updateLocation: () => {},
        onSubmit: () => {}
    }
    const event = {
        preventDefault: () => {}
    }
    
    beforeEach(() => {
      wrapper = shallow(<ChangeLocation {...props}/>);
    })

    describe('handleSubmit function works', () => {
        it('should exist', () => {
            expect(typeof ChangeLocation.prototype.handleSubmit).toBe('function')
        })

        it('should call updateLocation', () => {
            const spy = jest.spyOn(props, 'updateLocation')
            const changeLocation = new ChangeLocation(props);
            
            changeLocation.handleSubmit(event);
            expect(spy).toBeCalled();
        })

        it('should submit zipcode and update data', () => {
            const spy = jest.spyOn(ChangeLocation.prototype, 'handleSubmit')
            wrapper = shallow(<ChangeLocation {...props}/>);
            wrapper.find('form').simulate('submit', event);
            expect(spy).toBeCalled();
          });
    })
    
  })
  
  
  