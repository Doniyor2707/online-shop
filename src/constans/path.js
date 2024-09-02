
// Auth routes
const authRoutes = {
  login: "/login",
  register: "/register",
  resetPassword: "/resetPassword",
  verification: "/verification",
  createNewPassword: "/createNewPassword",
};


// public...

const publicRoutes = {
  home: "/",
  productsList: "/products/list",
  productsDetails: "/products/:productId/details",
};

export { authRoutes, publicRoutes };
