import { Outlet } from "react-router-dom";
import MainHeader from "../../components/main/header/mainHeader";
import { publicRoutes } from "../../constans/path";
import FavoriteDrawer from "../../components/main/favoriteDrawer/FavoriteDrawer";
import { useCallback, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  // Favourite Drawer
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div className="container">
      {/* Favorite drawer */}
      <FavoriteDrawer isOpen={isOpen} onClose={handleClose} />

      {/* Headres */}
      <MainHeader data={data} onOpenFavourite={handleOpen}/>

      <Outlet />
    </div>
  );
};

export default MainLayout;
