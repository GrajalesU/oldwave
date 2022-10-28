import { formatPrice } from "../../utils/numbers";
import styles from "./ProductSideBarShop.module.css";
import cn from "classnames";
import { useShoppingCart } from "use-shopping-cart";

function ProductSideBarShop({ id, name, price, thumbnail, quantity, stock }) {
  const { incrementItem, decrementItem, removeItem, cartDetails } =
    useShoppingCart();
  const deleteProduct = () => {
    removeItem(id);
  };

  const currentStock = cartDetails[id]?.quantity
    ? stock - cartDetails[id]?.quantity
    : stock;

  const decrease = () => {
    decrementItem(id);
  };

  const increase = () => {
    incrementItem(id);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.thumbnail} src={thumbnail} alt={name} />
        <div className={styles.info}>
          <h1 className={styles.title}>{name}</h1>
          <span className={styles.price}>{formatPrice(price)}</span>
          <div className={styles.quantity}>
            <button
              className={styles.decrease}
              type="button"
              onClick={decrease}
            >
              -
            </button>
            <span className={styles.quantity_value}>{quantity}</span>
            <button
              className={cn(styles.increase, {
                [styles.disabled]: currentStock <= 0,
              })}
              type="button"
              onClick={increase}
              disabled={currentStock <= 0}
            >
              +
            </button>
          </div>
          {stock <= 0 && <span className={styles.out_stock}>Sin stock</span>}
        </div>
      </div>
      <span
        className={cn("material-symbols-outlined", styles.delete)}
        type="button"
        onClick={deleteProduct}
      >
        delete
      </span>
    </div>
  );
}

export default ProductSideBarShop;
