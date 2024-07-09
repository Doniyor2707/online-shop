import styles from "./MainHeader.module.css";
import Logo from "../../../assets/Icon/Logo.svg";
import { Link } from "react-router-dom";
import SearchInput from "../../searchBox/SearchInput";

const MainHeader = ({ data }) => {
  return (
    <div className={styles.header}>
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

      <SearchInput />
    </div>
  );
};

export default MainHeader;
