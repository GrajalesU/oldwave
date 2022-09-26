import OldWaveLogo from "../../assets/oldwave-icon.png";
import GoogleLogo from "../../assets/google-logo.png";
import BackArrow from "../../assets/images/arrow-back.svg";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login_title_group}>
        <img
          className={styles.login_ow_logo}
          src={OldWaveLogo}
          alt="Oldwave Logo"
        />
        <h1 className={styles.login_title}>Login</h1>
      </div>
      <div className={styles.login_description}>
        <div className={styles.login_description_decoration} />
        <p className={styles.login_description_text}>
          Inicia sesión en un click
        </p>
        <div className={styles.login_description_decoration} />
      </div>
      <div className={styles.login_btns}>
        <button className={styles.login_google_btn}>
          <img src={GoogleLogo} alt="Google Logo" />
        </button>
        <button className={styles.login_back_btn}>
          <img src={BackArrow} alt="Back symbol" />
        </button>
      </div>
    </div>
  );
};

export default Login;
