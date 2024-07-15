import { ExpandLess, ExpandMore } from "@mui/icons-material";
import styles from "./data.module.css";

const Data = ({ setOpen, open,value }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.sliderWomanItem} onClick={handleClick}>
      <h3 className={styles.title}>{value}</h3>
      {open ? (
        <ExpandLess sx={{ color: "#807d7e" }} />
      ) : (
        <ExpandMore sx={{ color: "#807d7e" }} />
      )}
    </div>
  );
};

export default Data;
