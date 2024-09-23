import React, { Suspense } from "react";
import MainAppBar from "../../components/dashboard/mainAppBar/MainAppBar";
import DashboardSide from "../../components/dashboard/dashboardSide/DashboardSide";
import { Outlet } from "react-router-dom";
import { Box, Grid, Stack } from "@mui/material";
import { useState } from "react";

const AdminLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* header */}
      <MainAppBar setOpen={setOpen} />

      <Grid container>
        <Grid item xs={2}>
          <DashboardSide open={open} />
        </Grid>
        {/* side */}
        <Grid item xs={10}>
          <Box
            sx={{
              px: 6,
              pt: 4,
              height: "calc(100vh - 64px)",
              overflow: "auto",
            }}
          >
            <Suspense fallback={"Loading..."}>
              <Outlet />
            </Suspense>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminLayout;
