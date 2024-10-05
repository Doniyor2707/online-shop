export const baseUrl = "https://api.escuelajs.co/api/v1";

const products_api = {
  allProductsGet: "/products",
  productGetById: (id) => `/products/${id}`,
  productUpdate: (id) => `/products/${id}`,
  productDelete: (id) => `/products/${id}`,
  productGetByCategory: (category) => `/products/category/${category}`,
};

const category_api = {
  allCategory: "/categories",
  updateCategory: (id)=> `/categories/${id}`,
  deleteCategory: (id)=> `/categories/${id}`,
  categoryId: (id) => `/categories/${id}`,
};

const auth_Url = {
  authUrl: "auth/login",
};



export { products_api, category_api, auth_Url };
