import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Modal from "./modal";
import { Header } from '../gameheader/GameHeaderStyles';

const header = 'Modal Header';
const footer = 'Modal Footer';
const display = 'none';

const handleCloseAction = () => {};

it ('should create word and input', () => {
  const wrapper = render(<Modal header={header} footer="footer" display={'none'} ><span id="test-id">Test Modal body</span> </Modal>);
expect(wrapper.findByText())
});
