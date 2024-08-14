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

const MainHeader = ({ data,onOpenFavourite }) => {
  // state
  const [searchVal, setSearchVal] = useState("");

  // Handle Search value
  const handleChangeSearch = useCallback((val) => {
    setSearchVal(val);
  }, []);

  const products = useSelector(selectedFavoriteProducts);

  // Handle open favourite drawer
  const handleOpenFavouriteDrawer = useCallback(() => {
    onOpenFavourite();
  }, [onOpenFavourite]);

  return (
    <div className={styles.header}>
      <div className={styles.body}>
        {/* Logo */}
        <Link to={publicRoutes.home} className={styles.mainLogo}>
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>
        {/* List */}
        <ul className={styles.lists}>
          {data.map((item) => (
            <li className={styles.listItem} key={item.key}>
              <Link className={styles.listItemLink} to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Input */}
        <SearchInput value={searchVal} setValue={handleChangeSearch} />

        {/* 3 btn */}
        <div className={styles.favorites}>
          <IconButton onClick={handleOpenFavouriteDrawer}>
            <Badge badgeContent={products.length} color="primary">
              <FavoriteBorderOutlinedIcon color="primary" />
            </Badge>
          </IconButton>
          <IconButton>
            <PermIdentityOutlined color="primary" />
          </IconButton>
          <IconButton>
            <ShoppingCartOutlined color="primary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
