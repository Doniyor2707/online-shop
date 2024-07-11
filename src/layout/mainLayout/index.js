import { Outlet } from "react-router-dom"
import MainHeader from "../../components/main/header/mainHeader"
import { publicRoutes } from "../../constans/path"


const MainLayout = () => {
 
  const data = [
    {
      key: 1,
      title: "Shop",
      to: publicRoutes.home
    },

    {
      key: 2,
      title: "Men",
      to: publicRoutes.home
    },

    {
      key: 3,
      title: "Women",
      to: publicRoutes.men
    },

    {
      key: 4,
      title: "Combos",
      to: publicRoutes.home
    },

    {
      key: 5,
      title: "Joggers",
      to: publicRoutes.home
    },
  ]


  return (
    <div className="container">
      {/* Headres */}
      <MainHeader data={data}/>


      <Outlet/>  
    </div>
  )
}

export default MainLayout