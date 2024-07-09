import { lazy } from "react";


export const Login = lazy(()=> import("./authLogin/Login"))
export const Register = lazy(()=> import("./authRegister/Register"))