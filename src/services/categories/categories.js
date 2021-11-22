import CATEGORIES from '../../mocks/en-us/product-categories.json';

const getCategories = () => {
  const parsedCategories = CATEGORIES.results.map((result) => ({
    imageUrl: result.data.main_image.url,
    href: result.href,
    name: result.data.name,
    id: result.id,
  }));
  return parsedCategories;
};

export default getCategories;
