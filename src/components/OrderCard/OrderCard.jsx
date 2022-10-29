import React from "react";
import styles from "./OrderCard.module.css";
export default function OrderCard({ img, description, reseller, date }) {
  const currentDate = new Date(date);
  const formatDate = currentDate.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className={styles.product}>
      <h3 className={styles.productCreationDate}>{formatDate}</h3>
      <div className={styles.productDetail}>
        <img src={img} alt="product" className={styles.productThumbnail} />
        <div className={styles.productOrder}>
          <small className={styles.productOrderSend}>Entregado</small>
          <span className={styles.productOrderReceivedDate}>
            Llegó el {formatDate}
          </span>
          <p className={styles.productOrderDescription}>{description}</p>
        </div>
        <div className={styles.reseller}>
          <h4 className={styles.resellerName}>{reseller}</h4>
          <a href="" className={styles.resellerContact}>
            Enviar mensaje
          </a>
        </div>
      </div>
    </div>
  );
}
