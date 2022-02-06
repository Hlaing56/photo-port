/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact Form is rendering', () => {
  it('renders', () => {
    render(<ContactForm />);
  });
});

it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />)
    expect(asFragment()).toMatchSnapshot()
});


it('says Contatct me', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})

it('says Submit', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('subbutt')).toHaveTextContent('Submit')
})