import { lazy } from "react";


export const Home = lazy(()=>import(("./home/Home")))
export const ProductsList  = lazy(()=>import("./productsList/ProductsList"))
