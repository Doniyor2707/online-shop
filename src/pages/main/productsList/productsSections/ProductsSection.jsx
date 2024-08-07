import Title from "../../../../components/main/productsList/productsSection/productSectionTitle/Title";
import Card from "../../../../components/main/productsList/productsSection/productCard/Card";
import styles from "./productsSection.module.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../../app/services/counter";

const ProductsSection = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.womanBody}>
      {/* Title */}
      <Title />

      <Button variant="contained" onClick={() => dispatch(increment())}>
        INC
      </Button>

      <Button
        variant="contained"
        onClick={() => dispatch(decrement())}
        color="error"
      >
        DEC
      </Button>
      {/* Card list */}
      <Card />
    </div>
  );
};

export default ProductsSection;
