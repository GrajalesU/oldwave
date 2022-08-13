import React from "react";
import styles from "./Footer.module.css";
import secureShopp from "../../assets/images/icon-compras-seguras.svg";
import sendAllCountry from "../../assets/images/icon-envios-todo-elpais.svg";
import multiplesPayment from "../../assets/images/icon-multiples-medios-pago.svg";
import qualityGaranteed from "../../assets/images/icon-calidad-garantizada.svg";
import OldWave from "../../assets/images/logo-oldwave-header.svg";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";
import "./Footer.module.css";

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
          <p className={styles.principalText}>Suscríbete a nuestro boletín</p>
          <p className={styles.secondText}>
            Recibe información de nuestras ofertas
          </p>
        </div>

        <div className={styles.btnInfo}>
          <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className={styles.inputEmail}
          />
          <button className={styles.btnSuscribe}>Suscribirme</button>
          <p className={styles.terms}>
            *Al suscribirme acepto recibir emails e información de oldwaves,
            bajo sus Politicas de datos
          </p>
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.allInformationAndLinks}>
          <img src={OldWave} alt="OldWave icon" />
          <div>
            <p className={styles.textSpan}>Oldwave</p>
            <p>¿Quienes somos?</p>
            <p>Nuestras tiendas</p>
          </div>
          <div>
            <p className={styles.textSpan}>Links de interés</p>
            <p>Preguntas frecuentes</p>
            <p>Términos y condiciones</p>
            <p>Políticas de devolucines</p>
          </div>
          <div>
            <p className={styles.textSpan}>Contácto</p>
            <p>servicioalcliente@oldwave.co</p>
            <p>Telefono: 3161924</p>
            <div>
              <p className={styles.textSpan}>Redes Sociales</p>
              <img
                src={FacebookIcon}
                alt="Facebook icono"
                style={{ marginRight: "10px" }}
              />
              <img src={InstagramIcon} alt="Instagram icono" />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          oldwave© 2022 | Powered by: Team Empresariales
        </div>
      </div>
    </footer>
  );
};

export default Footer;
