import styles from "./card.module.css";
import { memo, useCallback } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectedFavoriteProductsById,
} from "../../../../../app/services/favorite/favorite";

import {
  addToBasket,
  removeToBasket,
  selectedBasketProductsById,
} from "../../../../../app/services/basket/basketSlice";

import { IconButton, Stack, Typography } from "@mui/material";
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";

const Card = ({ id, title, image, price }) => {
  // dispatch
  const dispatch = useDispatch();
  // favorite
  const favoriteItem = useSelector(
    (state) => selectedFavoriteProductsById(state, id) // 1
  );

  const basketItem = useSelector((state) =>
    selectedBasketProductsById(state, id)
  );

  const handleFavoriteClick = useCallback(() => {
    if (!favoriteItem) {
      dispatch(
        addFavorite({
          id,
          title,
          price,
        })
      );
    } else {
      dispatch(removeFavorite({ productId: id }));
    }
  }, [id, title, price, favoriteItem, dispatch]);

  const handleAddBasket = useCallback(() => {
    dispatch(
      addToBasket({
        id,
        title,
        price,
      })
    );
  }, [dispatch, id, price, title]);

  const handleBasketItem = useCallback(() => {
    dispatch(
      removeToBasket({
        productId: id,
      })
    );
  }, [dispatch, id]);

  return (
    <div className={styles.card} key={id}>
      {/* image */}
      <div className={styles.cardImg}>
        <img src={image} alt="img" />
        <div className={styles.like} onClick={handleFavoriteClick}>
          <FavoriteIcon color={Boolean(favoriteItem) ? "error" : "action"} />
        </div>
      </div>

      <div className={styles.cardTitle}>
        <div className={styles.title}>
          {title.length > 10 ? (
            <Typography>{title.substring(0, 20)}...</Typography>
          ) : (
            <Typography>{title}...</Typography>
          )}
        </div>
        <Stack direction={"column"} alignItems={"flex-end"}>
          <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
            {price}$
          </Typography>
          {!basketItem ? (
            <IconButton
              variant="primary"
              color="primary"
              onClick={handleAddBasket}
            >
              <AddShoppingCart />
            </IconButton>
          ) : (
            <IconButton
              variant="primary"
              color="error"
              onClick={handleBasketItem}
            >
              <RemoveShoppingCart />
            </IconButton>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default memo(Card);
