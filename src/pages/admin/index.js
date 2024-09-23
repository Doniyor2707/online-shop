import { lazy } from "react";

export const AdminHome = lazy(() => import("./home/AdminHome"));
export const AdminProducts = lazy(() => import("./products/AdminProducts"));
export const AddProducts = lazy(() => import("./addProducts/AddProducts"));

export const Category = lazy(() => import("./categories/Category"));