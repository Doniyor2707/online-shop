import styles from './card.module.css'
import Image from "../../../../../assets/img/Rectangle 25.jpg"

const Card = () => {
  return (
    <div className={styles.card}>
        <img src={Image} alt="Img" />

        <div className={styles.cardTitle}>
            <div className={styles.title}>
                <h4>Black Sweatshirt with ....</h4>
                <p>Jhanvi’s Brand</p>
            </div>
            <div className={styles.price}>
                119$
            </div>
        </div>
    </div>
  )
}

export default Card