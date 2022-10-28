import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/images/wrongResult.png";
import styles from "./PurchaseError.module.css";

const PurchaseError = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className={styles.error}>
      <div className={styles.errorContainer}>
        <h2 className={styles.errorTitle}>
          Oh no! algo ha salido mal con tu compra
        </h2>
        <div className={styles.errorImgContainer}>
          <img
            src={errorImage}
            alt="Hombre tropezando con una escoba"
            className={styles.errorImg}
          />
        </div>
        <div className={styles.errorDescription}>
          <span className={styles.errorSpan}>
            Ya tu error fue notificado a nuestro equipo de trabajo.
          </span>
          <span className={styles.errorSpan}>
            Puedes volver a intentarlo, no te desanimes!
          </span>
          <button className={styles.errorButton} onClick={handleNavigate}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseError;
