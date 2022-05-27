import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import NoData from 'common/components/no-data/NoData';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const TITLE = 'title';
const MESSAGE = 'message';

it('Render NoData component', () => {
  act(() => {
    render(<NoData title={TITLE} message={MESSAGE} />, container);
  });

  expect(container.querySelector('h5').textContent).toBe(TITLE);
  expect(container.querySelector('p').textContent).toBe(MESSAGE);
});
