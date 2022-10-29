import React from "react";
import { useNavigate } from "react-router-dom";
import shoppingImage from "../../assets/images/shopping.png";
import styles from "./RightPurchase.module.css";

const RightPurchase = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/orders");
  };
  return (
    <div className={styles.purchaseResult}>
      <div className={styles.purchaseResultContainer}>
        <img
          src={shoppingImage}
          alt="Mujer feliz de realizar su compra"
          className={styles.purchaseResultImg}
        />
        <div className={styles.purchaseResultDescription}>
          <h2 className={styles.purchaseResultTitle}>Gracias por tu compra</h2>
          <span className={styles.purchaseResultSpan}>
            Tu pedido va en camino!
          </span>
          <button
            className={styles.purchaseResultButton}
            onClick={handleNavigate}
          >
            Ver mis pedidos
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPurchase;
