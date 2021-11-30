import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('60759790', () => {
  it('should render text for h3', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Muebles RR/i);
    expect(linkElement).toBeInTheDocument();
  });
});
