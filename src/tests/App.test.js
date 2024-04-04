import { render, screen } from '@testing-library/react';
import App from '../App';

test('RobloxInDoc', () => {
  render(<App />);
  const linkElement = screen.getByText(/Roblox/i);
  expect(linkElement).toBeInTheDocument();
});
