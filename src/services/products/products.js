/* eslint-disable no-undefined */
import FEATURED_PRODUCTS from '../../mocks/en-us/featured-products.json';
import PRODUCTS from '../../mocks/en-us/products.json';

const parseProducts = (productInput) => {
  let _a;
  const parsedProducts =
    ((_a = productInput.results) === null || _a === void 0
      ? void 0
      : _a.map((result) => ({
          id: result.id,
          name: result.data.name,
          sku: result.data.sku,
          imageUrl: result.data.mainimage.url,
          category: result.data.category.id,
          stock: result.data.stock,
          price: result.data.price,
        }))) || [];
  return parsedProducts;
};

const parseLimit = (products, limit) => (typeof limit !== undefined ? products.slice(0, limit) : products);

const getFeaturedProducts = (limit) => {
  const parsedProducts = parseProducts(FEATURED_PRODUCTS);
  return parseLimit(parsedProducts, limit);
};

const getProducts = (limit) => {
  const parsedProducts = parseProducts(PRODUCTS);
  return parseLimit(parsedProducts, limit);
};

export { getFeaturedProducts, getProducts };
