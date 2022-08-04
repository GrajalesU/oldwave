import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "../../assets/oldwave-logo-horizontal.png";
import User from "../../assets/login-icon.svg";
import Shopping_bag from "../../assets/carrito-icon.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_begin}>
        <span
          class={cn(
            "material-symbols-outlined",
            styles.header_icons,
            styles.header_menu
          )}
        >
          menu
        </span>
        <img
          className={styles.header_image}
          src={Logo}
          alt="Logotipo OldWave"
        ></img>
      </div>
      <div className={styles.header_end}>
        <input
          className={styles.header_input}
          placeholder="Regístrate o inicia sesión"
        ></input>
        <img
          class={cn(
            "material-symbols-outlined",
            styles.header_icons,
            styles.header_user
          )}
          src={User}
          alt="Icono de login"
        ></img>
        <img
          class={cn(
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
