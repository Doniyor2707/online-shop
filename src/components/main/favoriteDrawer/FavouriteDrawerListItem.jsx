import { Delete } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { memo, useCallback } from "react";
import image from "../../../assets/img/card.jpg"

const FavouriteDrawerListItem = ({
  id,
  title,
  description,
  onRemove,
}) => {
  // Handle remove
  const handleRemove = useCallback(() => {
    onRemove(id);
  }, [onRemove, id]);

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={handleRemove}
        >
          <Delete fontSize="inherit" />
        </IconButton>
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
      <ListItemText primary={title} secondary={description} />
    </ListItem>
  );
};

export default memo(FavouriteDrawerListItem);
