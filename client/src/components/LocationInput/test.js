import React from 'react';
import LocationInput from './';

it('should render without crashing', () => {
    const wrapper = shallow(<LocationInput />);
    expect(wrapper).toMatchSnapshot();
});