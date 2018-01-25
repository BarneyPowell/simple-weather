import React from 'react';
import DailyWeather from './';
import generateTestWeather from '../../lib/generateTestWeather';
import DailyForecastRow from './DailyForecastRow';

it('should render without crashing', () => {
    const wrapper = mount(<DailyWeather />);
    expect(wrapper).toMatchSnapshot();
});

it('should render with the supplied classname', () => {
    const wrapper = shallow(<DailyWeather className='test-weather' />);
    expect(wrapper.props().className).toContain('test-weather');
});

it('should render a message if there are no forecasts to display', () => {
    const wrapper = shallow(<DailyWeather />);
    expect(wrapper.text()).toContain('No forecast found');
    expect(wrapper.props().className).toContain('-empty');
});

it('should render a message if the forecasts are loading', () => {
    const wrapper = shallow(<DailyWeather isFetching={true} />);
    expect(wrapper.text()).toContain('Fetching forecast...');
    expect(wrapper.props().className).toContain('-isFetching');
});

it('should render a list of dates containing forecasts', () => {
    const testWeather = generateTestWeather();
    const wrapper = mount(<DailyWeather {...testWeather} />);
    expect(wrapper.find(DailyForecastRow)).toHaveLength(5);
});