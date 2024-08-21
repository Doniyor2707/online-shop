import { Box, Divider, Drawer, List, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BasketDrawerEmpty from "./BasketDrawerEmpty";
import { useCallback } from "react";
import BasketDrawerList from "./BasketDrawerList";
import {
  decBasketItem,
  incBasketItem,
  removeToBasket,
  selectedBasketProducts,
} from "../../../app/services/basket/basketSlice";

const BasketDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  // selector
  const products = useSelector(selectedBasketProducts);

  // drawer
  const handleCloseDrawer = useCallback(() => onClose(), [onClose]);

  // handle remove
  const handleRemove = useCallback(
    (productId) => {
      dispatch(
        removeToBasket({
          productId,
        })
      );
    },
    [dispatch]
  );

  // handle inc
  const handleInc = useCallback(
    (productId) => {
      dispatch(incBasketItem({ productId }));
    },
    [dispatch]
  );

  // handle dec
  const handleDec = useCallback(
    (productId) => {
      dispatch(decBasketItem({ productId }));
    },
    [dispatch]
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleCloseDrawer}>
      <Box px={2} py={3}>
        <Typography variant="h6">My Basket</Typography>
        <Divider />
        <List sx={{ minWidth: "420px" }} dense={true}>
          {!products.length ? (
            <BasketDrawerEmpty />
          ) : (
            products.map((product) => (
              <BasketDrawerList
                onRemove={handleRemove}
                onInc={handleInc}
                onDec={handleDec}
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

export default BasketDrawer;
