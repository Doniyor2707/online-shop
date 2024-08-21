import { Add, Delete, Remove } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { memo, useCallback, } from "react";
import image from "../../../assets/img/card.jpg";

const BasketDrawerList = ({ id,amount,title,onRemove,onInc,onDec }) => {

  // handle inc
  const handleIncrement = useCallback(()=> {
    onInc(id)
  },[id, onInc])

   // handle dec
   const handleDecrement = useCallback(()=> {
    onDec(id)
  },[id,onDec])


  // Handle remove
  const handleRemove = useCallback(() => {
    onRemove(id);
  }, [onRemove, id]);
  

  return (
    <>
      <ListItem
        secondaryAction={
          <Stack direction={"row"}>
          <Stack direction={"row"} alignItems={"center"} spacing={1} mr={2}>
            <IconButton color="error" onClick={handleDecrement}>
              <Remove/>
            </IconButton>
            <h3>{amount}</h3>
            <IconButton color="primary" onClick={handleIncrement}>
              <Add />
            </IconButton>
          </Stack>
          <IconButton
            edge="end"
            aria-label="delete"
            color="error"
            onClick={handleRemove}
          >
            <Delete fontSize="inherit" />
          </IconButton>
        </Stack>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image}
              alt="Product"
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItem>
    </>
  );
};

export default memo(BasketDrawerList);
