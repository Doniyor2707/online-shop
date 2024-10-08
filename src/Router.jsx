import { Route, Routes } from "react-router-dom";
// path
import { adminRoutes, authRoutes, publicRoutes } from "./constans/path";
// layot
import MainAuth from "./layout/auth";
import AdminLayout from "./layout/admin";
import { MainLayout } from "./layout";
// page
import {
  AddProducts,
  AdminHome,
  AdminProducts,
  Category,
  EditCategory,
  EditProduct,
  Home,
  Login,
  ProductsList,
  Register,
} from "./pages";

const Router = () => {
  return (
    <Routes>
      {/* auth */}
      <Route element={<MainAuth />}>
        <Route path={authRoutes.login} element={<Login />} />
        <Route path={authRoutes.register} element={<Register />} />
      </Route>

      {/* Layout */}
      <Route element={<MainLayout />}>
        <Route index path={publicRoutes.home} element={<Home />} />
        <Route path={publicRoutes.productsList} element={<ProductsList />} />
      </Route>

      {/* Admin */}
      <Route path={adminRoutes.home} element={<AdminLayout />}>
        <Route path={adminRoutes.home} element={<AdminHome />} />
        <Route path={adminRoutes.products} element={<AdminProducts />} />
        <Route path={adminRoutes.addProducts} element={<AddProducts />} />
        <Route path={adminRoutes.productsUpdate} element={<EditProduct />} />
        <Route path={adminRoutes.categoryUpdate} element={<EditCategory />} />

        <Route path={adminRoutes.categories} element={<Category />} />
      </Route>
    </Routes>
  );
};

export default Router;
