import Title from "./bodyTitle/Title"
import CardList from "./cardList/Card"
import styles from "./womanBody.module.css"

const WomanBody = () => {
  return (
    <div className={styles.womanBody}>
        {/* Title */}
        <Title/>
        

        {/* Card list */}
        <CardList/>
    </div>
  )
}

export default WomanBody