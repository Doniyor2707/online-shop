// mui
import { Box, ButtonGroup } from "@mui/material";
// logo
import Logo from "../../../assets/Icon/Logo.svg";
// components
import SearchInput from "../../main/header/searchBox/SearchInput";

// style
import styles from "./header.module.css";

const Header = () => {
  return (
    <Box
      className={styles.header}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      {/* icon */}
      <img src={Logo} alt="logo" />

      <SearchInput />
    
      <ButtonGroup>
        <button className={styles.btn}>Login</button>
        <button className={styles.btnOut}>Sign Up</button>
      </ButtonGroup>
    </Box>
  );
};

export default Header;
