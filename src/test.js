import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import LocationInfo from './Components/LocationInfo';
import CurrentTemp from './Components/CurrentTemp';
import FiveDayForecast from './Components/FiveDayForecast';
import UnitConversion from './Components/UnitConversion';
import ChangeLocation from './Components/ChangeLocation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('App renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains("Today's Weather")).toEqual(true)
});


it('LocationInfo component renders', () => {
  const wrapper = shallow(<LocationInfo location='New York' date='Tue Oct 02 2018' description='Clouds'/>)
  expect(wrapper.contains(<h2>New York</h2>)).toEqual(true);
  expect(wrapper.contains(<h3>Tue Oct 02 2018</h3>)).toEqual(true)
  expect(wrapper.contains(<h3><em>Clouds</em></h3>)).toEqual(true)
});

it('CurrentTemp component renders', () => {
  const wrapper = shallow(<CurrentTemp />);
  expect(wrapper.exists(".current-temp")).toEqual(true);
});


it('CurrentTemp renders a weather Icon', () => {
  let weatherIcon = 302;
  const wrapper = shallow(<CurrentTemp id={weatherIcon}/>);
  expect(wrapper.find('.wi-owm-302')).toHaveLength(1);
});

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

it('UnitConversion component renders', () => {
  const wrapper = shallow(<UnitConversion unit='imperial'/>);
  expect(wrapper.find('.convert-unit')).toHaveLength(1);
});

it('ChangeLocation component renders', () => {
  const wrapper = shallow(<ChangeLocation />);
  expect(wrapper.find('.change-location')).toHaveLength(1);
});


it('Test submit event in ChangeLocation component', () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow((<ChangeLocation onSubmit={mockCallBack()} />));
  wrapper.find('form',{ preventDefault () {} }).simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});



