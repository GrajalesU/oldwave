import { formatPrice } from "../../utils/numbers";
import styles from "./ProductSideBarShop.module.css";
import cn from "classnames";
import { useShoppingCart } from "use-shopping-cart";

function ProductSideBarShop({ id, name, price, thumbnail, quantity }) {
  const { incrementItem, decrementItem, removeItem } = useShoppingCart();
  const deleteProduct = () => {
    removeItem(id);
  };
  const decrease = () => {
    decrementItem(id);
  };
  const increase = () => {
    incrementItem(id);
  };
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_container}>
        <img className={styles.product_card_image} src={thumbnail} alt={name} />
        <div className={styles.product_card_info}>
          <h1 className={styles.product_card_title_name}>{name}</h1>
          <div className={styles.product_card_container_text}>
            <span className={styles.product_card_price}>
              {formatPrice(price)}
            </span>
            <div className={styles.product_card_button_container}>
              <button
                className={styles.product_card_button_decrease}
                type="button"
                onClick={decrease}
              >
                -
              </button>
              <span className={styles.product_card_quantity}>{quantity}</span>
              <button
                className={styles.product_card_button_increase}
                type="button"
                onClick={increase}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.product_card_button_close_container}>
        <span
          className={cn(
            "material-symbols-outlined",
            styles.product_card_button_close
          )}
          type="button"
          onClick={deleteProduct}
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default ProductSideBarShop;
