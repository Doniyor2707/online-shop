import Title from "../../../../components/main/productsList/productsSection/productSectionTitle/Title";
import Card from "../../../../components/main/productsList/productsSection/productCard/Card";
import styles from "./productsSection.module.css";
import { Grid } from "@mui/material";
import { useGetAllProductsQuery } from "../../../../app/services/productsApi/productsApi";
import { useMemo } from "react";


const ProductsSection = () => {
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
    <Grid className={styles.productsSection}>
      {/* Title */}
      <Title />

      {/* Card list */}
      <Grid container spacing={2}>
        {allProductsRes.isLoading || allProductsRes.isFetching ?(
            "Products loading..." 
        ):(
          allProductsData.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card {...product} />
            </Grid>
          ))
        )}
       
      </Grid>
    </Grid>
  );
};

export default ProductsSection;
