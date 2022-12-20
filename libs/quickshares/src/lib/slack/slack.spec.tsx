import { render } from '@testing-library/react';

import Slack from './slack';

describe('Slack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Slack />);
    expect(baseElement).toBeTruthy();
  });
});
