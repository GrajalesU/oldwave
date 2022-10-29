import styles from "./SideBarShop.module.css";
import ProductSide from "../ProductSideBarShop/ProductSideBarShop";
import { useShoppingCart } from "use-shopping-cart";
import { formatPrice } from "../../utils/numbers";
import { useUser } from "../../context/user";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addOrder } from "../../utils/api";

function SideBarShop({ active }) {
  const user = useUser();
  const navigate = useNavigate();
  const closeSidebar = () => {
    active(false);
  };

  const { totalPrice, cartCount, cartDetails, clearCart } = useShoppingCart();

  const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);

  const handlePurchase = async () => {
    if (!user.sub) {
      navigate("/login");
      active(false);
      toast.info("Debes de iniciar sesión para realizar la compra");
    }
    const products = cartItems.map(({ id, quantity }) => {
      return {
        id,
        quantity,
      };
    });

    let idProduct = [];
    let quantity = [];

    products.forEach((element) => {
      idProduct.push(element.id);
      quantity.push(element.quantity);
    });

    const idUser = user.sub;

    const result = await addOrder(idUser, idProduct, quantity);
    active(false);

    if (result.Succes) {
      clearCart();
      return navigate("/thanks");
    }

    return navigate("/purchaseError");
  };

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
            onClick={handlePurchase}
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBarShop;
