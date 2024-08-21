import { Outlet } from "react-router-dom";
import MainHeader from "../../components/main/header/mainHeader";
import { publicRoutes } from "../../constans/path";
import FavoriteDrawer from "../../components/main/favoriteDrawer/FavoriteDrawer";
import { useCallback, useState } from "react";
import BasketDrawer from "../../components/main/basketDrawer/BasketDrawer";

const data = [
  {
    key: 1,
    title: "Shop",
    to: publicRoutes.home,
  },

  {
    key: 2,
    title: "Men",
    to: publicRoutes.home,
  },

  {
    key: 3,
    title: "Women",
    to: publicRoutes.men,
  },

  {
    key: 4,
    title: "Combos",
    to: publicRoutes.home,
  },

  {
    key: 5,
    title: "Joggers",
    to: publicRoutes.home,
  },
];

const MainLayout = () => {
  const [isOpenFav, setIsOpenFav] = useState(false);
  const [isOpenBas, setIsOpenBas] = useState(false);

  // Favourite Drawer
  const handleOpenFav = useCallback(() => setIsOpenFav(true), []);
  const handleCloseFav = useCallback(() => setIsOpenFav(false), []);


  // Favourite Drawer
  const handleOpenBas = useCallback(() => setIsOpenBas(true), []);
  const handleCloseBas = useCallback(() => setIsOpenBas(false), []);

  return (
    <div className="container">
      {/* Favorite drawer */}
      <FavoriteDrawer isOpen={isOpenFav} onClose={handleCloseFav} />

      {/* Basket Drawer */}
      <BasketDrawer isOpen={isOpenBas} onClose={handleCloseBas} />

      {/* Headres */}
      <MainHeader data={data} onOpenFavourite={handleOpenFav} onOpenBasket={handleOpenBas}/>

      <Outlet />
    </div>
  );
};

export default MainLayout;
