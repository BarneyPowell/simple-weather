import React from 'react';
import LocationInput from './';

it('should render without crashing', () => {
    const wrapper = shallow(<LocationInput />);
    expect(wrapper).toMatchSnapshot();
});

it('should set the label to the appropriate value', () => {
    const wrapper = mount(<LocationInput label="test" />);
    expect(wrapper.find("label").text()).toEqual("test");
});