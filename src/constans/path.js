// auth

const authRoutes = {
  login: "/login",
  register: "/register",
};

// public...

const publicRoutes = {
  home: "/",
  productsList: "/products/list",
  productsDetails: "/products/:productId/details",
};

export { authRoutes, publicRoutes };
