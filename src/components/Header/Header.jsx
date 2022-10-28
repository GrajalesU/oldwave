import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "../../assets/oldwave-logo-horizontal.png";
import User from "../../assets/login-icon.svg";
import Shopping_bag from "../../assets/carrito.svg";
import { Link, useNavigate } from "react-router-dom";
import { useUser, useDispatch } from "../../context/user";
import { useState } from "react";
import SideBarShop from "../SideBarShop/SideBarShop";

function Header() {
  const user = useUser();
  const userDispatch = useDispatch();
  const navigation = useNavigate();
  const handleAccount = () => {
    if (!user.name) return navigation("/login");
    return userDispatch({ type: "logout" });
  };
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

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
        <button className={styles.header_register} onClick={handleAccount}>
          {user?.name ? "Cerrar sesión" : "Regístrate o inicia sesión"}
        </button>
        <img
          className={cn(
            "material-symbols-outlined",
            styles.header_icons,
            styles.header_user
          )}
          src={user?.picture || User}
          alt="Icono de login"
          referrerPolicy="no-referrer"
        ></img>
        <img
          className={cn(
            "material-symbols-outlined",
            styles.header_icons,
            styles.header_shopping_bag
          )}
          src={Shopping_bag}
          alt="Icono de carrito de compras"
          onClick={showSideBar}
        ></img>
        <div className={styles.header_sideBarShop}>
          {sidebar ? (
            <>
              <div className="">
                <SideBarShop
                  className={styles.header_sideBarShop_component}
                  active={setSidebar}
                />
              </div>
              <div
                className={styles.header_sideBarShop_bottom}
                onClick={showSideBar}
              />
            </>
          ) : null}
        </div>
        <div className={styles.header_sideBarShop}>
          <div className="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
