import Title from "../../../../components/main/productsList/productsSection/productSectionTitle/Title";
import Card from "../../../../components/main/productsList/productsSection/productCard/Card";
import styles from "./productsSection.module.css";
import { Grid } from "@mui/material";

const productsCard = [
  {
    id: 10,
    title: "Black Sweatshirt with",
    label: "Jhanvi’s Brand",
    price: "123$",    
  },
  {
    id: 20,
    title: "white T-shirt",
    label: "Hele'ns Brand",
    price: "12$",
  },
  {
    id: 30,
    title: "Levender Hoodie white",
    label: "Nike's Brand",
    price: "100$",
  },
];

const ProductsSection = () => {
  
  return (
    <Grid className={styles.productsSection}>
      {/* Title */}
      <Title />

      {/* Card list */}
      <Grid container spacing={2}>
        {productsCard.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card {...product}/>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductsSection;
