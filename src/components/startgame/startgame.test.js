import React from 'react';
import { render } from "enzyme";
import { StartGame } from "./startgame";
import { getByAltText, getByPlaceholderText } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

test('renders app name', () => {
    const { getByText } = render(<StartGame />);
    const imgElement = getByAltText(/img/i);
    expect(imgElement).toBeInTheDocument()

    const headerElement = getByText(/fast fingers/i);
    expect(headerElement).toBeInTheDocument();

    const taglineElement = getByText(/the ultimate typing game/i)
    expect(taglineElement).toBeInTheDocument();

    const inputElement = getByPlaceholderText('TYPE YOUR NAME');
    expect(inputElement).toBeInTheDocument();

    const comboBoxElement = getByAltText('DIFFICULTY LEVEL');
    expect(comboBoxElement).toBeInTheDocument();

    expect(getByText('START GAME')).toBeInTheDocument();
});

test('Input does not allow special characters and invalidates tags', () => {
    //It should show validation errors
})

test('clicking on start game - starts the game', () => {

});


test('Start game button should be enabled only when user types in name and difficulty level', () => {
    const wrapper = mount(<StartGame />)
    const event = {
        target: {
            value: 'This is just for test'
        }
    }
    wrapper.find('button').is(['disabled']);
    wrapper.find('input').simulate('change', event)
    wrapper.find('button').is(['enabled']);
});
