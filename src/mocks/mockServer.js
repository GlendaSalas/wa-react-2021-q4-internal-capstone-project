// src/mocks.js
import { API_BASE_URL } from '../utils/constants';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import bannersResponse from './en-us/featured-banners.json';
import baseResponse from './base.json';
import categoriesResponse from './en-us/product-categories.json';
import featuredProdcts from './en-us/featured-products.json';
import productDetail from './productDetail.json';
import productDetailEmpty from './productDetailEmpty.json';
import productsResponse from './en-us/products.json';
import search from './search.json';
import searchEmpty from './searchEmpty.json';

export const server = setupServer(
  rest.get(API_BASE_URL, (req, res, ctx) => {
    return res(ctx.json(baseResponse));
  }),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const query = req.url.searchParams.getAll('q').toString();
    switch (true) {
      case query.includes('banner'):
        return res(ctx.json(bannersResponse));
      case query.includes('category'):
        return res(ctx.json(categoriesResponse));
      case query.includes('fulltext'):
        if (query.includes('Unknown item')) {
          return res(ctx.json(searchEmpty));
        }
        return res(ctx.json(search));
      case query.includes('product') && query.includes('Featured'):
        return res(ctx.json(featuredProdcts));
      case query.includes('product'):
        const page = parseInt(req.url.searchParams.get('page') || '1');
        productsResponse.page = page;
        return res(ctx.json(productsResponse));
      case query.includes('document.id'):
        if (query.includes('YWJAdRIAAC4Ay5sY')) {
          return res(ctx.json(productDetailEmpty));
        }
        return res(ctx.json(productDetail));
      default:
        return res(ctx.json({}));
    }
  })
);
