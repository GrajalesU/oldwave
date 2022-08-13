import React from "react";
import styles from "./Footer.module.css";
import secureShopp from "../../assets/images/icon-compras-seguras.svg";
import sendAllCountry from "../../assets/images/icon-envios-todo-elpais.svg";
import multiplesPayment from "../../assets/images/icon-multiples-medios-pago.svg";
import qualityGaranteed from "../../assets/images/icon-calidad-garantizada.svg";

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.paymentSection}>
        <div className={styles.containerPaymentImg}>
          <img src={secureShopp} alt="Compras seguras" />
          <div>
            <p>Compras</p>
            <p>Seguras</p>
          </div>
        </div>
        <div className={styles.containerPaymentImg}>
          <img src={multiplesPayment} alt="Múltiples medios de pago" />
          <div>
            <p>Múltiples medios</p>
            <p>de pago</p>
          </div>
        </div>
        <div className={styles.containerPaymentImg}>
          <img src={qualityGaranteed} alt="Calidad Garantizada" />
          <div>
            <p>Calidad</p>
            <p>Garantizada</p>
          </div>
        </div>
        <div className={styles.containerPaymentImg}>
          <img src={sendAllCountry} alt="Enviós a Todo el pais" />
          <div>
            <p>Enviós a </p>
            <p>Todo el pais</p>
          </div>
        </div>
      </div>
      <div className={styles.subscribeSection}>
        <div className={styles.infoText}>
            <p style={{fontSize: '26px', fontWeight: 'bold'}}>Suscríbete a nuestro boletín</p>
            <p style={{fontSize: '18px'}}>Recibe información de nuestras ofertas</p>
        </div>
        <div className={styles.btnInfo}>
            <div>
                <input type="text" placeholder="Ingresa tu correo electrónico"/>
                <button>Suscribirme</button>
            </div>
            <p>*Al suscribirme acepto recibir emails e información de oldwaves, bajo sus Politicas de datos</p>
        </div>
      </div>
      <div className={styles.infoSection}></div>
    </footer>
  );
};

export default Footer;
