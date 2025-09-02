import React from "react";
import {render,screen} from '@testing-library/react'
import {describe,test,expect} from 'vitest'
import App from "./App";

test('render github actions heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /github actions/i });
  expect(heading).toBeInTheDocument();
});


test('contains h1 element', () => {
    const {container} = render(<App />);
    const heading = container.getByRole('heading', { level: 1 });
  expect(heading).toBeInTheDocument();
});

test('contains h2 element', () => {
  const {container} = render(<App />);
  const heading = container.getByRole('heading', { level: 2 });
  expect(heading).toBeInTheDocument();
});