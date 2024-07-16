import Title from "../../../../components/main/productsList/productsSection/productSectionTitle/Title";
import Card from "../../../../components/main/productsList/productsSection/productCard/Card";
import styles from "./productsSection.module.css";

const ProductsSection = () => {
  return (
    <div className={styles.womanBody}>
      {/* Title */}
      <Title />

      {/* Card list */}
      <Card />
    </div>
  );
};

export default ProductsSection;
