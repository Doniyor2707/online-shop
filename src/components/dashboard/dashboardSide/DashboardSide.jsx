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
    id: 1,
    label: "Dashboard",
    route: adminRoutes.home,
    icon: <InsertChartIcon />,
  },
  {
    id: 2,
    label: "Products",
    route: adminRoutes.products,
    icon: <ShoppingCartIcon />,
  },
  {
    id: 3,
    label: "Categories",
    route: adminRoutes.categories,
    icon: <CategoryIcon />,
  },
];

export default function DashboardSide({ open }) {
  const { pathname } = useLocation();

  return (
    <>
      <List
        sx={{
          width: open ? 200 : 0,
          transition: "width 0.3s",
          bgcolor: "background.paper",
          overflow: "hidden",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        dense
      >
        <ListSubheader component="div" id="nested-list-subheader">
          Overview
        </ListSubheader>
        {listData.map((item) => {
          const isActive =
            pathname === item.route ||
            (item.route.split("/").length > 2 &&
              pathname.startsWith(item.route));

          return (
            <DashboardSideItem
              key={item.id}
              {...item}
              isActive={isActive}
              open={open}
            />
          );
        })}
      </List>
    </>
  );
}
