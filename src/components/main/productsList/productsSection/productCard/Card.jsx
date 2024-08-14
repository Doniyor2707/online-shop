import styles from "./card.module.css";
import img from "../../../../../assets/img/cardImg.jpg";
import { memo, useCallback } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectedFavoriteProductsById,
} from "../../../../../app/services/favorite/favorite";

const Card = ({ id, title, label, price }) => {
  // dispatch
  const dispatch = useDispatch();
  // favorite
  const favoriteItem = useSelector((state) =>
    selectedFavoriteProductsById(state,id) // 1
  );

 

  const handleFavoriteClick = useCallback(() => {
    if (!favoriteItem) {
      dispatch(
        addFavorite({
          id,
          title,
          label,
          price,
        })
      );
    } else {
      dispatch(removeFavorite({ productId: id }));
    }
  }, [id, title, label, price, favoriteItem]);

  return (
    <div className={styles.card} key={id}>
      {/* image */}
      <div className={styles.cardImg}>
        <img src={img} alt="img" />
        <div className={styles.like} onClick={handleFavoriteClick}>
          <FavoriteIcon color={Boolean(favoriteItem) ? "error" : "action"} />
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
