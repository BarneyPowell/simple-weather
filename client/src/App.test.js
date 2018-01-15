import React from 'react';
import App from './App';
import DailyWeather from './components/DailyWeather';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('renders a DailyWeather component with a default location', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(DailyWeather)).toHaveLength(1);
});

it('renders a text box', () => {

});
