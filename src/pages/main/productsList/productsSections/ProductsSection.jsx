import Title from "../../../../components/main/productsList/productsSection/productSectionTitle/Title";
import Card from "../../../../components/main/productsList/productsSection/productCard/Card";
import styles from "./productsSection.module.css";
import { Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../../../app/services/favorite/favorite";

const productsCard = [
  {
    productId: 10,
    title: "Black Sweatshirt with",
    label: "Jhanvi’s Brand",
    price: "123$",
    isFavoriteChecked: false,
  },
  {
    productId: 20,
    title: "white T-shirt",
    label: "Hele'ns Brand",
    price: "12$",
    isFavoriteChecked: false,
  },
  {
    productId: 30,
    title: "Levender Hoodie white",
    label: "Nike's Brand",
    price: "100$",
    isFavoriteChecked: false,
  },
];

const ProductsSection = () => {
  const [products, setProducts] = useState(productsCard);

  const dispatch = useDispatch();

  const handleChangeProducts = useCallback(
    (val) => {
      const newProducts = products.map((product) =>
        product.productId === val.productId
          ? { ...product, isFavoriteChecked: val.isFavoriteChecked }
          : product
      );

      console.log(newProducts);
      
      // setProducts(newProducts);      
    },
    []
  );

  return (
    <Grid className={styles.productsSection}>
      {/* Title */}
      <Title />

      {/* Card list */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.productId}>
            <Card {...product} setValue={handleChangeProducts} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductsSection;
