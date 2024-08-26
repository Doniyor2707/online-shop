import { Outlet } from "react-router-dom";
import MainHeader from "../../components/main/header/mainHeader";
import { publicRoutes } from "../../constans/path";
import FavoriteDrawer from "../../components/main/favoriteDrawer/FavoriteDrawer";
import { useCallback, useMemo, useState } from "react";
import BasketDrawer from "../../components/main/basketDrawer/BasketDrawer";
import { useGetAllProductsQuery } from "../../app/services/productsApi/productsApi";



const MainLayout = () => {
  // state
  const [isOpenFav, setIsOpenFav] = useState(false);
  const [isOpenBas, setIsOpenBas] = useState(false);

  // Favourite Drawer
  const handleOpenFav = useCallback(() => setIsOpenFav(true), []);
  const handleCloseFav = useCallback(() => setIsOpenFav(false), []);


  // Favourite Drawer
  const handleOpenBas = useCallback(() => setIsOpenBas(true), []);
  const handleCloseBas = useCallback(() => setIsOpenBas(false), []);

  const allCategoryRes = useGetAllProductsQuery();
  

  const allCategoryData = useMemo(() => {
    if (allCategoryRes.data && allCategoryRes.data.length > 0) {
      return allCategoryRes.data;
    }
    return [];
  }, [allCategoryRes.data]);

  return (
    <div className="container">
      {/* Favorite drawer */}
      <FavoriteDrawer isOpen={isOpenFav} onClose={handleCloseFav} />

      {/* Basket Drawer */}
      <BasketDrawer isOpen={isOpenBas} onClose={handleCloseBas} />

      {/* Headres */}
      <MainHeader data={allCategoryData} dataRes = {allCategoryRes} onOpenFavourite={handleOpenFav} onOpenBasket={handleOpenBas}/>

      <Outlet />
    </div>
  );
};

export default MainLayout;
