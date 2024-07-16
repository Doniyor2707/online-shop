import { Link } from "react-router-dom";
import styles from "./title.module.css"

const Title = () => {
  return (
    <div className={styles.titleBody}>
      <h1 className={styles.title}>Women’s Clothing</h1>
      <div className={styles.titleLink}>
        <Link>New</Link>
        <Link>Recommended</Link>
      </div>
    </div>
  );
};

export default Title;
