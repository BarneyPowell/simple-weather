import React from 'react';
import TestDataLink from './';

it("should fire the onclick event if the button is clicked", () => {
    const sut = mount(<TestDataLink onClick={() => console.log('hello')}/>);
});