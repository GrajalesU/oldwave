import styles from "./SideBarShop.module.css";
import ProductSide from "../ProductSideBarShop/ProductSideBarShop";
import { useShoppingCart } from "use-shopping-cart";
import { formatPrice } from "../../utils/numbers";

function SideBarShop({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  const { totalPrice, cartCount, cartDetails } = useShoppingCart();

  const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);

  return (
    <div className={styles.sideBarShop_container}>
      <div className={styles.sideBarShop_top_container}>
        <div className={styles.sideBarShop_title_container}>
          <span className={styles.sideBarShop_title}>Carrito de compras</span>
        </div>
        <div className={styles.sideBarShop_close_container}>
          <button
            className={styles.sideBarShop_close_button}
            type="button"
            onClick={closeSidebar}
            data-testid="close"
          >
            x
          </button>
        </div>
      </div>

      <div className={styles.sideBarShop_products_container}>
        {cartItems.map((currentProduct) => {
          return (
            <ProductSide
              key={currentProduct.id}
              id={currentProduct.id}
              name={currentProduct.name}
              price={currentProduct.price}
              thumbnail={currentProduct.thumbnail}
              quantity={currentProduct.quantity}
              stock={currentProduct.stock}
            />
          );
        })}
      </div>

      <div>
        <div className={styles.sideBarShop_bottom_container}>
          <span className={styles.sideBarShop_subtotal}>
            SUBTOTAL ({cartCount})
          </span>
          <span className={styles.sideBarShop_total}>
            {formatPrice(totalPrice)}
          </span>
        </div>
        <div className={styles.sideBarShop_finalize_order_container}>
          <button
            className={styles.sideBarShop_finalize_order_button}
            type="button"
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBarShop;
