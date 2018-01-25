import React from 'react';
import App from './App';
import DailyWeather from './components/DailyWeather';
import LocationInput from './components/LocationInput';
import TestDataLink from './components/TestDataLink';

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('renders a DailyWeather component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(DailyWeather)).toHaveLength(1);
});

  it('renders a link to enable test data', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(TestDataLink)).toHaveLength(1);
});

it('renders an input box to collect location input', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(TestDataLink)).toHaveLength(1);
});