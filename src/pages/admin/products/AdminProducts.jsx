import { Box, Button, Typography } from "@mui/material";
import React, { useMemo } from "react";
import AddIcon from "@mui/icons-material/Add";

import ProductsTable from "./component/ProductsTable";
import { useGetAllProductsQuery } from "../../../app/services/productsApi/productsApi";
// import { useNavigate } from "react-router-dom";
import { adminRoutes } from "../../../constans/path";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  // navigate
  // const navigate = useNavigate();

  // API
  const allProductsRes = useGetAllProductsQuery();

  // Memo

  const allProductsData = useMemo(() => {
    if (allProductsRes.data && allProductsRes.data.length > 0) {
      return allProductsRes.data;
    }
    return [];
  }, [allProductsRes.data]);

  return (
    <Box display={"flex"} flexDirection={"column"} p={2}>
      {/* Title */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5" fontWeight={700} color={"#3F4646"} mb={5}>
          Products({allProductsData.length})
        </Typography>

        <Button
          LinkComponent={Link}
          to={adminRoutes.addProducts}
          variant="contained"
          startIcon={<AddIcon />}
        >
          New product
        </Button>
      </Box>

      <Box>
        {/* Products list */}
        {allProductsRes.isLoading || allProductsRes.isFetching ? (
          "Products loading..."
        ) : (
          <ProductsTable rows={allProductsData} />
        )}
      </Box>
    </Box>
  );
};

export default AdminProducts;
