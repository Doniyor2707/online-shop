export const baseUrl = "https://fakestoreapi.com";

const products_api = {
  allProductsGet: "/products",
  productGetById: (id) => `/products/${id}`,
};

const category_api = {
  allCategory: "/products/categories",
  categoryItem: (item) => `/products/categories/${item}`,
};

export { products_api, category_api };
