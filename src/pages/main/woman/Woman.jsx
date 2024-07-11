import { Link } from "react-router-dom";
import styles from "./woman.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Woman = () => {
  return (
    <div className={styles.woman}>
      {/* sidebar */}
      <div className={styles.sidebar}>
        {/* Filter title */}
        <div className={styles.womanFilter}>
          <h1>Filter</h1>
          <div className={styles.contentImg}>
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83333 6.33333L2.83333 1.75M2.83333 18.25L2.83333 10M13.8333 18.25L13.8333 10M8.33333 18.25V13.6667M8.33333 10V1.75M13.8333 6.33333L13.8333 1.75M1 6.33333H4.66667M6.5 13.6667H10.1667M12 6.33333L15.6667 6.33333"
                stroke="#807D7E"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        {/* List */}
        <div className={styles.womanList}>
          <Link className={styles.womanLink}>
            <span>Tops</span>
            <NavigateNextIcon />
          </Link>
          <Link className={styles.womanLink}>
            <span>Printed T-shirts</span>
            <NavigateNextIcon />
          </Link>
          <Link className={styles.womanLink}>
            <span>Plain T-shirts</span>
            <NavigateNextIcon />
          </Link>
          <Link className={styles.womanLink}>
            <span>Kurti</span>
            <NavigateNextIcon />
          </Link>
          <Link className={styles.womanLink}>
            <span>Boxers</span>
            <NavigateNextIcon />
          </Link>
        </div>
      </div>

      {/* woman body */}
      <div className={styles.womanContent}></div>
    </div>
  );
};

export default Woman;
