import { render } from '@testing-library/react';

import Quickshares from './quickshares';

describe('Quickshares', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Quickshares />);
    expect(baseElement).toBeTruthy();
  });
});
