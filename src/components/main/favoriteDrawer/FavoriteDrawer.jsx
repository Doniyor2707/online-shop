import { Box, Divider, Drawer, List, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorite,
  selectedFavoriteProducts,
} from "../../../app/services/favorite/favorite";
import FavouriteDrawerEmpty from "./FavouriteDrawerEmpty";
import { useCallback } from "react";
import FavouriteDrawerListItem from "./FavouriteDrawerListItem";

const FavoriteDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  // selector
  const products = useSelector(selectedFavoriteProducts);

  // drawer
  const handleCloseDrawer = useCallback(() => onClose(), [onClose]);

  // handle remove
  const handleRemove = useCallback(
    (productId) => {
      dispatch(
        removeFavorite({
          productId,
        })
      );
    },
    [dispatch]
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleCloseDrawer}>
      <Box px={2} py={3}>
        <Typography variant="h6">My Favorite</Typography>
        <Divider />
        <List sx={{ minWidth: "340px" }} dense={true}>
          {!products.length ? (
            <FavouriteDrawerEmpty />
          ) : (
            products.map((product) => (
              <FavouriteDrawerListItem
                onRemove={handleRemove}
                {...product}
                key={product.id}
              />
            ))
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default FavoriteDrawer;
