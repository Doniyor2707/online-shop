// image
import image from "../../../assets/img/bert-b-rhNff6hB41s-unsplash 1.jpg";
// style
import styles from './imageSection.module.css'

const ImageSection = () => {
  return (
    <div className={styles.imageSection}>
      <img src={image} alt="img" />
    </div>
  );
};

export default ImageSection;
