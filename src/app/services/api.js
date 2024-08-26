export const baseUrl = "https://fakestoreapi.com";

const products_api = {
  allProductsGet: "/products",
  productGetById: (id) => `/products/${id}`,
};

const category_api = {
  allCategory: "/category",
  categoryItem: (item) => `/category/${item}`,
};

export { products_api, category_api };
