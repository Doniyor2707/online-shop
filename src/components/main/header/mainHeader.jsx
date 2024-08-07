import styles from "./MainHeader.module.css";
import Logo from "../../../assets/Icon/Logo.svg";
import { Link } from "react-router-dom";
import SearchInput from "./searchBox/SearchInput";
import { Badge, IconButton } from "@mui/material";
import {
  FavoriteBorderOutlined,
  PermIdentityOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useCallback, useState } from "react";
import { publicRoutes } from "../../../constans/path";
import { useSelector } from "react-redux";

const MainHeader = ({ data }) => {
  // state
  const [searchVal, setSearchVal] = useState("");

  // Handle Search value
  const handleChangeSearch = useCallback((val) => {
    setSearchVal(val);
  }, []);

  const counter = useSelector((store) => store.counter);

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
        <div>
          <IconButton aria-label="Favourites">
            <FavoriteBorderOutlined />
          </IconButton>
          <Badge badgeContent={counter.count} color="primary">
            <IconButton aria-label="Favourites">
              <PermIdentityOutlined />
            </IconButton>
          </Badge>
          <IconButton aria-label="Favourites">
            <ShoppingCartOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
