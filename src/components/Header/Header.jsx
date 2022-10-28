import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "../../assets/oldwave-logo-horizontal.png";
import User from "../../assets/login-icon.svg";
import Shopping_bag from "../../assets/carrito.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_begin}>
        <span
          className={cn(
            "material-symbols-outlined",
            styles.header_icons,
            styles.header_menu
          )}
        >
          menu
        </span>
        <Link to="/">
          <img
            className={styles.header_image}
            src={Logo}
            alt="Logotipo OldWave"
          ></img>
        </Link>
      </div>
      <div className={styles.header_end}>
        <button className={styles.header_register}>
          Regístrate o inicia sesión
        </button>
        <img
          className={cn(
            "material-symbols-outlined",
            styles.header_icons,
            styles.header_user
          )}
          src={User}
          alt="Icono de login"
        ></img>
        <img
          className={cn(
            "material-symbols-outlined",
            styles.header_icons,
            styles.header_shopping_bag
          )}
          src={Shopping_bag}
          alt="Icono de carrito de compras"
        ></img>
      </div>
    </div>
  );
}

export default Header;
