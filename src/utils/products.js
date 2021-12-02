const parseProducts = (productInput) => {
  let _a;
  const parsedProducts =
    ((_a = productInput.results) === null || _a === void 0
      ? void 0
      : _a.map((result) => {
          let _a, _b, _c;
          return {
            id: result.id,
            name: result.data.name,
            sku: result.data.sku,
            imageUrl: result.data.mainimage.url,
            category: result.data.category.id,
            stock: result.data.stock,
            price: result.data.price,
            images:
              ((_a = result.data.images) === null || _a === void 0 ? void 0 : _a.map((image) => image.image.url)) || [],
            categorySlug: result.data.category.slug,
            tags: result.tags || [],
            description:
              (result.data.description &&
                ((_b = result.data.description[0]) === null || _b === void 0 ? void 0 : _b.text)) ||
              '',
            specs:
              (_c = result.data.specs) === null || _c === void 0
                ? void 0
                : _c.map((spec) => ({
                    specName: spec.spec_name,
                    specValue: spec.spec_value,
                  })),
          };
        })) || [];
  return {
    products: parsedProducts,
    pagination: {
      totalPages: productInput.total_pages,
      page: productInput.page,
      totalResults: productInput.total_results_size,
    },
  };
};
export { parseProducts };
