import React, { Suspense } from "react";
import MainAppBar from "../../components/dashboard/mainAppBar/MainAppBar";
import DashboardSide from "../../components/dashboard/dashboardSide/DashboardSide";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useState } from "react";



const AdminLayout = () => {

  const [open,setOpen] = useState(true)

  
  
  
  return (
    <>
      {/* header */}
      <MainAppBar setOpen={setOpen}/>

      <Stack flexDirection={"row"}>
        {/* side */}
        <DashboardSide open={open}/>

        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </Stack>
    </>
  );
};

export default AdminLayout;
