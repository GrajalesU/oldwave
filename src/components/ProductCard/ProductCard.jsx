import React from "react";
import styles from "./ProductCard.module.css";
import { formatPrice } from "../../utils/numbers";
import cn from "classnames";
import { useNavigate } from "react-router";

const ProductCard = ({
  id,
  name,
  brand,
  price,
  thumbnail,
  city,
  reseller,
  reseller_rating,
}) => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate("/product/" + id + "/" + name);
  };

  return (
    <article className={styles.box}>
      <figure className={styles.figure} onClick={goToProduct}>
        <img
          className={styles.image}
          alt={`Imagen de ${name}`}
          src={thumbnail}
        />
        <figcaption className={styles.figcaption}>
          <strong>{reseller}</strong>
          &nbsp;•&nbsp; Puntuación:&nbsp;
          {reseller_rating}
        </figcaption>
      </figure>
      <div className={styles.info}>
        <span className={styles.name} onClick={goToProduct}>
          {name}
        </span>
        <span className={styles.brand}>{brand}</span>
        <span className={styles.city}>{city}</span>
        <span className={styles.price}>{formatPrice(price)}</span>
        <button className={cn("button", styles.button)}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
