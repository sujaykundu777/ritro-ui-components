'use strict';

const assert = require('assert').strict;
const React = require('react');
const { render, fireEvent } = require('@testing-library/react');
const Button = require('../src/components/Button');

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button label="Click me" onClick={() => {}} />);
    assert.strictEqual(getByText('Click me').tagName, 'BUTTON');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(getByText('Click me'));
    assert.strictEqual(handleClick.mock.calls.length, 1);
  });

  it('applies primary styles', () => {
    const { getByText } = render(<Button label="Click me" onClick={() => {}} primary />);
    const button = getByText('Click me');
    assert(button.classList.contains('bg-blue-500'));
    assert(button.classList.contains('text-white'));
  });

  it('applies secondary styles', () => {
    const { getByText } = render(<Button label="Click me" onClick={() => {}} secondary />);
    const button = getByText('Click me');
    assert(button.classList.contains('bg-gray-500'));
    assert(button.classList.contains('text-white'));
  });
});
