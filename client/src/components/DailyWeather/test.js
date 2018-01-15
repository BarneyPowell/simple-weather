import React from 'react';
import DailyWeather from './';

it('should render without crashing', () => {
    const wrapper = shallow(<DailyWeather />);
    expect(wrapper).toMatchSnapshot();
});