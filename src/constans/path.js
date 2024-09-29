// Auth routes
const authRoutes = {
  login: "/login",
  register: "/register",
  resetPassword: "/resetPassword",
  verification: "/verification",
  createNewPassword: "/createNewPassword",
};

// public routes

const publicRoutes = {
  home: "/",
  productsList: "/products/list",
  productsDetails: "/products/:productId/details",
};

// admin routes
const adminRoutes = {
  home: "/admin",
  products: "/admin/products",
  addProducts: "/admin/products/addProducts",
  productsUpdate: "/admin/products/:productId/update",
  categories: "/admin/categories",
};

export { authRoutes, publicRoutes, adminRoutes };
