import { Inbox } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

const BasketDrawerEmpty = () => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100%", minHeight: "400px" }}
    >
      <Avatar sx={{ width: 80, height: 80, fontSize: "3rem" }}>
        <Inbox fontSize="inherit" />
      </Avatar>
      <Typography variant="subtitle1">My Basket</Typography>
    </Stack>
  );
};

export default memo(BasketDrawerEmpty);
