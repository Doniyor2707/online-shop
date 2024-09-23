import CategoryIcon from "@mui/icons-material/Category";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { adminRoutes } from "../../../constans/path";
import DashboardSideItem from "./DashboardSideItem";

const listData = [
  {
    key: 1,
    label: "Dashboard",
    route: adminRoutes.home,
    icon: <InsertChartIcon />,
  },
  {
    key: 2,
    label: "Products",
    route: adminRoutes.products,
    icon: <ShoppingCartIcon />,
  },
  {
    key: 3,
    label: "Categories",
    route: adminRoutes.categories,
    icon: <CategoryIcon />,
  },
];

export default function DashboardSide() {
  const { pathname } = useLocation();

  return (
    <>
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
        {listData.map((item) => {
          const isActive =
            pathname === item.route ||
            (item.route.split("/").length > 2 && pathname.startsWith(item.route));

          return (
            <DashboardSideItem key={item.route} {...item} isActive={isActive} />
          );
        })}
      </List>
    </>
  );
}
