import styles from "./card.module.css";
import img from "../../../../../assets/img/cardImg.jpg";
import { Link } from "react-router-dom";
import { memo, useCallback, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = ({
  setValue,
  productId,
  title,
  label,
  price,
  isFavoriteChecked,
}) => {
  // state
  const [isFavorite, setIsFavorite] = useState(isFavoriteChecked);

  // handle cilck favorite
  const handlClick = () => {
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    setValue({
      productId,
      title,
      label,
      price,
      isFavoriteChecked: isFavorite,
    });
  }, [setValue, isFavorite,title,price,label]);

  return (
    <div className={styles.card} key={productId}>
      {/* image */}
      <div className={styles.cardImg}>
        <img src={img} alt="img" />
        <div className={styles.like} onClick={handlClick}>
          <FavoriteIcon color={isFavorite ? "error" : "action"} />
        </div>
      </div>

      <div className={styles.cardTitle}>
        <div className={styles.title}>
          <h4>{title}</h4>
          <p>{label}</p>
        </div>
        <div className={styles.price}>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
