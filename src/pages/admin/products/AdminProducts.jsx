import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";

import ProductsTable from "./component/ProductsTable";
import { useGetAllProductsQuery } from "../../../app/services/productsApi/productsApi";

const AdminProducts = () => {
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
      <Typography variant="h5" fontWeight={700} color={"#3F4646"} mb={5}>
        Products({allProductsData.length})
      </Typography>

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