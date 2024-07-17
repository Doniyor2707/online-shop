import styles from "./card.module.css";
import img from "../../../../../assets/img/cardImg.jpg";
import { Link } from "react-router-dom";
import { memo } from "react";

const Card = () => {
  return (
    <div className={styles.card}>
      {/* image */}
      <div className={styles.cardImg}>
        <img src={img} alt="img" />
        <Link className={styles.like}>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.7199 2.7123C6.34507 1.1101 4.05247 0.679115 2.32991 2.14625C0.60735 3.61339 0.364838 6.06637 1.71757 7.80155C2.84228 9.24424 6.24604 12.287 7.3616 13.2718C7.48641 13.382 7.54882 13.4371 7.62161 13.4587C7.68514 13.4776 7.75465 13.4776 7.81819 13.4587C7.89098 13.4371 7.95338 13.382 8.07819 13.2718C9.19376 12.287 12.5975 9.24424 13.7222 7.80155C15.075 6.06637 14.862 3.59795 13.1099 2.14625C11.3577 0.694548 9.09472 1.1101 7.7199 2.7123Z"
              stroke="#3C4242"
              strokeWidth="1.26066"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className={styles.cardTitle}>
        <div className={styles.title}>
          <h4>Black Sweatshirt with ....</h4>
          <p>Jhanvi’s Brand</p>
        </div>
        <div className={styles.price}>
          <p>$123.00</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
