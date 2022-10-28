import React from "react";
import styles from "./ProductCard.module.css";
import { formatPrice } from "../../utils/numbers";
import cn from "classnames";
import { useNavigate } from "react-router";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "react-toastify";

const ProductCard = ({
  id,
  name,
  brand,
  price,
  thumbnail,
  city,
  reseller,
  reseller_rating,
  stock,
}) => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate("/product/" + id + "/" + name);
  };
  const { addItem, cartDetails } = useShoppingCart();

  const currentStock = cartDetails[id]?.quantity
    ? stock - cartDetails[id]?.quantity
    : stock;

  const addItemSuccess = () => {
    addItem({
      id,
      name,
      brand,
      price,
      thumbnail,
      city,
      reseller,
      reseller_rating,
      stock,
    });
    toast.success("Se añadió el producto con éxito");
  };
  return (
    <article className={styles.box}>
      <figure
        data-testid="card-element"
        className={styles.figure}
        onClick={goToProduct}
      >
        <img
          className={styles.image}
          alt={`Imagen de ${name}`}
          src={thumbnail}
        />
        <figcaption className={styles.figcaption}>
          <strong>{reseller}</strong>
          Puntuación:&nbsp; {reseller_rating}
        </figcaption>
      </figure>
      <div className={styles.info}>
        <span className={styles.name} onClick={goToProduct}>
          {name}
        </span>
        <span className={styles.brand}>{brand}</span>
        <span className={styles.city}>{city}</span>
        <span className={styles.price}>{formatPrice(price)}</span>
        {currentStock > 0 ? (
          <button
            className={cn("button", styles.button)}
            onClick={addItemSuccess}
          >
            Agregar al carrito
          </button>
        ) : (
          <button className={cn("button", styles.disabled)} disabled>
            Sin stock
          </button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
