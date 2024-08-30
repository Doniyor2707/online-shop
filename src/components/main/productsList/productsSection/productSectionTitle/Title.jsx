import { Link } from "react-router-dom";
import styles from "./title.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.titleBody}>
      {title ? (
        <h1 className={styles.title}>{title}</h1>
      ) : (
        <h1 className={styles.title}>All</h1>
      )}
      <div className={styles.titleLink}>
        <Link>New</Link>
        <Link>Recommended</Link>
      </div>
    </div>
  );
};

export default Title;
