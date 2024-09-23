import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DashboardSideItem = ({label, route, icon, isActive }) => {
  return (
    <ListItemButton LinkComponent={Link} to={route} selected={isActive}>
      <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default React.memo(DashboardSideItem);
