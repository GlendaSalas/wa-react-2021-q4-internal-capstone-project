import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { server } from '../../../mocks/mockServer';
import React from 'react';

import App from '../../../App';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe.only('Product detail', () => {
  it('Render product detail', async () => {
    window.history.pushState({}, 'ProductList', '/product/YWI42hIAACwAy3ld');
    render(<App />);

    await waitFor(() => screen.getByTestId('product-detail-name'));
    expect(screen.getByTestId('product-detail-name')).toBeInTheDocument();
    expect(screen.getByTestId('product-detail-sku')).toBeInTheDocument();
    expect(screen.getByTestId('product-detail-description')).toBeInTheDocument();
    expect(screen.getByTestId('product-detail-category-and-tags')).toBeInTheDocument();
    expect(screen.getByTestId('product-detail-price')).toBeInTheDocument();
  });

  it('Render product detail with no stock', async () => {
    window.history.pushState({}, 'ProductList', '/product/YWJAdRIAAC4Ay5sY');
    render(<App />);

    await waitFor(() => screen.getByTestId('product-detail-button'));
    expect(screen.getByTestId('product-detail-button')).toBeDisabled();
  });

  it('Add product to cart', async () => {
    window.history.pushState({}, 'ProductList', '/product/YWI42hIAACwAy3ld');
    render(<App />);

    await waitFor(() => screen.getByTestId('product-detail-button'));
    fireEvent.click(screen.getByTestId('product-detail-button'));

    await waitFor(() => screen.getByTestId('cart-badge'));
    expect(screen.getByTestId('cart-badge').innerHTML).toBe('1');
  });
});
