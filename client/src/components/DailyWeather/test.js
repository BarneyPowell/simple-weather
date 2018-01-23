import React from 'react';
import DailyWeather from './';

it('should render without crashing', () => {
    const wrapper = shallow(<DailyWeather />);
    expect(wrapper).toMatchSnapshot();
});


it('should render with the supplied classname', () => {
    const wrapper = shallow(<DailyWeather className='test-weather' />);
    expect(wrapper.props().className).toContain('test-weather');
});