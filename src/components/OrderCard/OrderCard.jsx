import React from "react";
import styles from "./OrderCard.module.css";
import GoogleLogo from "../../assets/google-logo.png";
export default function OrderCard() {
  return (
    <div className={styles.product}>
      <h3 className={styles.productCreationDate}>17 de Noviembre del 2021</h3>
      <div className={styles.productDetail}>
        <img
          src={GoogleLogo}
          alt="product"
          className={styles.productThumbnail}
        />
        <div className={styles.productOrder}>
          <small className={styles.productOrderSend}>Entregado</small>
          <span className={styles.productOrderReceivedDate}>
            Llegó el 20 de Noviembre
          </span>
          <p className={styles.productOrderDescription}>
            Descripción del producto, lorem ipsum porro est qui ipsum quia dolor
            sit, consectetur, ...
          </p>
        </div>
        <div className={styles.reseller}>
          <h4 className={styles.resellerName}>Juliana Rojas Arroyare</h4>
          <a href="" className={styles.resellerContact}>
            Enviar mensaje
          </a>
        </div>
      </div>
    </div>
  );
}
