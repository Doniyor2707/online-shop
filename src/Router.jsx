import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "./constans/path";
import MainAuth from "./layout/auth";
import { Home, Login, Register, Women } from "./pages";
import { MainLayout } from "./layout";

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
        <Route index path={publicRoutes.home} element={<Home/>}/>
        <Route path={publicRoutes.men} element={<Women/>}/>
      </Route>
    </Routes>
  );
};

export default Router;
