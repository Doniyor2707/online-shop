import styles from "./productsList.module.css";
import { Grid } from "@mui/material";
import FilterPanel from "./prosuctsFilter/FilterPanel";
import ProductsSection from "./productsSections/ProductsSection";
import { useDispatch } from "react-redux";

const ProductsList = () => {
  // dress filter
  const filterData = [
    {
      id: 1,
      label: "Tops",
    },
    {
      id: 2,
      label: "Printed T-shirts",
    },
    {
      id: 3,
      label: "Plain T-shirts",
    },
    {
      id: 4,
      label: "Kurti",
    },
    {
      id: 5,
      label: "Boxers",
    },
    {
      id: 6,
      label: "Full sleeve T-shirts",
    },
    {
      id: 7,
      label: "Joggers",
    },
    {
      id: 8,
      label: "Payjamas",
    },
    {
      id: 9,
      label: "Jeans",
    },
  ];

  return (
    <Grid container className={styles.woman}>
      {/* sidebar */}
      <Grid item md={3}>
        <FilterPanel val={filterData} />
      </Grid>

      {/* Products body */}
      <Grid item md={9}>
        <ProductsSection />
      </Grid>
    </Grid>
  );
};

export default ProductsList;
