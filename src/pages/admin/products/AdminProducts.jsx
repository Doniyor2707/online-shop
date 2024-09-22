import { Box, Container, Grid } from "@mui/material";
import React, { useMemo } from "react";
import Card from "../../../components/main/productsList/productsSection/productCard/Card";
import { useGetAllProductsQuery } from "../../../app/services/productsApi/productsApi";

const AdminProducts = () => {
  const allProductsRes = useGetAllProductsQuery();

  const allProductsData = useMemo(() => {
    if (allProductsRes.data && allProductsRes.data.length > 0) {
      return allProductsRes.data;
    }
    return [];
  }, [allProductsRes.data]);

  return (
    <Container fixed>
      <Box p={4}>
      <Grid container spacing={1}>
        {allProductsRes.isLoading || allProductsRes.isFetching
          ? "Products loading..."
          : allProductsData.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card {...product} />
              </Grid>
            ))}
      </Grid>
      </Box>
     
    </Container>
  );
};

export default AdminProducts;
