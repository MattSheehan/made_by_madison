import { render, screen } from '@testing-library/react';
import App from '../../apps/App';

test('renders made_by_madison link', () => {
  render(<App />);
  const linkElement = screen.getByText(/made_by_madison/i);
  expect(linkElement).toBeInTheDocument();
});
