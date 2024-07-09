import { Route } from "react-router-dom"
import { authRoutes } from "./constans/path"


const Router = () => {
  return (
    // auth
   <Route path={authRoutes.login} element> 

   </Route>
  )
}

export default Router