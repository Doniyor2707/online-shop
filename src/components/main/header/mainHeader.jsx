import styles from "./MainHeader.module.css";
import Logo from "../../../assets/Icon/Logo.svg";
import { Link } from "react-router-dom";
import SearchInput from "./searchBox/SearchInput";
import { Badge, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  PermIdentityOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useCallback, useState } from "react";
import { publicRoutes } from "../../../constans/path";
import { useSelector } from "react-redux";
import { selectedFavoriteProducts } from "../../../app/services/favorite/favorite";
import { selectedBasketProducts } from "../../../app/services/basket/basketSlice";

const MainHeader = ({ data, dataRes, onOpenFavourite, onOpenBasket }) => {
  // state
  const [searchVal, setSearchVal] = useState("");

  // Handle Search value
  const handleChangeSearch = useCallback((val) => {
    setSearchVal(val);
  }, []);

  // favorite length
  const productsFavorite = useSelector(selectedFavoriteProducts);

  // basket length
  const productsBasket = useSelector(selectedBasketProducts);

  // Handle open favourite drawer
  const handleOpenFavouriteDrawer = useCallback(() => {
    onOpenFavourite();
  }, [onOpenFavourite]);

  const handleOpenBasketDrawer = useCallback(() => {
    onOpenBasket();
  }, [onOpenBasket]);

  return (
    <div className={styles.header}>
      <div className={styles.body}>
        {/* Logo */}
        <Link to={publicRoutes.home} className={styles.mainLogo}>
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>
        {/* List */}
        <ul className={styles.lists}>
          {dataRes.isLoading || dataRes.isFetching
            ? "Loading..."
            : data.map((item) => (
                <li className={styles.listItem} key={item}>
                  <Link className={styles.listItemLink} to={item.to}>
                    {item}
                  </Link>
                </li>
              ))}
        </ul>

        {/* Search Input */}
        <SearchInput value={searchVal} setValue={handleChangeSearch} />

        {/* 3 btn */}
        <div className={styles.favorites}>
          <IconButton onClick={handleOpenFavouriteDrawer}>
            <Badge badgeContent={productsFavorite.length} color="primary">
              <FavoriteBorderOutlinedIcon color="primary" />
            </Badge>
          </IconButton>
          <IconButton>
            <PermIdentityOutlined color="primary" />
          </IconButton>
          <IconButton onClick={handleOpenBasketDrawer}>
            <Badge badgeContent={productsBasket.length} color="primary">
              <ShoppingCartOutlined color="primary" />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
