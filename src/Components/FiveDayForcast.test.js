import React from 'react';
import { shallow, mount } from 'enzyme';
import FiveDayForecast from './FiveDayForecast';


describe('Five Day Component', () => {
    it('FiveDayForecast component renders', () => {
      const forecast = [
        {dt: 1538654400,
         dt_txt: "2018-10-04 12:00:00",
         main: { temp: 72 },
         weather: {
           0: { id: 800 }
         }
        },
        {dt: 1538654400,
          dt_txt: "2018-10-05 12:00:00",
          main: { temp: 72 },
          weather: {
            0: { id: 800 }
          }
         },
         {dt: 1538654400,
          dt_txt: "2018-10-06 12:00:00",
          main: { temp: 72 },
          weather: {
            0: { id: 800 }
          }
         },
         {dt: 1538654400,
          dt_txt: "2018-10-07 12:00:00",
          main: { temp: 72 },
          weather: {
            0: { id: 800 }
          }
         },
         {dt: 1538654400,
          dt_txt: "2018-10-08 12:00:00",
          main: { temp: 72 },
          weather: {
            0: { id: 800 }
          }
         }
      ];
    
      const wrapper = shallow(<FiveDayForecast forecast={forecast}/>);
      expect(wrapper.find(".forecast-day")).toHaveLength(5);
    });
  })