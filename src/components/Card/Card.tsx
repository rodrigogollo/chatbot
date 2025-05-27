import AddToCart from "../AddToCart/AddToCart"
import styles from "./Card.module.css"

const Card = () => {
  return (
    <div className={styles.cardContainer} >
      <AddToCart />
    </div>
  )
}

export default Card
