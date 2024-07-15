import Title from "./bodyTitle/Title";
import Card from "./productCard/Card";
import styles from "./womanBody.module.css";

const WomanBody = () => {
  return (
    <div className={styles.womanBody}>
      {/* Title */}
      <Title />

      {/* Card list */}
      <Card />
    </div>
  );
};

export default WomanBody;
