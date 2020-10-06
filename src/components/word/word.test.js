import React from 'react';
import { render } from "enzyme";
import Word from './Word';

it("should show word on startup", () => {
    const wrapper = render(<Word />)
    expect(wrapper.find('.word').text()).toBe('');
});


it("should show word on startup", () => {
    const wrapper = render(<Word />)
    expect(wrapper.find('.word').text()).toBe('');
});