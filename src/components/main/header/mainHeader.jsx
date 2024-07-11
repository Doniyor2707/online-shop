import styles from "./MainHeader.module.css";
import Logo from "../../../assets/Icon/Logo.svg";
import { Link } from "react-router-dom";
import SearchInput from "../../searchBox/SearchInput";
import { IconButton } from "@mui/material";
import {
  FavoriteBorderOutlined,
  PermIdentityOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useCallback, useState } from "react";

const MainHeader = ({ data }) => {
  // state
  const [searchVal, setSearchVal] = useState("");

  // Handle Search value
  const handleChangeSearch = useCallback((val) => {
    setSearchVal(val);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.body}>
        {/* Logo */}
        <div className={styles.mainLogo}>
          <img className={styles.logo} src={Logo} alt="Logo" />
        </div>
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
          <IconButton aria-label="Favourites">
            <PermIdentityOutlined />
          </IconButton>
          <IconButton aria-label="Favourites">
            <ShoppingCartOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
