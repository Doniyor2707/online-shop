import CategoryIcon from "@mui/icons-material/Category";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import { Link } from "react-router-dom";
import { adminRoutes } from "../../../constans/path";
import { useState } from "react";

const activeData = [
  {
    key: 1,
    label: "Dashboard",
    value: "dashboard",
    route: adminRoutes.home,
    icon: <InsertChartIcon />,
  },
  {
    key: 2,
    label: "Products",
    value: "products",
    route: adminRoutes.products,
    icon: <ShoppingCartIcon />,
  },
  {
    key: 3,
    label: "Categories",
    value: "categories",
    route: adminRoutes.categories,
    icon: <CategoryIcon />,
  },
];

export default function DashboardSide({ope}) {
  const [active, setActive] = useState("dashboard");

  const handleClick = (val) => {
    setActive(val);
  };

  return (
    <>
      {

        <List
          sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Overview
            </ListSubheader>
          }
          dense
        >
          {activeData.map((data) => (
            <ListItemButton
              key={data.key}
              component={Link}
              to={data.route}
              sx={{
                background: data.value === active ? "#279ff5" : "inherit",
              }}
              onClick={() => handleClick(data.value)}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                {data.icon}
              </ListItemIcon>
              <ListItemText primary={data.label} />
            </ListItemButton>
          ))}
        </List>
      }
    </>
  );
}
